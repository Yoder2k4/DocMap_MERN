import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import gif from '../img/doctorpatientgif.gif';
import logo from '../img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HomePage = () => {
	const [selected, setSelected] = useState(0);

	const patDocClickHandler = (patOrDoc) => {
		setSelected(patOrDoc);
	};

	const selectedStyle =
		'inline-block w-full py-5 px-8 text-gray-100 bg-gray-950 focus:ring-4 focus:ring-blue-300 active focus:outline-none';
	const notSelectedStyle =
		'inline-block w-full py-5 px-8 bg-gray-800 hover:text-gray-200 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 cursor-pointer';

	const gifStyles =
		selected === 0
			? 'transition-all translate-x-72 -translate-y-20 transform scale-[2]'
			: 'transition-all -translate-x-48 translate-y-20 transform scale-[1.6]';

	return (
		<div className="flex h-full justify-around items-center">
			<div className="flex flex-col w-1/2 h-full justify-center pl-4">
				<h1 className="flex items-center">
					<img src={logo} alt="" className="w-20" />
					<span className="text-5xl font-semibold">DocMap</span>
				</h1>
				<h2 className="text-6xl break-words py-8">
					Your Health, Your Way: Where Care Meets Convenience!
				</h2>
				<div className="flex justify-evenly">
					<button
						type="button"
						class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-8 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
					>
						Get Started
					</button>
					<span className="self-end text-lg w-1/2">
						redefining how you connect with doctors and manage your health
					</span>
				</div>
			</div>
			<div className="docpat flex flex-col justify-center items-center">
				<div className="overflow-hidden rounded-lg">
					<img
						src={gif}
						alt=""
						className={
							`mt-10 h-[70vh] w-auto` + gifStyles + ` duration-1000 ease-in-out`
						}
					/>
				</div>
				<span
					className={`absolute ${
						selected === 1 ? 'hidden' : ''
					}`}
				>
					<span
						className="bg-blue-500 rounded-full py-5 px-3 absolute flex left-64 bottom-20 cursor-pointer hover:bg-gray-800 transition-all ease-in duration-75"
						onClick={() => patDocClickHandler(1)}
					>
						<FontAwesomeIcon icon="fa-solid fa-stethoscope" />
						<FontAwesomeIcon className="ml-1" icon="fa-solid fa-arrow-right" />
					</span>
					<Link to="/patient/login" className="absolute top-40 -left-10">
						<button class="inline-flex items-center justify-center overflow-hidden font-medium text-gray-900 from-cyan-500 group-hover:to-blue-500 focus:ring-4 focus:outline-none focus:ring-cyan-800">
							<span class="relative px-7 py-2.5 transition-all ease-in duration-75 bg-blue-500 rounded-xl hover:bg-gray-800 text-white text-lg">
								Login
							</span>
						</button>
					</Link>
				</span>
				<span
					className={`absolute ${
						selected === 0 ? 'hidden' : ''
					}`}
				>
					<span
						className="bg-blue-500 rounded-full py-5 px-3 absolute flex right-64 top-0 cursor-pointer hover:bg-gray-800 transition-all ease-in duration-75"
						onClick={() => patDocClickHandler(0)}
					>
						<FontAwesomeIcon className="mr-1" icon="fa-solid fa-arrow-left" />
						<FontAwesomeIcon icon="fa-solid fa-user" />
					</span>
					<Link to="/doctor/login" className="absolute top-40 -left-10">
						<button class="inline-flex items-center justify-center overflow-hidden font-medium text-gray-900 from-cyan-500 group-hover:to-blue-500 focus:ring-4 focus:outline-none focus:ring-cyan-800">
							<span class="relative px-7 py-2.5 transition-all ease-in duration-75 bg-blue-500 rounded-xl hover:bg-gray-800 text-white text-lg">
								Login
							</span>
						</button>
					</Link>
				</span>

				{/* <Link to="/doctor/login" className="">
					Login
				</Link> */}
				{/* <ul className="hidden text-sm font-medium text-center bg-gray-950 text-gray-500 rounded-lg  sm:flex dark:divide-gray-700 dark:text-gray-400">
					<li className="w-full">
						<span
							className={
								selected === 0
									? `${selectedStyle} + rounded-l-lg`
									: `${notSelectedStyle} + rounded-l-lg`
							}
							onClick={() => patDocClickHandler(0)}
						>
							Patient
						</span>
					</li>
					<li className="w-full">
						<span
							className={
								selected === 1
									? `${selectedStyle} + rounded-r-lg`
									: `${notSelectedStyle} + rounded-r-lg`
							}
							onClick={() => patDocClickHandler(1)}
						>
							Doctor
						</span>
					</li>
				</ul> */}
			</div>
		</div>
	);
};

export default HomePage;
