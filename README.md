# Wild Bill Gambler

This is a technical test made for Every Matrix on 21th of July, you can look at the code to see the stack and the level of coding.

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

- npm run serve -> Start a local development server and watch over development changes.
- npm run build -> Build a ready for production game inside build directory.
- npm run deploy -> Build and exports a docker container with the game and a server inside deployment directory. Good to run the app on any machine. (usually need sudo permisions)
- npm test -> Launch all the tests to check the app functionalities.
- npm run docs -> Create html documentation for the game. 

## Deployment of the app

Three deployment types.

### Run HTML5 game on any server

Get the code from build directory and serve the app with your fauvorite server system.

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