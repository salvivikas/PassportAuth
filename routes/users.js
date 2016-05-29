var express = require('express');
var passport = require('passport');
var router = express.Router();
var jwt = require('jsonwebtoken');

/* GET users listing. */
router.get('/', function (req, res) {
    res.send('respond with a resource');
});


router.post('/login', function (req, res, next) {
    if (!req.body.username || !req.body.password) {
        return res.status(400).json({ message: 'Please fill out all fields' });
    }
    
    passport.authenticate('local', function (err, user, info) {
        if (err) { return next(err); }
        
        if (user) {
            return res.json({ token: generateJWT(user) });
        } else {
            return res.status(401).json(info);
        }
    })(req, res, next);
});

router.post('/register', function (req, res, next) {
    if (!req.body.username || !req.body.password) {
        return res.status(400).json({ message: 'Please fill out all fields' });
    }
})

generateJWT = function (user) {
    // set expiration to 60 days
    var today = new Date();
    var exp = new Date(today);
    exp.setDate(today.getDate() + 60);
    
    return jwt.sign({
        username: user.username,
        exp: parseInt(exp.getTime() / 1000),
    }, 'SECRET');
};

module.exports = router;