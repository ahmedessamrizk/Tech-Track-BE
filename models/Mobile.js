const mongoose = require('mongoose');
const slugify = require('slugify');
const mobileSchema = new mongoose.Schema({
         brand:{
            type: String
         },
         name: {
            type: String
         },
         model_name: {
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
         no_rates: {
            type: Number
         },
         'screen-size': {
            type: String
         },
         ram: {
            type: String
         },
         internal_memory: {
            type: String
         },
         processor: {
            type: String
         },
         battery: {
            type: String
         },
         prim_cam: {
            type: String
         },
         second_cam: {
            type: String
         },
         SIM_count: {
            type: String
         },
         network: {
            type: String
         },
         operating_sys: {
            type: String
         },
         link: {
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
        { collection: 'Mobiles' }
 );

 mobileSchema.pre('save', function(next){//pre means this middleware fn will be performed before a certain event eli hwa el save hena
   // console.log(this); //as this is a doc middleware so this here refers to the doc being processed at this point of time
   this.slug = slugify(this.name,{lower: true} );
   next(); //to call the next middleware in the stack
});
const Mobile = mongoose.model('Mobile', mobileSchema, 'Mobiles');
module.exports = Mobile;
