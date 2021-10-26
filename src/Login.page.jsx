import React from 'react';
import LoginLogo from './Login.logo';
import LoginForm from './Login.form';

const LoginPage = () => {
	return (
		<div className="min-h-100 pt-20 flex items-center justify-center bg-facebook 	">
			<div className="flex max-w-screen-lg justify-between">
				<LoginLogo />
				<LoginForm />
			</div>
		</div>
	);
};

export default LoginPage;
