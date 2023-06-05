import { axiosInstance } from "../config/https"

export const logTime = async (timeLogData) => {
    const { data: { timeLog } } = await axiosInstance.post('/time-logs', timeLogData);
    return timeLog;
};

export const listTimeLogs = async ({ projectId, from, to }) => {
    const { data: { timeLogs } } = await axiosInstance.get('/time-logs', {
        params: {
            projectId,
            from,
            to
        }
    });

    return timeLogs;
};
