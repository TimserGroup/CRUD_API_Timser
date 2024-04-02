import mongoose from "mongoose";

export const connectDB = async() => {
    try {
        await mongoose.connect('mongodb+srv://timsercrm:preventixpass20@cluster0.xfum3w2.mongodb.net/');
        console.log('ok')
    } catch (error) {
        console.log(error)
        
    }
} 