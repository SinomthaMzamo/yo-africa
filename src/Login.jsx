import { useState } from 'react'

import LoginForm from "./LoginForm"
import RegisterForm from "./RegisterForm"
import ForgotPasswordForm from "./ForgotPasswordForm"

const Login = () => {
	const [visibleForm, setVisibleForm] = useState('login');


	// Displays "Forgot Password" form
	const handleForgotPassword = (event) => {
	event.preventDefault();
	console.log("forgot clicked... fetching...");
	setVisibleForm('forgotPassword');
	};

	// Displays the "Register" form
	const handleRegister = (event) => {
	event.preventDefault();
	console.log("register clicked... fetching...");
	setVisibleForm('register');
	};

	// Handler for the "Back to Login" link in the forgot password form
	const handleBackToLogin = (event) => {
	event.preventDefault();
	console.log("login clicked... fetching...");
	setVisibleForm('login');
	};


	return(
		<>
		{/*show the relevant form based on current usestate*/}
			{visibleForm === 'login' && (
	        <LoginForm 
	          forgottenPasswordHandler={handleForgotPassword}
	          registerNewUserHandler={handleRegister}
	        />
	      )}
	      {visibleForm === 'register' && (
	        <RegisterForm 
	          showLoginHandler={handleBackToLogin}
	        />
	      )}
	      {visibleForm === 'forgotPassword' && (
	        <ForgotPasswordForm 
	          showLoginHandler={handleBackToLogin}
	        />
	      )}
		</>

	);
};

export default Login;