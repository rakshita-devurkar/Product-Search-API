# Product-Search-API

This repository contains the Walmart [Take-Home Challenge](https://gist.github.com/daniyalzade/8e32cd266aebd6d2ce35). 
The REST APIs are written in HapiJS framework and the views are rendered using the [hapi-react-views](https://github.com/jedireza/hapi-react-views) 
engine. [Sync-request](https://www.npmjs.com/package/sync-request) is used to fetch data from the Walmart API serially.

### Prerequisites

You need to have [Node.js](https://nodejs.org/en/) installed and [MongoDB](https://docs.mongodb.com/manual/installation/) installed and running.

### Installing
1) Clone the repository
```
$ git clone git@github.com:rakshita-devurkar/Product_Search_API.git
$ cd Product_Search_API
```
2) Install the dependencies
```
$ npm install
```
3) Start the server
```
$ npm start
```
This should print 'Server running at: http://localhost:3000' and 'Connected to database.' on the terminal.
### Accessing the API
In your browser,
1) Go to "http://localhost:3000". This should display all the products from the data.csv file.

2) Go to "http://localhost:3000/product/mattress. This should display all the 'mattress' products from the data.csv file.

### Running the tests
To test this project, run the following command:
```
npm test
```
This script uses [Code](https://github.com/hapijs/code) and [Lab](https://github.com/hapijs/lab) libraries to perform unit testing on REST APIs and Views.

### To-Do
1) Use async library with delays to fetch data from Walmart API to improve speed.
2) Remount the views on client side to incorprate React event handling

