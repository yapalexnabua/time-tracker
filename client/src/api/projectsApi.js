import { axiosInstance } from "../config/https";

export const getProjects = async () => {
    const { data: { projects } } = await axiosInstance.get('/projects');
    return projects;
}
