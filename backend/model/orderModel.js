const {model}= require('mongoose');
const {orderSchema}= require('../schemas/orderSchema')

const OrdersModel = new model("order", orderSchema);
module.exports= {OrdersModel}