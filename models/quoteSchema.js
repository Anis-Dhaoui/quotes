const mongoose = require('mongoose');

var quoteSchema = new mongoose.Schema(
    {
        author:{
            type:String,
            required:true
        },
        quote:{
            type:String,
            required:true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Quote', quoteSchema);