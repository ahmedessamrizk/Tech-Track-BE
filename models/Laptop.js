const mongoose = require('mongoose');

const laptopSchema = new mongoose.Schema({
    brand:{
        type: String
     },
     name: {
        type: String
     },
     model_name: {
        type: String
     },
     image_src: {
        type: String
     },
     price: {
        type: Number
     },
     sale: {
        type: Number
     },
     rate: {
        type: Number
     },
     no_reviews: {
        type: Number
     },
     display_size: {
        type: String
     },
     ram: {
        type: String
     },
     HDD: {
        type: String
     },
     processor: {
        type: String
     },
     graphics_card: {
        type: String
     },
     link_href: {
        type: String
     },
     operating_system: {
        type: String
     },
     SSD: {
        type: String
     },
     rate_weight: {
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
    { collection: 'Laptops' }
);

const Laptop = mongoose.model('Laptop', laptopSchema);
module.exports = Laptop;