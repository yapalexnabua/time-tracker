import { useQuery } from "react-query";
import { listTimeLogs } from "../../api/timeLogApi";
import dayjs from 'dayjs';

const TimeLogList = () => {
    const { data: timeLogList = [], isFetching, refetch } = useQuery('timeLogList', listTimeLogs, {
        retry: false,
        refetchOnWindowFocus: false
    });

    if (isFetching) {
        return <p>Loading time log list...</p>
    }

    return (
        <div className="time-log-list mt-4">
            {!timeLogList.length && <p>No time logs...</p>}

            {
                timeLogList.map((timeLog) => {
                    return (
                        <div className="grid grid-cols-3 p-4 border border-black mb-4" key={timeLog._id}>
                            <div>
                                Project: {timeLog.project.name}
                            </div>
                            <div>
                                Hours Worked: {timeLog.hoursWorked}
                            </div>
                            <div>
                                Date: {dayjs(timeLog.dateWorked).format('MMM D, YYYY')}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default TimeLogList;