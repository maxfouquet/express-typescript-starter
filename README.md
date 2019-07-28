# Typescript, Express.js and TSOA

A powerful Express.js API implemented using Typescript and TSOA to generate routes and swagger documentation

# Installation

Clone the repository

```
git clone https://github.com/maxfouquet/express-typescript-starter.git
```

Set up dependencies

```
npm install
```

Generate routes and swagger documentation

```
npm run tsoa
```

Development mode

```
npm run dev
```

Start

```
npm start
```

Test

```
npm run test
```

Test Watch

```
npm run test:watch
```

Build

```
npm run build
```

Lint

```
npm run lint
```

Lint test

```
npm run lint:test
```

Express.js API is running on http://localhost:5000  
Swagger documentation on http://localhost:5000/docs

# Folder structure

```
|-- spec
|   -- index.spec.ts
|-- src
|   |-- tsconfig.json
|   |-- index.ts
|   |-- config
|   |   -- config.ts
|   |   -- express.ts
|   |-- controllers
|   |   -- index.controller.ts
|   |-- public
|   |   -- favicon.ico
|   |-- routes
|   |   -- routes.ts ( auto-generated )
|   |-- swagger
|   |   -- swagger.json ( auto-generated )
|   |-- views
|       -- error.pug
|       -- index.pug
|       -- layout.pug
|-- Dockerfile
|-- docker-compose.yaml
|-- nodemon.json
|-- package.json
|-- README.md
|-- tsconfig.json
|-- tslint.json
|-- tsoa.json
```

# Docker

Build the image sudo docker `build -t maxfouquet/express-typescript-starter .`

Run the image `docker-compose up`

Open `http://localhost:8080`

# License

MIT