import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
        username:{
            type:String,
            unique:true,
            required:true,
            lowercase:true
        },
        email:{
            type:email,
            unique:true,
            required:true
        },
        age:{
            required:true,
            type:Numer
        }
});
export const User=mongoose.model("User",userSchema);