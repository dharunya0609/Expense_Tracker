const mongoose=require('mongoose');
const connectDB=async()=>{
    try{
        const connection=await mongoose.connect('mongodb://127.0.0.1:27017/expense-tracker')//promise
        console.log('db is connected');
    }catch(err){
        console.log('error while connecting db')
    }
}
module.exports=connectDB;