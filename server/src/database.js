const mongoose = require('mongoose');
const User = require('./models/user.model');

// localhost - connect to MongoDB instance locally on your machine.
const connection = 'mongodb+srv://sanac:a7777777@cluster0.7k2ub.mongodb.net/cluster0?retryWrites=true&w=majority';

// mongodb+srv://sanac:a7777777@cluster0.7k2ub.mongodb.net/admin?retryWrites=true&w=majority
// this address connect to the MongoDB instance on the Docker container
// const connection = 'mongodb://localhost:27017/dockerize-me';
// const connection = 'mongodb://mongo:27017/dockerize-me'; 

const connectDb = () => {
  return mongoose.connect(connection);
};

module.exports = connectDb;
