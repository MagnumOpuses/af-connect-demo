![alt text][logo]

[logo]: https://github.com/MagnumOpuses/project-meta/blob/master/img/jobtechdev_black.png "JobTech dev logo"
[A JobTech Project](https://www.jobtechdev.se)

# Gravity Demo Site

Gravity Demo site is an example website that demonstrates the use-case of pre-filling forms with CV data from [Gravity Portability](https://github.com/MagnumOpuses/gravity-portability).

This website's runtime is [Node.js](https://nodejs.org/) and the webserver is built using the minimal [Express](https://expressjs.com/) web application framework.

Operating the website in development mode will utilize the [Nodemon](https://nodemon.io/) feature to automatically restart the server upon source code changes.

Views utilize the [EJS](https://ejs.co/) template engine for layouts and [Bootstrap](http://getbootstrap.com) for responsive rendering.

## Versions, current dev state and future

No versions yet.

## Getting started

No getting started guidelines yet.

### Prerequisites

No prerequisites guidelines yet.

### Installation

Acquire the source code from this repository and install all dependencies using [NPM](https://www.npmjs.com/).

```bash
git clone https://github.com/MagnumOpuses/gravity-demo-site.git
cd gravity-demo-site
npm install
```

### Customized configuration

Listed below are a few methods to provide custom configuration for the website to override the default properties.

_Read move about environment configuration here: [dotenv](https://github.com/motdotla/dotenv)_

#### Provide environment variables via configuration file

Create an `.env` file at the root of the `gravity-demo-site` directory with the following content.

_This `.env` file is ignored by the rules set in `.gitignore`, therefore in this file you may freely customizable the deployment to your own needs._

```
PORT=5000
```

#### Provide environment variables via CLI

If needed be you may override both default and configuration file properties via CLI like this.

```
PORT=8080 npm run dev
```

## Test

Next up you may execute all test cases to ensure that all its features work as intended.

```
npm test
```

## Deployment

### Deploy the site in production mode

```
npm start
```

### Deploy the site in development mode

In development mode the server will automatically detect changes to the source code and restart the server.

```
npm run dev
```

There are a few ways to customize the server envionment properties.

## Built with

  - [Node.js v10.15.3](https://nodejs.org/) (Runtime environment)
  - [NPM v6.4.1](https://www.npmjs.com/) (Node package manager)
  - [Express v4.17.1](https://expressjs.com/) (Web application framework)
  - [Nodemon v1.19.2](https://nodemon.io/) (Change monitor)
  - [EJS v2.7.1](https://ejs.co/) (Template engine)
  - [Bootstrap v3.3.7](http://getbootstrap.com) (CSS framework)
  - [JQuery v3.4.1](https://jquery.com/) (JavaScript util library)

## Contributing

We would love if you'd like to help us build and improve this product for the benefit of everyone. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org/) code of conduct.

Any contributions, feedback and suggestions are more than welcome.

Please read our guidelines for contribution [here](CONTRIBUTING_TEMPLATE.md).

## License

[Apache License 2.0](LICENSE.md)

## Acknowledgments

No acknowledgments yet.
