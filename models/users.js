const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    Name:{
        type:String,
        required:true
        
    },
    Email:{
        type:String,
        unique:true,
        required:true
    },
    Password:{
        type:String,
        required:true
    }
},
{
    timestamps:true
})
module.exports=mongoose.model('Users',userSchema);