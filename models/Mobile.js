const mongoose = require('mongoose');

const mobileSchema = new mongoose.Schema({
         brand:{
            type: String
         },
         name: {
            type: String
         },
         'model-name': {
            type: String
         },
         img: {
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
         'no-rates': {
            type: Number
         },
         'screen-size': {
            type: String
         },
         ram: {
            type: String
         },
         'internal-memory': {
            type: String
         },
         processor: {
            type: String
         },
         battery: {
            type: String
         },
         'prim-cam': {
            type: String
         },
         'second-cam': {
            type: String
         },
         'SIM-count': {
            type: String
         },
         network: {
            type: String
         },
         'operating-sys': {
            type: String
         },
         link: {
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
        { collection: 'Mobiles' }
 );


const Mobile = mongoose.model('Mobile', mobileSchema);
module.exports = Mobile;