import React from 'react';
import { Link } from 'react-router-dom';
import titlePicture from '../img/titlePicture.png';

const HomePage = () => {
	return (
		<div className="h-screen flex">
			<img
				src={titlePicture}
				alt=""
				className="h-4/5 ml-24 mt-20 rounded-lg shadow-xl shadow-gray-600"
			/>
			<div className="docpat flex flex-col justify-center ml-12 w-1/2 items-center">
				<div className="doctor flex">
					<h1 className="p-4 font-bold">Doctor</h1>
					<Link
						to="/doctor/register"
						className="p-4 cursor-pointer text-blue-500"
					>
						Register
					</Link>
					<Link to="/doctor/login" className="p-4 cursor-pointer text-blue-500">
						Login
					</Link>
				</div>
				<div className="patient flex">
					<h1 className="p-4 font-bold">Patient</h1>
					<Link
						to="/patient/register"
						className="p-4 cursor-pointer text-blue-500"
					>
						Register
					</Link>
					<Link
						to="/patient/login"
						className="p-4 cursor-pointer text-blue-500"
					>
						Login
					</Link>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
