# Mean Stack - Customer Store App

This Customer Store is a very basic Mean Stack application developed using MongoDB, Express, Angular and Node.js to show CRUD operations on MongoDB using RestAPI.

## Prerequisites

- In order to run this app, you need Node.js, which is javascript runtime installed on our machine.
  So download and install the latest Node.js available from this [link](https://nodejs.org/en/).

- we also need to have MongoDB installed on the machine. You can download and install MongoDB community edition free from this [link](https://www.mongodb.com/download-center/community).

OR

- if you dont want to install MongoDB on your machine then you can use cloud hosted MongoDB service from this [link](https://cloud.mongodb.com/user#/atlas/login). Ypu have to create account and use free tier to host your data.

## Getting Started

Clone or Download the zip file of this repository.

### Setup & Run WebAPI server

Open the command window in the folder where you have unzip the mean-stack-application repository code and move to webapi folder.

```
cd webapi
```

Create **.env** file in it and add following code in the file in case you are using local MongoDB.

`DB_CONNECTION=mongodb://localhost:27017/customerDb`

Otherwise, if you are using cloud based MongoDB service then you the connection string you get from there instead of local one.

Now run following command to install all the package dependencies.

```
npm install
```

Run the following command to run the webapi server in the command window.

```
npm start
```

> WebAPI server will listen at URL - `http://localhost:3000/Customers`

### Setup & Run Client application

Now move to client folder.

```
cd client
```

Now run following command to install all the package dependencies for client.

```
npm install
```

Run following command to start the client application.

```
npm start
```

> Navigate to `http://localhost:4200/`to access the client application.

## Built With

- [Node.js v10.15.1](https://nodejs.org/en/) - The .Net Core framework used
- [Angular CLI v7.3.1](https://cli.angular.io/) - This project was generated with
- [VS Code](https://code.visualstudio.com/download) - The Code editor used

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
