import PropTypes from 'prop-types';

const feedbackOptions = ({ options, onLeaveFeedback }) => {
    return options.map(button => {
        return (
            <button
                key={button}
                type="button"
                name={button}
                onClick={onLeaveFeedback}>
                {button}
            </button>
        );
    });
}

feedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
}

export default feedbackOptions;