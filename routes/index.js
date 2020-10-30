var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    const datetime = new Date();
    res.render('index', {title: 'Rtest api', nowDate: datetime});
});

module.exports = router;
