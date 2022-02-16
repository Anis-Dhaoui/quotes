const mongoose = require('mongoose');

var quoteSchema = new mongoose.Schema(
    {
        title:{
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