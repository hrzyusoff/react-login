// passport to auth
const passport = require('passport')
const LocalStrategy = require('./localStrategy')
const User = require('../database/models/user')

passport.serializeUser((user, done) => {
    console.log('SerializeUser, user: ')
    console.log(user)
    console.log('-----')
    done(null, { _id: user._id})
})

passport.deserializeUser((id, done)=> {
    console.log('DeserializeUser invoke')
    User.findOne(
        { _id: id},
        'username',
        (err, user) => {
            console.log('DeserializeUser, user: ')
            console.log(user)
            console.log('-----')
            done(null, user)
        }
    )
})

passport.use(LocalStrategy)
module.exports = passport