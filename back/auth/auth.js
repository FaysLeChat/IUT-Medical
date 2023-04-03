const passport = require("passport");
const passportJWT = require("passport-jwt");
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('data/data.db');
const cfg = require("./config");
const ExtractJwt = passportJWT.ExtractJwt;
const Strategy = passportJWT.Strategy;

const opts = {
    secretOrKey: cfg.jwtSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    ignoreExpiration: true
};

module.exports = function() {
    const strategy = new Strategy(opts, (payload, done) => {
        db.get("SELECT * FROM users WHERE id = $id", { $id: payload.id }, function(err, row) {
            if (err) {
                return done(err, null);
            }
            if (!row) {
                return done(err, null);
            }
            return done(null, { id: payload.id });
        });
    });

    passport.use(strategy);

    return {
        initialize: function() {
            return passport.initialize();
        },
        authenticate: function() {
            return passport.authenticate("jwt", cfg.jwtSession);
        }
    };
};
