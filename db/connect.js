import mongoose from "mongoose"

export const connectDB = (url) => {
    mongoose.connect(url).then(() => {
        console.log("Connected to DB")
    }).catch((error) => {
        console.log(error)
    })
}