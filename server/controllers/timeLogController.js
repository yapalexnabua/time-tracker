import { Project } from "../models/projectModel.js";
import { TimeLog } from "../models/timeLogModel.js";
import dayjs from "dayjs";

export const create = async (req, res) => {
    const { taskDescription, hoursWorked, dateWorked, projectId } = req.body;
    const project = await Project.findById(projectId);
    const timeLogData = {
        taskDescription,
        hoursWorked,
        project
    };
    if (dateWorked) {
        timeLogData['dateWorked'] = dayjs(dateWorked);
    }
    const timeLog = new TimeLog(timeLogData);

    const result = await timeLog.save();

    res.status(201).json({
        message: 'Time Log created',
        timeLog: result
    });
};

export const list = async (req, res) => {
    try {
        const { projectId, from, to } = req.query,
            conditions = {};

        if (projectId) {
            conditions['project._id'] = projectId;
        }

        if (from) {
            conditions['dateWorked'] = {
                ...conditions['dateWorked'] || {},
                $gte: dayjs(req.query.from).startOf('day')
            };
        }

        if (to) {
            conditions['dateWorked'] = {
                ...conditions['dateWorked'] || {},
                $lte: dayjs(req.query.to).endOf('day')
            };
        }

        const timeLogs = await TimeLog.find(conditions).sort({dateWorked: 'desc'});
    
        res.status(200).json({
            message: 'Some time log list',
            timeLogs
        });
    } catch (error) {
        res.status(error.status || 400).json({
            message: 'Something went wrong please try again',
            error
        });
    }
};
