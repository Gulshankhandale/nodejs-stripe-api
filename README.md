# Nodejs Stripe API
## _Simple Nodejs App_

[![N|Solid](https://i.ibb.co/0nbMyrY/CREATED-BY-GULSHAN-1.png)](https://gulshankhandale.tech)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://github.com/Gulshankhandale/nodejs-stripe-api.git)

## Features

- Make A Payment
- Create User
- Retrieve User
- Set Currency
- Set Amount


## Tech

Nodejs-Stripe-API uses a Stripejs to work properly:

- [Nodejs] - Server Side Language!
- [ExpressJS] - handling HTTP requests
- [NPM] - NPM is a node package manager.
- [Body-Parser] - For parsing the body(NPM Package)
- [Nodemon] - Hot Reload
- [EJS] - Simple Templating Engine


## Installation

This app requires [Node.js](https://nodejs.org/) v16+ to run.

Install the dependencies and devDependencies and start the server.

```sh
cd dillinger
npm i
nodemon app
```

For production environments...

```sh
npm install --production
NODE_ENV=production node app
```


## Development

Want to contribute? Great!

Dillinger uses Gulp + Webpack for fast developing.
Make a change in your file and instantaneously see your updates!

Open your favorite Terminal and run these commands.

First Tab:

```sh
node app
```

Second Tab:

```sh
gulp watch
```

(optional) Third:

```sh
karma test
```

#### Building for source

For production release:

```sh
gulp build --prod
```

Generating pre-built zip archives for distribution:

```sh
gulp build dist --prod
```

## Docker


By default, the Docker will expose port 8080, so change this within the
Dockerfile if necessary. When ready, simply use the Dockerfile to
build the image.

```sh
cd dillinger
docker build -t <youruser>/dillinger:${package.json.version} .
```

This will create the App image and pull in the necessary dependencies.
Be sure to swap out `${package.json.version}` with the actual
version of Dillinger.

Once done, run the Docker image and map the port to whatever you wish on
your host. In this example, we simply map port 8000 of the host to
port 8080 of the Docker (or whatever port was exposed in the Dockerfile):

```sh
docker run -d -p 8000:8080 --restart=always --cap-add=SYS_ADMIN --name=dillinger <youruser>/dillinger:${package.json.version}
```

> Note: `--capt-add=SYS-ADMIN` is required for PDF rendering.

Verify the deployment by navigating to your server address in
your preferred browser.

```sh
127.0.0.1:8000
```

## License

MIT

**Free Software, Hell Yeah!**
