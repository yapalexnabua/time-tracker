import { useMutation } from "react-query";
import TimePicker from '../TimePicker/TimePicker';
import './TimeTracker.css';
import { useFormik } from "formik";
import { logTime } from "../../api/timeLogApi";
import ProjectSelect from "../ProjectSelect/ProjectSelect";

const TimeTracker = () => {
    const logTimeMutation = useMutation((timeLogData) => logTime(timeLogData));
    
    const formik = useFormik({
        initialValues: {
            taskDescription: '',
            project: null,
            hours: '00',
            seconds: '00'
        },
        onSubmit: async ({ taskDescription, project, hours, seconds }) => {
            try {
                const secondsToHours = parseFloat(seconds / 59).toFixed(2);

                await logTimeMutation.mutateAsync({
                    taskDescription,
                    projectId: project.value,
                    hoursWorked: hours + parseFloat(secondsToHours)
                });
            } catch (error) {
                console.error(error);
            }
        }
    });

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

                    <ProjectSelect
                        value={formik.values.project} 
                        onChange={(selected) => formik.setFieldValue('project', selected)} />

                    <TimePicker className="col-span-1 h-full"
                       valueHours={formik.values.hours}
                       valueSeconds={formik.values.seconds}
                       onHoursChange={(value) => formik.setFieldValue('hours', value)}
                       onSecondsChange={(value) => formik.setFieldValue('seconds', value)} />
                    
                    <button className="col-span-1 border border-black h-full w-full"
                        type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
};

export default TimeTracker;