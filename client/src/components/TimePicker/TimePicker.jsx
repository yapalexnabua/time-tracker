import { PropTypes } from 'prop-types';
import './TimePicker.css';

const TimePicker = ({ className, onHoursChange, onSecondsChange }) => {
    return (
        <div className={`flex items-center timepicker w-min ${className}`}>
            <input type="number"
                step="1"
                placeholder="00"
                className="hours-input w-8 text-center"
                onChange={onHoursChange} />

            <span>:</span>

            <input type="number"
                step="1"
                placeholder="00"
                className="seconds-input w-8 text-center"
                onChange={onSecondsChange} />
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