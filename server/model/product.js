const mongoose =require('mongoose')
// const { default: mongoose } = require("mongoose")

const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const ProductSchema = new Schema({
//   author: ObjectId,
coverImage: { type: String },
name: { type: String, required: true, max:[60, '最大60文字までです']},
price: { type: Number },
description:  { type: String },
heding1: { type: String },
heding2: { type: String },
heding3: { type: String },
hedingtext1: { type: String },
hedingtext2: { type: String },
hedingtext3: { type: String }
})

module.exports = mongoose.model('Product', ProductSchema)
