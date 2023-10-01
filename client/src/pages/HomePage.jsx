import React from 'react';
import { Link } from 'react-router-dom';
import titlePicture from '../img/titlePicture.png';

const HomePage = () => {
	return (
		<div className="flex">
			<img
				src={titlePicture}
				alt=""
				className="h-[80vh] ml-24 mt-10 rounded-lg"
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
				<ul className="hidden text-sm font-medium text-center bg-gray-900 text-gray-500 rounded-lg  sm:flex dark:divide-gray-700 dark:text-gray-400">
					<li className="w-full pr-2">
						<span
							className="inline-block w-full p-4 text-gray-100 bg-gray-900 rounded-l-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none cursor-pointer"
						>
							Doctor
						</span>
					</li>
					<li className="w-full pl-2">
						<span className="inline-block w-full p-4 bg-gray-900 rounded-r-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 cursor-pointer">
							Patient
						</span>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default HomePage;
