import mongoose from "mongoose"

const Schema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        maxLength: [128, "Title must be less than 128 characters"]
    },
    text: {
        type: String,
        required: [true, "Text is required"]
    },
    rating: {
        type: Number,
        required: [true, "Rating is required"],
        min: [1, "Rating must be between 1 and 5"],
        max: [5, "Rating must be between 1 and 5"]
    },
    btn: {
        type: String
    },
    image: {
        type: String,
        required: [true, "Image is required"]
    },
    price: {
        type: Number,
        required:[true, "Price is required"]
    },
    color: {
        type: String
    },
    shadow: {
        type:String
    }
})

export default mongoose.model("Item", Schema)