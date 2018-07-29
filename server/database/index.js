const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const url = 'mongodb://localhost:27017/react-login'

mongoose.connect(url).then(
    () => {
        console.log('Successfully connect to Mongo')
    },
    err => {
        console.log('Unsuccessful connect to Mongo')
        console.log(err)
    }
)

module.exports = mongoose.connection