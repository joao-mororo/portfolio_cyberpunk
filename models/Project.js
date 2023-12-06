import mongoose from "mongoose";

const { Schema } = mongoose

const projectSchema = new Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    repo: { type: String, required: true },
    site: { type: String }
}, {
    timestamps: true
})

const modelName = mongoose.models.Project || mongoose.model('Project', projectSchema)

export default modelName