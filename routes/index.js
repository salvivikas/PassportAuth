var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({ secret: 'SECRET', userProperty: 'loginInfo' });

/* GET home page. */
router.get('/', auth, function (req, res, next) {
    res.render('index', { title: 'Express ' + req.loginInfo.username });
});

module.exports = router;