import { PropTypes } from 'prop-types';
import './TimePicker.css';

const validateInput = (object) => {
    if (object.target.value.length > object.target.maxLength) {
        object.target.value = object.target.value.slice(0, object.target.maxLength)
    }

    if (parseInt(object.target.value) > object.target.max) {
        object.target.value = object.target.max;
    }
}

const TimePicker = ({ className, onHoursChange, onSecondsChange, valueHours, valueSeconds, disabled }) => {
    return (
        <div className={`grid grid-cols-5 items-center timepicker ${className}`}>
            <div className="col-span-2">
                <input type="number"
                    step="1"
                    placeholder="00"
                    className="hours-input text-center w-full"
                    onChange={(e) => onHoursChange(e.target.value)}
                    disabled={disabled}
                    value={valueHours}
                    onFocus={(e) => e.target.select()} />
            </div>

            <span className="col-span-1 text-center">:</span>

            <div className="col-span-2">
                <input type="number"
                    step="1"
                    placeholder="00"
                    className="seconds-input text-center w-full"
                    onChange={(e) => onSecondsChange(e.target.value)}
                    disabled={disabled}
                    value={valueSeconds}
                    maxLength={2}
                    max={59}
                    onInput={validateInput}
                    onFocus={(e) => e.target.select()} />
            </div>
        </div>
    );
};

TimePicker.propTypes = {
    onHoursChange: PropTypes.func.isRequired,
    onSecondsChange: PropTypes.func.isRequired,
    className: PropTypes.string,
    valueHours: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    valueSeconds: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    disabled: PropTypes.bool
};

TimePicker.defaultProps = {
    className: '',
    disabled: false,
    valueHours: '00',
    valueSeconds: '00',
};

export default TimePicker;