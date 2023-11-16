import mongoose from "mongoose";

const { Schema } = mongoose

const chatSchema = new Schema({
    name: { type: String, required: true },
    message: { type: String, required: true }
}, {
    timestamps: true
})

const modelName = mongoose.models.Chat || mongoose.model('Chat', chatSchema)

export default modelName