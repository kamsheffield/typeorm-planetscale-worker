## Cloudflare Worker using PlanetScale and TypeORM

### About

Proof of concept showing PlanetScale and TypeORM functioning in a Cloudflare Worker.

### Setup
* `git clone git@github.com:kamsheffield/typeorm-planetscale-worker.git`
* `git submodule init`
* `git submodule update`

### Build PlanetScale Serverless Driver
* `cd ./libraries/planetscale-database-js`
* `npm install`
* `npm test`
* `cd ..`

### Build TypeORM
* `cd ./typeorm`
* `npm install`
* `npm run package`
* `npm run pack`

### Build and run Worker
* `cd ..`
* `cd ..`
* `npm install`
* `npm run start`
