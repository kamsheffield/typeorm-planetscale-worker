## Cloudflare Worker using PlanetScale and TypeORM

### About

Proof of concept showing PlanetScale and TypeORM functioning in a Cloudflare Worker.

### Setup
* `git clone git@github.com:kamsheffield/typeorm-planetscale-worker.git`
* `npm install`
* Create the file `.dev.vars` and add you database credentials to `DATABASE_URL` environment variable

### Build and run
* `npm run start`

### ES Build CLI
`./node_modules/.bin/esbuild ./src/worker.ts --bundle --format=esm --outfile=./dist/out.js --tree-shaking=true --log-limit=0 --minify --keep-names`

### Run
`wrangler dev --no-bundle`
