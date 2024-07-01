import mongoose from "mongoose";
import colors from "colors";

export const connectDB = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`MONGODB CONNECTED`.italic.underline.white);
    }
    catch(error){
        console.log(`Error: ${error.message}.bold.red`);
    }
}