import { axiosInstance } from "../config/https";

export const getProjects = () => {
    const { data: { projects } } = axiosInstance.get('/projects');
    return projects;
}
