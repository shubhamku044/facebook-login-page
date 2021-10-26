import React from 'react';

const LoginForm = () => {
	return (
		<div>
			<div className="flex flex-col items-center">
				<div className="bg-white p-5 mx-12 rounded-lg filter drop-shadow-lg w-96">
					<form action="#" className="flex flex-col items-center">
						<div className="w-full mb-4 ">
							<input
								type="text"
								name="email"
								id="#"
								placeholder="Email address or phone number"
								autoComplete="off"
								className="py-4 px-3.5 w-full border rounded-md shadow-inner focus:outline-blue"
							/>
						</div>
						<div className="w-full">
							<input
								type="password"
								name="pass"
								id="#"
								placeholder="Password"
								className="py-4 px-3.5 w-full border rounded-md text-lg shadow-inner focus:outline-blue"
							/>
						</div>
						<div className="mt-4 w-full">
							<button className="h-12 w-80 bg-facebookBlue w-full font-bold text-white rounded-md hover:bg-facebookBlueHover">
								<span className="text-btn tracking-wider text-white">
									Log In
								</span>
							</button>
						</div>
						<div className="pt-4 pb-5">
							<a
								href="#"
								className="text-facebookBlue text-tiny border-white border-b hover:border-blue-400"
							>
								Forgotten password?
							</a>
						</div>
						<div className="w-full border"></div>
						<div className="pt-6 pb-1 w-full flex justify-center">
							<button className="h-12 w-56 bg-facebookGreen font-bold text-white rounded-md hover:bg-facebookGreenHover">
								<span className="text-tiny tracking-wider text-white">
									Create New Account
								</span>
							</button>
						</div>
					</form>
				</div>
				<div className="mt-7">
					<div>
						<a href="#" className="font-semibold">
							Create a Page
						</a>{' '}
						for a celebrity, brand or business.
					</div>
				</div>
			</div>
		</div>
		//
	);
};

export default LoginForm;
