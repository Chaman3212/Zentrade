const {model}= require('mongoose');
const {holdingSchema}= require('../schemas/holdingsSchema')

const HoldingsModel =  model("holding", holdingSchema);
module.exports= {HoldingsModel}