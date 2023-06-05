import { useQuery } from "react-query";
import { listTimeLogs } from "../../api/timeLogApi";
import dayjs from 'dayjs';
import ProjectSelect from "../ProjectSelect/ProjectSelect";
import { useState, useEffect } from "react";

const TimeLogList = () => {
    const [filters, setFilters] = useState({
        from: null,
        to: null,
        project: {}
    });

    const { data: timeLogList = [], isFetching, refetch } = useQuery('timeLogList', () => listTimeLogs({
        ...filters,
        projectId: filters.project.value || null
    }), {
        retry: false,
        refetchOnWindowFocus: false
    });

    useEffect(() => {
        (async () => {
            await refetch();
        })();
    }, [filters]);

    if (isFetching) {
        return <p className="py-4">Loading time log list...</p>
    }

    return (
        <div className="time-log-list mt-4">
            <ProjectSelect value={filters.project}
                onChange={(project) => setFilters((prevState) => ({
                    ...prevState,
                    project
                }))} />

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