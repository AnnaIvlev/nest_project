This is a simple NestJS application with GraphQL support and an in-memory SQLite database.

## Project Structure

- `src/`: This directory contains the source code of your NestJS application.
  - `user/` and `product/`: These directories represent your GraphQL modules.
    - `user.entity.ts` and `product.entity.ts`: TypeORM entities for User and Product.
    - `user.module.ts` and `product.module.ts`: NestJS modules for User and Product.
    - `user.resolver.ts` and `product.resolver.ts`: GraphQL resolvers for User and Product.
    - `user.service.ts` and `product.service.ts`: Services for User and Product.
  - `app.module.ts`: The main application module where you import other modules.
  - `main.ts`: The entry point of your application.

- `ormconfig.js`: TypeORM configuration for the in-memory SQLite database.

- `package.json`: Project dependencies and scripts.

- `tsconfig.json`: TypeScript configuration.

## Getting Started

1. Clone this repository.
2. Run `npm install` to install project dependencies.
3. Use `npm run start` to start the NestJS server.
4. Access the GraphQL API at `http://localhost:3000/graphql`.

## GraphQL API

- You can interact with the GraphQL API to add users, products, and make queries.

## License

This project is licensed under the MIT License.