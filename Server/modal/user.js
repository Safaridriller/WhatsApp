import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    iss : String,
    nbf : Number,
    azp : String,
    aud : String,
    sub : {type : String,required : true},
    email : String,
    email_verified : Boolean,
    name : {type : String,required : true},
    picture : {type : String,required : true},
    given_name : String,
    family_name : String,
    iat : Number,
    exp : Number,
    jti : String,
    updatedAt : Date,
    status : String
})
const User = mongoose.model('user',userSchema);
export default User