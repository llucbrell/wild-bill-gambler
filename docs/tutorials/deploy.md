# Developer instructions


## Stack Description

This game is build uppon Debian 10 (Linux system), using VSCodium as code editor.

- NodeJS for building tools and javascript on the server.
- NPM for running commands and installing software packages.
  - ESLint - lint Javascript
  - Babel - modern Javascrpit
  - Webpack - automate tasks
  - Express - server framework
  - JSDoc - autogenerate documentation
- Bash scripts to use non Javascript tools with the stack
  - Docker for container deployment
  - Git for version control


## Project technologies

This project uses Phaser as the main library to build the test.

## NPM commands instructions

List of commands to automate tasks

- npm run mkdev -> Build the necessary directories and files to start with the development.
- npm run serve -> Start a local development server and watch over development changes.
- npm run build -> Build a ready for production game inside build directory.
- sudo npm run deploy -> Build and exports a docker container with the game and a server inside deployment directory. Good to run the app on any machine. (usually need sudo permisions)
- sudo npm run drun -> Create docker image and run it in a container.
- sudo npm run dstop -> Stops docker container and delete it.
- npm test -> Launch all the tests to check the app functionalities.
- npm run docs -> Create html documentation for the game. 
- npm run server -> Create an http-server for quick development.
- npm run ghdploy -> Deploy the game and documentation on the GitHub Pages.

## Deployment of the app

Three deployment types.

### Run HTML5 game on any server

Get the code from build directory and serve the app with your fauvorite server system.

#### Run from source code in different servers

Download the source code

``` 
git clone https://github.com/llucbrell/wild-bill-gambler.git 
```
and then excute one of this commands

#### Execute the app in an node http-server

This is a good option for older hardware, with not much resources.
``` 
npm run server 
```

this executes a http development server.

#### Execute the app in a node-express server

```
node src/server/index.js
```
this one execute a express server with the minified code (production code).


### Create dockerized app

Ro build and run a container you must to have installed docker and then to build the containerized app, after making the repo clone, execute this command

```
sodo npm run deploy
```
### To import the docker container 

To run the containerized app you need to install docker and run these commands.

``` 
zcat NAMEOFZIP.gz | docker import - NAMEOFCONTAINER
```

To run the container

```
sudo docker run -p 9966:8080 -d NAMEOFCONTAINER 
```

### If you want to build the docker image

Run this command on the root directory of the source code.

```
sudo docker build -t NAMEYOUWANTFORTHEIMAGE .
```
And run a container as usual.

