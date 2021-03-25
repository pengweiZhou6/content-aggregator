<div align="center">
  <img src="client/src/logo.png" alt="Clash" width="200">
</div>

<div align="center"> 
    <h4 align="center">Local stories by local developers.</h4> 
</div>

# Production Environment
### Requirements

Must be running **Ubuntu 18.04 LTS**. The deployment script will fail to run in other Linux distributions. 

### Dependencies

[Node.js](https://github.com/nodesource/distributions/blob/master/README.md#installation-instructions-1) >= 12.x  
[MySQL](https://dev.mysql.com/downloads/repo/apt/) >= 8.x  
[Serve](https://www.npmjs.com/package/serve) >= 11.x

All three dependencies will be installed by the deployment script.

### Configuration

The deployment script will look for a configuration file named `prod.conf` in the same directory:

<details>
  <summary>Sample production config file (click to expand)</summary>

```sh
## Server Config
# Database
DB_USERNAME=root
DB_PASSWORD=pass
DB_HOST=localhost
DB_NAME=example_database
# Mail
MAIL_DOMAIN=mail.example.com
MAIL_APIKEY=1234556789abcdefg
# JWT
JWT_SECRET=dev-secret
# Google OAuth2.0 server
GOOGLE_CLIENT_ID=11111111-clientid.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=qwertyuiopasdfghjkzcxvnm
## Client Config
# Host
REACT_APP_SERVER_HOST=http://example.com
REACT_APP_SERVER_PORT=9000
# Google OAuth2.0
REACT_APP_GOOGLE_CLIENT_ID=11111111-clientid.apps.googleusercontent.com # Should match GOOGLE_CLIENT_ID
```
</details>

Ensure the configuration file contains all necessary environment variables and is saved as `prod.conf`.  
For a description of each variable, see [Environment Variables](#environment-variables).

### Installation

To install Content Hub for the first time, run the deployment script using the `install` argument with sudo permissions:
```sh
$ sudo ./deploy.sh install
```
All required dependencies, along with any required systemd service files, will be installed.

### Deployment

The deployment script handles all deployment activities.  
To update the project repository and re-deploy, choose one of the following options:
```sh
$ ./deploy.sh update         # Update both frontend and backend
$ ./deploy.sh updatefrontend # Only update frontend
$ ./deploy.sh updatebackend  # Only update backend
```

To reload the database:
```sh
$ ./deploy.sh database
```

To start and stop Content Hub:
```sh
$ ./deploy.sh start
$ ./deploy.sh stop
```

To check backend logs:
```sh
$ ./deploy.sh log
```

## Environment Variables

### Server Side
    
    DB_USERNAME                MySQL server username
    DB_PASSWORD                MySQL server password
    DB_HOST                    MySQL server hostname
    DB_NAME                    Content Hub database name in MySQL

    MAIL_DOMAIN                Mail server domain name registered in Mailgun account
    MAIL_APIKEY                Mailgun API key retrieved from Mailgun account

    JWT_SECRET                 Secret key used to sign the JSON Web Token

    GOOGLE_CLIENT_ID           Client ID retrieved from Google OAuth 2.0 Admin Panel. Required for login via Google OAuth
    GOOGLE_CLIENT_SECRET       Client secret retrieved from Google OAuth 2.0 Admin Panel. Required for login via Google OAuth


### Client Side

    REACT_APP_SERVER_HOST      Hostname of the server. Do not include trailing '/'
    REACT_APP_SERVER_PORT      Port of the server

    REACT_APP_GOOGLE_CLIENT_ID Client ID from Google OAuth 2.0 Admin panel, should match GOOGLE_CLIENT_SECRET


## References

[Google OAuth 2.0](https://console.developers.google.com/) client credentials are required to enable login via Google OAuth 2.0. See more details [here](https://developers.google.com/identity/protocols/oauth2).  
Content Hub uses [Mailgun](https://www.mailgun.com/) for the [batch sending](https://documentation.mailgun.com/en/latest/user_manual.html#batch-sending) of emails. To use the Mailgun API, an API key from a verified mailgun account and a valid [domain name](https://help.mailgun.com/hc/en-us/articles/202256730-How-do-I-pick-a-domain-name-for-my-Mailgun-account-) are required.

# Development Environment
## Installation

### Setup Node.js

Download and install [Node.js](https://nodejs.org/en/) >= 12.x

### Setup local database

Download and install [MySQL](https://dev.mysql.com/downloads/mysql/) >=8.x  
Use **MySQL** to run `db_create.sql` and `db_load.sql` scripts.

### Setup environment variables

To set environment variables, refer to the following config file examples:

<details>
  <summary>Sample Linux config file (click to expand)</summary>

```sh
## Server setup
# DB setup
export DB_HOST=localhost
export DB_NAME=example_database
export DB_USERNAME=root
export DB_PASSWORD=pass
# Mail setup
export MAIL_DOMAIN=mail.example.com
export MAIL_APIKEY=1234556789abcdefg
# JWT setup
export JWT_SECRET=dev-secret
# Google OAuth2.0 server setup
export GOOGLE_CLIENT_ID=11111111-clientid.apps.googleusercontent.com
export GOOGLE_CLIENT_SECRET=qwertyuiopasdfghjkzcxvnm
## Client setup
# Host setup
export REACT_APP_SERVER_HOST=http://localhost
export REACT_APP_SERVER_PORT=9000
# Google OAuth2.0 setup
export REACT_APP_GOOGLE_CLIENT_ID=11111111-clientid.apps.googleusercontent.com # Should match GOOGLE_CLIENT_SECRET
```
</details>

Save the file as `dev.conf` and source from it using:

```sh
$ source dev.conf
```

<details>
  <summary>Sample Windows config file (click to expand)</summary>

```sh
:: Server setup
:: DB setup
set DB_HOST=localhost
set DB_NAME=example_database
set DB_USERNAME=root
set DB_PASSWORD=pass
:: Mail setup
set MAIL_DOMAIN=mail.example.com
set MAIL_APIKEY=1234556789abcdefg
:: JWT setup
set JWT_SECRET=dev-secret
:: Google OAuth2.0 server setup
set GOOGLE_CLIENT_ID=11111111-clientid.apps.googleusercontent.com
set GOOGLE_CLIENT_SECRET=qwertyuiopasdfghjkzcxvnm
:: Client setup
:: Host setup
set REACT_APP_SERVER_HOST=http://localhost
set REACT_APP_SERVER_PORT=9000
:: Google OAuth2.0 setup
set REACT_APP_GOOGLE_CLIENT_ID=11111111-clientid.apps.googleusercontent.com
```
</details>

Save the file as `dev.bat` and execute from it using:

```sh
$ dev
```

## Usage
### Start client

```sh
$ cd client  
$ npm install  
$ npm start # Starts at localhost:3000
```

### Start server

```sh
$ cd server  
$ npm install  
$ npm start # Starts at localhost:9000
```

# Testing

### Framework
[Jasmine v3.5.0](https://github.com/jasmine/jasmine/releases)

Installation and usage **[optional]**:
```sh
$ cd server
$ sudo npm install -g jasmine
$ jasmine
```

To run backend tests without installing Jasmine, use `npx`:
```sh
$ cd server
$ npx jasmine
```