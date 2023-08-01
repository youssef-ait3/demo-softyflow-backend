const express = require("express")
const mongoose = require("mongoose")
const Items = require("../models/item")
const router = express.Router();
const ejs = require('ejs')
const path = require('path')


// const filePath1 = '/home/achsofty/Documents/demo-softyflow-backend/views/index.ejs'
// const filePath = '/home/achsofty/Documents/demo-softyflow-backend/views/index.ejs'
const filePath = '/home/achsofty/Documents/demo-softyflow-backend/views/index.ejs'
// const filePath = path.join(__dirname, 'index.ejs');

const getItems = async (req, res) => {
    try {
        const items = await Items.find();

        res.status(200).json(items);

    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}


const getHtml = async (req, res) => {
    try {
        // const items = await Items.find();
        const items = await Items.findOne().sort({ createdAt: -1 })
        console.log(JSON.stringify(items))
        ejs.renderFile(filePath, {
            title: "ejs",
            items:items
          }, (err, html) => {
            if (err) {
                console.error('Error rendering HTML file:', err);
                res.status(500).send('Internal Server Error');
            } else {
                res.send(html);
            }
          });
           
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}
const createItems = async (req, res) => {
    console.log('req.body',req.body)
    // const items = req.body
    // console.log('items',items)
    const newItems = new Items({items : req.body.item, fonction: req.body.fonction})
    
    try {
        await newItems.save()
        res.status(201).json(newItems);
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}

module.exports = {
    getItems,
    getHtml,
    createItems
}