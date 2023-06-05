import { useQuery } from "react-query";
import { getProjects } from "../../api/projectsApi";
import Select from 'react-select';

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
                <input type="text" placeholder="My awesome task" />
                <Select options={
                    projects.map(project => ({
                        value: project._id,
                        label: project.name
                    }))
                } />
            </form>
        </div>
    )
};

export default TimeTracker;