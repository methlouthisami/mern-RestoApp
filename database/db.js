 const mongoose = require("mongoose");

const connectDB = async()=>{
 try {
     await mongoose.connect('mongodb+srv://mernresto:mernresto123@cluster0.kz3tq.mongodb.net/ressto?retryWrites=true&w=majority',{
         useNewUrlParser: true,
         useUnifiedTopology: true 
     })
     console.log('Database connection success');
 } catch (error) {
     console.log(err)
 }
}
module.exports = connectDB;

