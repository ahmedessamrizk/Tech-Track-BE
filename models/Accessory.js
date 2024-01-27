const mongoose = require('mongoose');

const accessorySchema = new mongoose.Schema({
    type:{
        type: String
     },
    brand:{
        type: String
     },
     name: {
        type: String
     },
     'model-name': {
        type: String
     },
     price: {
        type: Number
     },
     sale: {
        type: Number
     },
     
     'image-src': {
        type: String
     },
     rate: {
        type: Number
     },
     'no-rates': {
        type: Number
     },
     'link-href': {
        type: String
     },
     features: {
        type: String
     },
     'rate-weight': {
        type: Number
     },
     site: {
        type: String
     }
    },
    {
      toJSON: { virtuals: true },
     toObject: { virtuals: true }
    },
    { collection: 'Accessories' }
);

const Accessory = mongoose.model('Accessory', accessorySchema);
module.exports = Accessory;