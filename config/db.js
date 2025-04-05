const { MongoClient } = require('mongodb');
require('../src/dotenv').config();

let dbConnection;

module.exports = {
  connectToDb: (cb) => {
    MongoClient.connect(process.env.MONGODB_URI)
      .then(client => {
        dbConnection = client.db();
        console.log('Connected to MongoDB Atlas');
        return cb();
      })
      .catch(err => {
        console.log('MongoDB connection error:', err);
        return cb(err);
      });
  },
  getDb: () => dbConnection
};