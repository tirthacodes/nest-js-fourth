<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

# NestJS User Management Project

Welcome to the NestJS User Management Project! This repository contains a basic NestJS application that demonstrates the creation of users, user profiles, and user posts using a MySQL database. The project is structured to follow best practices in terms of module separation, dependency injection, and database interaction.

## Getting Started

Follow these steps to set up and run the project locally on your machine:

### Prerequisites

- Node.js (v14 or higher)
- MySQL Server

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/tirthacodes/nest-js-fourth.git
   ```

2. Navigate to the project directory:

   ```bash
   cd nest-js-fourth
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Configuration

1. Open the `src/app.module.ts` file and update the database connection details in the `TypeOrmModule.forRoot()` options.
2. Ensure that the `entities` array includes the `User`, `Profile`, and `Post` entities.

### Running the Application

Start the NestJS application:

```bash
npm run start:dev
```

The application will be available at `http://localhost:3000`.

## Endpoints

### Create User

- **Endpoint:** `POST /users`
- **Request Body:**

  ```json
  {
    "username": "john_doe",
    "password": "secretpassword"
  }
  ```

### Create User Profile

## Endpoints

This application exposes the following endpoints:

- `GET /users` - Retrieve a list of users along with their profiles and posts.

- `POST /users` - Create a new user.
  - Example Request Body:
    ```json
    {
      "username": "john_doe",
      "password": "secretpassword"
    }
    ```

- `PUT /users/:id` - Update an existing user by ID.
  - Example Request Body:
    ```json
    {
      "username": "updated_john_doe",
      "password": "newsecretpassword"
    }
    ```

- `DELETE /users/:id` - Delete a user by ID.

- `POST /users/:id/profiles` - Create a new profile for a user.
  - Example Request Body:
    ```json
    {
      "firstName": "John",
      "lastName": "Doe",
      "age": 30,
      "dob": "1993-05-15"
    }
    ```

- `POST /users/:id/posts` - Create a new post for a user.
  - Example Request Body:
    ```json
    {
      "title": "My Post Title",
      "description": "This is the content of my post."
    }
    ```

## Contribution

Contributions to this project are welcome! Feel free to fork the repository and submit pull requests for any improvements or fixes.
