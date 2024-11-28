import PropTypes from 'prop-types';
import "../styles/component-styles/UserTextBox.css";

// 
const UserTextBox = ({ label="Input", type = "text" }) => {
	return (
		<div className="outer-box">
			<div className="field-label">{label}</div>
			<div className="input-wrapper">
				<div className='input-field-bg'></div>
				<input
					className="input-box"
					type={type}
					placeholder={`Enter your ${label.toLowerCase()} here`}
				/>
			</div>
		</div>
	);
};

UserTextBox.propTypes = {
	label: PropTypes.string.isRequired,
	type: PropTypes.string
};

export default UserTextBox;