import { useQuery } from "react-query";
import { getProjects } from "../../api/projectsApi";
import Select from 'react-select';
import TimePicker from '../TimePicker/TimePicker';

const TimeTracker = () => {
    const { data: projects = [], isLoading } = useQuery('projects', getProjects, {
        retry: false,
        refetchOnWindowFocus: false
    });

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <form>
                <div className="grid grid-cols-4">
                    <input type="text" placeholder="My awesome task" />
                    <Select options={
                        projects.map(project => ({
                            value: project._id,
                            label: project.name
                        }))
                    } />
                    <TimePicker />
                </div>
            </form>
        </div>
    )
};

export default TimeTracker;