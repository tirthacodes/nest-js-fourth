import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'user_posts' })
export class Post{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;
}