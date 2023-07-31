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
        model: {
            type: String,
        },
        handle: {
            type: String,
        },
        management:{
            available:{ type: Boolean },
            visible:{ type: Boolean },
        }
    }],
    fonction: { type: String }
    
}, { timestamps: true })

var Items = mongoose.model('Item', itemsSchema);

module.exports = Items