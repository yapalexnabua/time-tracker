import { useQuery } from "react-query";
import { listTimeLogs } from "../../api/timeLogApi";
import dayjs from 'dayjs';
import ProjectSelect from "../ProjectSelect/ProjectSelect";
import { useState, useEffect } from "react";
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import '@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css';
import 'react-calendar/dist/Calendar.css';
import './TimeLogList.css';

const TimeLogList = () => {
    const [filters, setFilters] = useState({
        from: null,
        to: null,
        project: null
    });

    const { data: timeLogList = [], isFetching, refetch } = useQuery('timeLogList', () => listTimeLogs({
        ...filters,
        projectId: filters.project?.value || null
    }), {
        retry: false,
        refetchOnWindowFocus: false
    });

    useEffect(() => {
        (async () => {
            await refetch();
        })();
    }, [filters]);

    const handleDateRangeSelect = (dateRange) => {
        setFilters((prevState) => ({
            ...prevState,
            from: dayjs(dateRange[0]).format('YYYY-MM-DD'),
            to: dayjs(dateRange[1]).format('YYYY-MM-DD'),
        }));
    }

    // bad design i know
    const getDateRangeValue = () => {
        if (filters.from && filters.to) {
            return [dayjs(filters.from), dayjs(filters.to)];
        }

        return [null, null];
    }

    return (
        <div className="time-log-list mt-4">
            <div className="xl:flex items-center mb-4">
                <span className="mr-2">Filter by:</span>

                <ProjectSelect value={filters.project}
                    onChange={(project) => setFilters((prevState) => ({
                        ...prevState,
                        project
                    }))}
                    className="xl:mr-2 project-filter mb-2 xl:mb-0" />

                <DateRangePicker 
                    className="h-full w-full xl:w-min"
                    value={getDateRangeValue()}
                    onChange={handleDateRangeSelect} />
            </div>
            {
                isFetching ? (
                    <div>Loading time logs...</div>
                ) : (
                    !timeLogList.length ? (
                        <p>No time logs</p>
                    ) : (
                        timeLogList.map((timeLog) => {
                            return (
                                <div className="xl:grid grid-cols-3 p-4 border border-black mb-4" key={timeLog._id}>
                                    <div>
                                        <p>Project: {timeLog.project.name}</p>
                                        <p className="text-sm">{timeLog.taskDescription}</p>
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
                    )
                )
            }
        </div>
    );
};

export default TimeLogList;