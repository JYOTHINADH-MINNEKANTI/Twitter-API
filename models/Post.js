const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description : {
        type: String,
        length: 1000,
        required: true
    },
    date:{
        type: Date,
        default : Date.now
    }
});

module.exports = mongoose.model('Posts', PostSchema);