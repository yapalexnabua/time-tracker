import { useQuery } from "react-query";
import { getProjects } from "../../api/projectsApi";
import Select from 'react-select';
import TimePicker from '../TimePicker/TimePicker';
import './TimeTracker.css';

const TimeTracker = () => {
    const { data: projects = [], isLoading } = useQuery('projects', getProjects, {
        retry: false,
        refetchOnWindowFocus: false
    });

    if (isLoading) {
        return <div className="h-full w-full">
            <p>Loading Time Tracker...</p>
        </div>;
    }

    return (
        <div>
            <form>
                <div className="grid grid-cols-7 items-center">
                    <div className="col-span-3 border border-black h-full">
                        <input type="text" 
                            placeholder="My awesome task"
                            className="w-full h-full px-2" />
                    </div>
                    <Select options={
                        projects.map(project => ({
                            value: project._id,
                            label: project.name
                        }))
                    } 
                        className="col-span-2 react-select-container"
                        placeholder="Select a project..." />
                    <TimePicker className="col-span-1 h-full" />
                    <button className="col-span-1 border border-black h-full w-full">Submit</button>
                </div>
            </form>
        </div>
    )
};

export default TimeTracker;