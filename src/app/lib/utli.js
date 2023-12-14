import mongoose from "mongoose";


export const connectToDB = async () => {
    try {
        mongoose.set("strictQuery", true)
        // if (connections.isConnected) return;
        const db = await mongoose.connect(process.env.MANGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        // connections.isConnected = db.connections[0].readyState;
    } catch (error) {
        console.log(error, 'error-db');
    }
}
