var passport = require('passport');
var strategy = require('passport-local');

passport.use(new strategy(  
    function (username, password, done) {
        // database dummy - find user and verify password
        if (username === 'vikas' && password === 'vikas') {
            done(null, {
                id: 999,
                username: 'salvi.vikas',
                firstname: 'vikas',
                lastname: 'salvi',
                email: 'salvi.vikas@gmail.com',
                verified: true
            });
        }
        else {
            done(null, false);
        }
    }
));

module.exports = passport; 