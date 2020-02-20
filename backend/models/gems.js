const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gemsSchema = new Schema({
        name: String,
        color: String,
        value: String,
        piece: String
    },
    {collection: 'gems'});


module.exports = mongoose.model('Gems', gemsSchema);
