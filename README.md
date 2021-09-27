# podcastination-webapp

[![Angular](https://github.com/life-unlimited/podcastination-webapp/actions/workflows/angular.yml/badge.svg?branch=master)](https://github.com/life-unlimited/podcastination-webapp/actions/workflows/angular.yml)

For general information regarding _podcastination_ have a look [here](https://github.com/life-unlimited/peppa-server).
This README only provides information regarding installation of the webapp.

## Installation

Currently, there is no real binary or anything like that. We simply build the webapp with Angular and deploy it for
usage with nginx. This means that you run the following commands (node and npm installed) and receive the static site
in `dist`.

**IMPORTANT**: Remember to update the `environment.prod.ts` file (backend URLs) before building. This is very important!

```shell
npm install
npm run build:prod
```

And you are ready to go!
