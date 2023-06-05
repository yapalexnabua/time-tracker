import Select from 'react-select';
import PropTypes from 'prop-types';
import { useQuery } from "react-query";
import { getProjects } from "../../api/projectsApi";

const ProjectSelect = ({ onChange, value }) => {
    const { data: projects = [] } = useQuery('projects', getProjects, {
        retry: false,
        refetchOnWindowFocus: false
    });

    return (
        <Select options={
            projects.map(project => ({
                value: project._id,
                label: project.name
            }))
        } 
        className="col-span-2 react-select-container"
        placeholder="Select a project..."
        value={value}
        onChange={onChange} />
    )
};

ProjectSelect.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: Project.shape({
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired
    })
};

export default ProjectSelect;