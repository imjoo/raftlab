const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Tag = new Schema({
   
    user1: {
        type: String
    },
    user2: {
        type: String
    },
    tagType : {
        type : String
    }
    
});

module.exports = mongoose.model('Tag', Tag);