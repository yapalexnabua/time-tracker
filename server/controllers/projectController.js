import { Project } from "../models/projectModel.js";

export const list = async (req, res) => {
    const projects = await Project.find();
    res.status(200).json({
        projects
    });
};