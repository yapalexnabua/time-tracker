import mongoose from 'mongoose';

const ProjectSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

export const Project = mongoose.model('Project', ProjectSchema);