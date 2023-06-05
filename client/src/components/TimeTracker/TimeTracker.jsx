import { useMutation } from "react-query";
import TimePicker from '../TimePicker/TimePicker';
import './TimeTracker.css';
import { useFormik } from "formik";
import { logTime } from "../../api/timeLogApi";
import ProjectSelect from "../ProjectSelect/ProjectSelect";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';

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
                    projectId: project?.value,
                    hoursWorked: hours + parseFloat(secondsToHours)
                });

                formik.resetForm();

                toast.success('Time logged successfully');
            } catch (error) {
                console.error(error);

                if (error?.response?.data?.error?.details) {
                    error?.response?.data?.error?.details.forEach(({ message }) => toast.error(message));
                }
            }
        }
    });

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className="xl:grid xl:grid-cols-7 items-center">
                    <div className="col-span-3 border border-black xl:border-r-0 h-full">
                        <input type="text" 
                            placeholder="My awesome task"
                            className="w-full h-full px-2 py-2 xl:py-0"
                            name="taskDescription"
                            value={formik.values.taskDescription}
                            onChange={formik.handleChange} />
                    </div>

                    <ProjectSelect
                        className="xl:col-span-2"
                        value={formik.values.project} 
                        onChange={(selected) => formik.setFieldValue('project', selected)} />

                    <TimePicker className="xl:col-span-1 h-full py-2 xl:py-0"
                       valueHours={formik.values.hours}
                       valueSeconds={formik.values.seconds}
                       onHoursChange={(value) => formik.setFieldValue('hours', value)}
                       onSecondsChange={(value) => formik.setFieldValue('seconds', value)} />
                    
                    <div className="xl:col-span-1 h-full">
                        <button className="border border-black h-full w-full block py-2 xl:py-0"
                            type="submit">Submit</button>
                    </div>
                </div>
            </form>

            <ToastContainer />
        </div>
    )
};

export default TimeTracker;