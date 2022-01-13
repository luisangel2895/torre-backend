# Backend Torre

For this project i choose only Express.js because in this case in only nessesary serve the aplications, because we have the endpoint, if i had not received the endpoints and i had create the database probable i had used typescript not only for create a server Express but also for create a REST API too.But for this project only was nessesary a Express server to serve our aplication.

## Stack

With this server i use the stack:

- Typescript
- Dotenv
- Express.js
- Node.js

## How to run

1.This aplication is developed in Typescript so is nessesary first transpile all ts code of our aplication to javascript for that we use the command:

```js
npm run build
```

This comand tranpile all typescript files in one js file to production

2.We need to create a .env file whe we need to indicate the port when our aplication will be server, so we create .env an into the document put the port, like this.

```
PORT=80
```

3.Now we need to have our frontend builded in our folder public.
4.And now finally we run our frontend with our server with the command:

```js
npm start
```
