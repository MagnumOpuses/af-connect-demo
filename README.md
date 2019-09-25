![alt text][logo]

[logo]: https://github.com/MagnumOpuses/project-meta/blob/master/img/jobtechdev_black.png "JobTech dev logo"
[A JobTech Project](https://www.jobtechdev.se)

# Gravity Demo Site 

Gravity Demo site is an example website that demonstrates the use-case of pre-filling forms with CV data from [Gravity Portability](https://github.com/MagnumOpuses/gravity-portability).

This website's runtime environment is [Node.js](https://nodejs.org/) and is built using the web application framework is [Express](https://expressjs.com/).

The web pages/views are rendered using the [EJS](https://ejs.co/) template engine and [Bootstrap](http://getbootstrap.com) for responsive layouting.

Operating the website in development mode utilizes [Nodemon](https://nodemon.io/) to automatically restart the server upon source code changes.

## Versions, current dev state and future

No versions yet.

## Getting started

No getting started guidelines yet.

### Prerequisites

You need Administrative privilege to make this change

### Installation

Acquire the source code from this repository and install all dependencies using [NPM](https://www.npmjs.com/).

```bash
git clone https://github.com/MagnumOpuses/gravity-demo-site.git
cd gravity-demo-site
npm install
```

#### Customized configuration

Listed below are methods of overriding the default configuration with custom properties.

_Read move about environment configuration here: [dotenv](https://github.com/motdotla/dotenv)_

##### Provide custom properties via configuration file

1. Create an `.env` file at the root of the `gravity-demo-site` directory with the following content.
   
   This `.env` file is ignored by the rules set in `.gitignore`, therefore in this file you may freely customizable the deployment to your own needs.

    ```
    ##Only Localhost config
    LOCAL_PORT=443
    PKEY="./cert_and_key/hacksparrow-key.pem"
    SSLCERT="./cert_and_key/hacksparrow-cert.pem"
    #config for OpenShift deploy
    PORT=3000
    ```


2.  Create an folder name `cert_and_key` at the root of the `gravity-demo-site` directory containing the cerificate and private keys for Https connection.

    Download all the files from this link [Centificate drive link](https://drive.google.com/drive/u/0/folders/1Lju1-2KWkLOGql4bklvEYz0Q0iLTXtAm) and put them in the `cert_and_key` folder.

    This `cert_and_key` folder and the content is ignored by the rules set in `.gitignore`, therefore in this file you may freely customizable the deployment to your own needs.

3.  Go to the host file of your machine
    ```
    For windows: (C:\Windows\System32\drivers\etc\hosts)
    For mac: (/private/etc/hosts)
    Replace the 'localhost' with 'demotest.arbetsformedlingen.se'
    ```


## Test

Execute all test cases to ensure that all its features work as intended.

```
npm test
```

## Deployment

### Deploy the site with Docker in production mode

```
$ docker build --build-arg ARG_BUILDNAME=stage --no-cache -t demo-site .
$ docker run -p 8080:8080 demo-site
```

### Deploy the site with Docker in stage mode

```
$ docker build --build-arg ARG_BUILDNAME=stage --no-cache -t demo-site .
$ docker run -p 8080:8080 demo-site
```

### Deploy the site in development mode

In development mode the [Nodemon](https://nodemon.io/) will automatically detect changes to the source code and restart the server.

```
npm run dev
```

### Run the site on localhost
To run it on your local computer you have to add a (self signed) certificate and a private key and put those entries in to the .env file.

ex.
```
#Only Localhost config
LOCAL_PORT=443
PKEY = './cert_and_key/hacksparrow-key.pem'
SSLCERT = './cert_and_key/hacksparrow-cert.pem'
#Config
PORT=3000
```
Run with:
```
npm run local
```


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
