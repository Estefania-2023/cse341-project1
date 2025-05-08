const dotenv = require('dotenv');
dotenv.config();

const mongoClient = require('mongodb').MongoClient;

let database;
const initDb = (callback) => {
  if (database) {
    console.log('Database already initialized!');
    return callback(null, database);
  }
  mongoClient.connect(process.env.MONGODB_URL)
    .then((client) => {
      database = client;
      return callback(null, database);
    })
    .catch((err) => {
      return callback(err);
    });
};
const getDatabase = () => {
  if (!database) {
    throw new Error('Database not initialized!');   
  }
  return database;
}

module.exports = {
  initDb,
  getDatabase,
};