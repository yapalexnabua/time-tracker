import { axiosInstance } from "../config/https"

export const logTime = async (timeLogData) => {
    const { data: { timeLog } } = await axiosInstance.post('/time-logs', timeLogData);
    return timeLog;
};
