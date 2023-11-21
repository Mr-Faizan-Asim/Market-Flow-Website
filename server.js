import app from "./app.js"
import {connectDB} from "./db/connect.js"

import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3000;

const start = () => { 
    try {
        connectDB(process.env.MONGO_URI);
        app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
    } catch (error) {
        console.log(error);
    }
}

start();