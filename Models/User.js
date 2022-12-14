const {Schema, model, Types} = require('mongoose')
//CREATE MODEL WITH CONSTRUCTOR SCHEMA
const schema = new Schema({
    email:{type:String, required:true, unique: true},
    password:{type:String, required: true},
    link:[{type: Types.ObjectId, ref:'Link'}]
})
module.exports = model('User', schema)
