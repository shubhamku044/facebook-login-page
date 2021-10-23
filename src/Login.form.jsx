import React from 'react';

const LoginForm = () => {
	return (
		<div>
			<div className="flex flex-col items-center">
				<div className="bg-white p-5 mx-12 rounded-lg filter drop-shadow-lg w-96">
					<form action="#" className="flex flex-col items-center">
						<div className="w-full mb-4">
							<input
								type="text"
								name="email"
								id="#"
								placeholder="Email address or phone number"
								autocomplete="off"
								className="py-4 px-3.5 w-full border rounded-md shadow-inner"
							/>
						</div>
						<div className="w-full">
							<input
								type="password"
								name="pass"
								id="#"
								placeholder="Password"
								className="py-4 px-3.5 w-full border rounded-md text-lg shadow-inner"
							/>
						</div>
						<div>
							<button>Log In</button>
						</div>
						<div>
							<a href="#">Forgotten password?</a>
						</div>
						<div className="w-full border m-4"></div>
						<div>
							<a href="#">Create New Account</a>
						</div>
					</form>
				</div>
				<div>create page</div>
			</div>
		</div>
		//
	);
};

export default LoginForm;
