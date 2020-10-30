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


/* GET user by id. */
router.get('/:id', function (req, res, next) {

    connectToServer(function (err) {
        if (err) throw err;

        const id = req.params.id;
        const ObjectID = require('mongodb').ObjectID;
        const userId = new ObjectID(id);

        const db = getDb();
        db.collection(dbName).find({"_id": userId}).toArray(function (err, result) {
            if (err) throw err;
            res.json(result);
        });
    });

});

module.exports = router;
