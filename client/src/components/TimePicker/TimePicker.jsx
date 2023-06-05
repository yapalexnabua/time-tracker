import { PropTypes } from 'prop-types';
import './TimePicker.css';

const TimePicker = ({ className, onHoursChange, onSecondsChange }) => {
    return (
        <div className={`grid grid-cols-5 items-center timepicker ${className}`}>
            <div className="col-span-2">
                <input type="number"
                    step="1"
                    placeholder="00"
                    className="hours-input text-center w-full"
                    onChange={onHoursChange} />
            </div>

            <span className="col-span-1 text-center">:</span>

            <div className="col-span-2">
                <input type="number"
                    step="1"
                    placeholder="00"
                    className="seconds-input text-center w-full"
                    onChange={onSecondsChange} />
            </div>
        </div>
    );
};

TimePicker.propTypes = {
    onHoursChange: PropTypes.func.isRequired,
    onSecondsChange: PropTypes.func.isRequired,
    className: PropTypes.string
};

TimePicker.defaultProps = {
    className: ''
};

export default TimePicker;