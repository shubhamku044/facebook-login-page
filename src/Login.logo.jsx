import React from 'react';

const LoginLogo = () => {
	return (
		<div className="flex flex-col justify-start	mx-12 ">
			<div className="transform -translate-x-8 translate-y-6 min-w-319 ">
				<img
					src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
					alt="Facebook Logo"
					className="h-28"
				/>
			</div>
			<h2 className="text-logo font-regular mt-4 leading-7">
				Facebook helps you connect and share with the people in your
				life.
			</h2>
		</div>
	);
};

export default LoginLogo;
