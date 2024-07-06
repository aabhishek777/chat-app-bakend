import mongoose from "mongoose";

export const connectToDatabase = async () => {

    const url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.srt9bqp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    
    try {
        await mongoose.connect(url,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log(`successfully connected to db named ${process.env.DB_USERNAME}`)
    } catch(error) {
        console.log(`error in connecting db : ${error}`);
    }
}