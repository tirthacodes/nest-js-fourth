import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from 'src/typeorm/entities/Profile';
import { User } from 'src/typeorm/entities/User';
import { CreateUserParams, CreateUserProfileParams, UpdateUserParams } from 'src/users/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User)  private userRepository: Repository<User>,
        @InjectRepository(Profile)  private profileRepository: Repository<Profile>,

    ){}

    findUsers(){
        return this.userRepository.find();
    }

    createUsers(userDetails: CreateUserParams){
        const newUser = this.userRepository.create({ ...userDetails , createdAt: new Date() });
        return this.userRepository.save(newUser);
    }

    updateUsers(id: number, updateUserDetails: UpdateUserParams){
        return this.userRepository.update({ id }, { ...updateUserDetails});
    }

    deleteUsers(id: number){
        return this.userRepository.delete({ id });
    }

    async createUserProfile(id: number, createUserProfileDetails: CreateUserProfileParams){
        const user = await this.userRepository.findOneBy({ id });
        if(!user) throw new HttpException('User not found. Cannot create profile', HttpStatus.BAD_REQUEST);

        const newProfile = this.profileRepository.create(createUserProfileDetails);
        const savedProfile = await this.profileRepository.save(newProfile);
        user.profile = savedProfile;
        return this.userRepository.save(user);
    }
}
