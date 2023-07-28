const mongoose = require("mongoose")

const itemsSchema = new mongoose.Schema({
    items: [{
        id: {
            type: Number,
            required: true,
            unique: true
        },
        idGlobal:{
            type: Number,
            required: true,
        },
        typee: {
            type: String,
            required: true
        },
        name: {
            type: String,
        },
        management:{
            available:{ type: Boolean },
            visible:{ type: Boolean },
        }
    }]
    
}, { timestamps: true })

var Items = mongoose.model('Item', itemsSchema);

module.exports = Items