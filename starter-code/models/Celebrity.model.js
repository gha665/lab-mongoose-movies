const mongoose = require('mongoose');

const {
    Schema,
    model
} = mongoose;

const celebritySchema = new Schema({
    name: String,
    occupation: String,
    catchPhrase: String,
    // birthday: Date,
    // pictureUrl: String
});

module.exports = model('Celebrity', celebritySchema);