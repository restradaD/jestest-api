const MongoClient = require('mongodb').MongoClient;
const dotenv = require('dotenv');
dotenv.config();

const url = process.env.MONGODB_URL;
const databaseName = process.env.DB_NAME;
let _db;

/*
creates a database connection
 */
module.exports = {
    connectToServer: function (callback) {
        MongoClient.connect(url, {useNewUrlParser: true}, function (err, client) {
            _db = client.db(databaseName);
            return callback(err);
        });
    },

    getDb: function () {
        return _db;
    }, dbName: databaseName
}
