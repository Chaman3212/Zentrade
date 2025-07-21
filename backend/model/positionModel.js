const {model}= require('mongoose');
const { PositionSchema}= require('../schemas/positionSchema')

const PositionModel =  model("position", PositionSchema);
module.exports= {PositionModel}