import mongoose from "mongoose";

const connectDb = async()=>{
    try {
        await mongoose.connect("mongodb+srv://adinansari31:Valorant123@cluster0.9hoei.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("Database Connected");
        
      } catch (err) {
        console.error('Error connecting to MongoDB:', err);
        process.exit(1); 
      }
    };

    export default connectDb;