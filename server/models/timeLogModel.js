import mongoose from 'mongoose';

const TimeLogSchema = new mongoose.Schema({
    project: {
        _id: {
            type: mongoose.Types.ObjectId,
            ref: 'Project'
        },
        name: String
    },
    hoursWorked: {
        type: Number,
        required: true
    },
    dateWorked: {
        type: Date,
        required: false,
        default: new Date()
    },
    taskDescription: {
        type: String,
        required: true
    },
    dateCreated: {
        type: Date,
        required: false,
        default: new Date()
    }
});

export const TimeLog = mongoose.model('TimeLog', TimeLogSchema);