import ellipse6 from "../assets/ellipse-2.png";
import "../styles/LoginPage.css"
import { Image } from "@chakra-ui/react";
import UserTextBox from "../components/UserTextBox";

const LoginPage = () => {
	return (
		<div className="login-page">
			<Image className="ellipse" src={ellipse6} alt="Yesalwa Planet" />
			<div className="login-form">
				<h2 className="login-header">LOGIN</h2>
				<UserTextBox label="Email" className="email-text-box" />
				<UserTextBox label="Password" type="password" className="password-text-box" />
			</div>
		</div>
	)
}
export default LoginPage;