# keycash-backend-challenge-puntar

This is a demo project made with Nestjs / Express & TypeOrm Stack.
It has basic crud operations, swagger, documentation and is docker based.

It was inspired by Leonardo Balsalobre project (https://github.com/oliveirabalsa/nestjs-typeorm-skeleton)

## Running the project

1. Copy the .env.sample file and fill with your information. As it is, it will work with the default configuration.
2. Run *docker-compose up* in your terminal
3. Be happy

**The swagger documentation will be available at http:localhost:3000/swagger**
There, you'll see all the routes, and the necessary properties to perform all the crud operations.

## Next steps

This project was built with a lack of avaiable time. There is a bunch of things to be done in the project to become production ready, I could list some as:

- Better Docker configuration for deployment;
- TypeORM migrations (currently, the project is using typeorm synchronize;
- Clean architecture to be frameworks or tools agnostic;
- Unit & integration tests;

