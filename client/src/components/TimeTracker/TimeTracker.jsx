import { useQuery } from "react-query";
import { getProjects } from "../../api/projectsApi";
import Select from 'react-select';
import TimePicker from '../TimePicker/TimePicker';
import './TimeTracker.css';
import { useFormik } from "formik";

const TimeTracker = () => {
    const { data: projects = [], isLoading } = useQuery('projects', getProjects, {
        retry: false,
        refetchOnWindowFocus: false
    });
    
    const formik = useFormik({
        initialValues: {
            taskDescription: '',
            project: null,
            hours: '00',
            seconds: '00'
        },
        onSubmit: (values) => {
            console.log(values);
        }
    });

    if (isLoading) {
        return <div className="h-full w-full">
            <p>Loading Time Tracker...</p>
        </div>;
    }

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className="grid grid-cols-7 items-center">
                    <div className="col-span-3 border border-black h-full">
                        <input type="text" 
                            placeholder="My awesome task"
                            className="w-full h-full px-2"
                            name="taskDescription"
                            value={formik.values.taskDescription}
                            onChange={formik.handleChange} />
                    </div>

                    <Select options={
                            projects.map(project => ({
                                value: project._id,
                                label: project.name
                            }))
                        } 
                        className="col-span-2 react-select-container"
                        placeholder="Select a project..."
                        value={formik.values.project}
                        onChange={(selected) => formik.setFieldValue('project', selected)} />

                    <TimePicker className="col-span-1 h-full"
                       valueHours={formik.values.hours}
                       valueSeconds={formik.values.seconds}
                       onHoursChange={(value) => formik.setFieldValue('hours', value)}
                       onSecondsChange={(value) => formik.setFieldValue('seconds', value)} />
                    
                    <button className="col-span-1 border border-black h-full w-full">Submit</button>
                </div>
            </form>
        </div>
    )
};

export default TimeTracker;