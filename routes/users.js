let express = require('express');
let router = express.Router();

const {connectToServer, getDb, dbName} = require('../models/mongodb-connection');

/* GET users listing. */
router.get('/', function (req, res, next) {

    connectToServer(function (err, client) {
        if (err) throw err;

        const db = getDb();
        db.collection(dbName).find({}).toArray(function (err, result) {
            if (err) throw err;
            // db.close();
            res.json(result);
        });
    });

});

module.exports = router;
