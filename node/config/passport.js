var JwtStrategy = require('passport-jwt').Strategy;
var User = require('../models/User');

module.exports = function(passport) {
  var opts = {};
  opts.secretOrKey = 't0r1#t3@m#s3cr3t';
  passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({id: jwt_payload.id}, function(err, user) {
          if (err) {
              return done(err, false);
          }
          if (user) {
              done(null, user);
          } else {
              done(null, false);
          }
      });
  }));
};