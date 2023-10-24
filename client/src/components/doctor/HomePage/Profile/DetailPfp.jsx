import React from 'react';
import Badge from './Badge';

const DetailPfp = () => {
	return (
		<div className="bg-gray-800 h-[26rem] w-11/12 mt-5 mb-6 rounded-xl flex flex-col">
			<div className="h-2/5 bg-green-400 rounded-t-xl overflow-hidden"></div>
			<div className="flex flex-grow rounded-b-xl">
				<span className="w-4/5 flex flex-col">
					<div className="flex w-full h-1/2">
						<span className="rounded-full w-40 h-40 bg-red-400 flex justify-center items-center overflow-hidden -translate-y-1/2 mx-5">
							Image
						</span>
						<span className="flex-grow flex flex-col">
							<span className="text-3xl py-1">Goutam Roy Choudhury</span>
							<span className="py-[2px] flex items-center">
								<svg
									className="flex-shrink-0 w-5 h-5 transition duration-75 text-gray-400 group-hover:text-gray-300 mr-2"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										id="Layer_1"
										data-name="Layer 1"
										viewBox="0 0 24 24"
										width="20"
										height="20"
									>
										<path d="m22,23c0,.553-.447,1-1,1H3c-.553,0-1-.447-1-1,0-3.525,2.042-6.574,5-8.05v3.328c-.595.346-1,.984-1,1.723,0,1.105.895,2,2,2s2-.895,2-2c0-.738-.405-1.376-1-1.723v-4.046c.644-.147,1.312-.232,2-.232h2c.338,0,.671.022,1,.059v4.125c-1.161.414-2,1.514-2,2.816v1c0,.553.447,1,1,1s1-.447,1-1v-1c0-.552.448-1,1-1s1,.448,1,1v1c0,.553.447,1,1,1s1-.447,1-1v-1c0-1.302-.839-2.402-2-2.816v-3.659c3.49,1.239,6,4.565,6,8.475Zm-4-17c0-3.309-2.691-6-6-6s-6,2.691-6,6,2.691,6,6,6,6-2.691,6-6Z" />
									</svg>
								</svg>
								Dermatologist
							</span>
							<span className="py-[2px] flex items-center">
								<svg
									className="flex-shrink-0 w-5 h-5 transition duration-75 text-gray-400 group-hover:text-gray-300 mr-2"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<svg
										id="Layer_1"
										height="20"
										viewBox="0 0 24 24"
										width="20"
										xmlns="http://www.w3.org/2000/svg"
										data-name="Layer 1"
									>
										<path d="m24 8.48v11.52a1 1 0 0 1 -2 0v-8.248l-7.4 3.536a5 5 0 0 1 -2.577.694 5.272 5.272 0 0 1 -2.7-.739l-7.38-3.513a3.691 3.691 0 0 1 -.084-6.455c.027-.016.056-.031.084-.045l7.457-3.558a5.226 5.226 0 0 1 5.282.045l7.375 3.513a3.767 3.767 0 0 1 1.943 3.25zm-11.978 9.5a7.26 7.26 0 0 1 -3.645-.972l-4.377-2.089v2.7a5.007 5.007 0 0 0 3.519 4.778 15.557 15.557 0 0 0 4.481.603 15.557 15.557 0 0 0 4.481-.607 5.007 5.007 0 0 0 3.519-4.778v-2.691l-4.459 2.13a6.983 6.983 0 0 1 -3.519.928z" />
									</svg>
								</svg>
								1992
							</span>
							<span className="py-[2px] flex items-center">
								<svg
									className="flex-shrink-0 w-5 h-5 transition duration-75 text-gray-400 group-hover:text-gray-300 mr-2"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										data-name="Layer 1"
										viewBox="0 0 24 24"
										id="rupee"
										height='22'
										width='22'
									>
										<path d="M18 7h-2.21a5.49 5.49 0 0 0-1-2H18a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2h3.5a3.5 3.5 0 0 1 3.15 2H7a1 1 0 0 0 0 2h7a3.5 3.5 0 0 1-3.45 3H7a.7.7 0 0 0-.14 0 .65.65 0 0 0-.2 0 .69.69 0 0 0-.19.1l-.12.07a.75.75 0 0 0-.14.17 1.1 1.1 0 0 0-.09.14.61.61 0 0 0 0 .18A.65.65 0 0 0 6 13a.7.7 0 0 0 0 .14.65.65 0 0 0 0 .2.69.69 0 0 0 .1.19s0 .08.07.12l6 7a1 1 0 0 0 1.52-1.3L9.18 14h1.32A5.5 5.5 0 0 0 16 9h2a1 1 0 0 0 0-2Z"></path>
									</svg>
								</svg>
								500
							</span>
						</span>
					</div>
					<div className="flex-grow h-full flex items-center justify-evenly">
						<Badge />
						<Badge />
						<Badge />
					</div>
				</span>
				<span className="flex-grow flex flex-col">
					<span className="h-1/2 flex justify-center items-center">
						<button className="flex items-center text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-2.5 py-2.5 text-center">
							<svg
								className="w-7 h-7  text-white"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 100 100"
									id="schedule"
								>
									<path d="M21 14h-4v-3c0-1.1.9-2 2-2s2 .9 2 2v3zm10-3c0-1.1-.9-2-2-2s-2 .9-2 2v3h4v-3zm10 0c0-1.1-.9-2-2-2s-2 .9-2 2v3h4v-3zm10 0c0-1.1-.9-2-2-2s-2 .9-2 2v3h4v-3zm10 0c0-1.1-.9-2-2-2s-2 .9-2 2v3h4v-3zm10 0c0-1.1-.9-2-2-2s-2 .9-2 2v3h4v-3zm6 9c0-1.1-.9-2-2-2h-4v3c0 1.1-.9 2-2 2s-2-.9-2-2v-3h-6v3c0 1.1-.9 2-2 2s-2-.9-2-2v-3h-6v3c0 1.1-.9 2-2 2s-2-.9-2-2v-3h-6v3c0 1.1-.9 2-2 2s-2-.9-2-2v-3h-6v3c0 1.1-.9 2-2 2s-2-.9-2-2v-3h-6v3c0 1.1-.9 2-2 2s-2-.9-2-2v-3h-4c-1.1 0-2 .9-2 2v9h66v-9zM57 77c0 .68.04 1.34.12 2H13c-1.1 0-2-.9-2-2V33h66v26.12c-.66-.08-1.32-.12-2-.12-9.92 0-18 8.08-18 18zm0-26c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V41c0-1.1-.9-2-2-2H59c-1.1 0-2 .9-2 2v10zM31 61c0-1.1-.9-2-2-2H19c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V61zm0-20c0-1.1-.9-2-2-2H19c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V41zm20 20c0-1.1-.9-2-2-2H39c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V61zm0-20c0-1.1-.9-2-2-2H39c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V41zM21 69h6v-6h-6v6zm20 0h6v-6h-6v6zM21 49h6v-6h-6v6zm20 0h6v-6h-6v6zm26-6h-6v6h6v-6zm22 34c0 7.72-6.28 14-14 14s-14-6.28-14-14 6.28-14 14-14 14 6.28 14 14zm-6 0c0-1.1-.9-2-2-2h-4v-4c0-1.1-.9-2-2-2s-2 .9-2 2v6c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2z"></path>
								</svg>
							</svg>
						</button>
					</span>
				</span>
			</div>
		</div>
	);
};

export default DetailPfp;