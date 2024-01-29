const mongoose = require('mongoose');
const slugify = require('slugify');
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
     model_name: {
        type: String
     },
     price: {
        type: Number
     },
     sale: {
        type: Number
     },
     
     image_src: {
        type: String
     },
     rate: {
        type: Number
     },
     no_rates: {
        type: Number
     },
     link_href: {
        type: String
     },
     features: {
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
    { collection: 'Accessories' }
);

//const Laptop = mongoose.model('Laptop', laptopSchema);
accessorySchema.pre('save', function(next){//pre means this middleware fn will be performed before a certain event eli hwa el save hena
   // console.log(this); //as this is a doc middleware so this here refers to the doc being processed at this point of time
   this.slug = slugify(this.name,{lower: true} );
   next(); //to call the next middleware in the stack
});


const Accessory = mongoose.model('Accessory', accessorySchema, 'Accessories');
module.exports = Accessory;
 
