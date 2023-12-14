import React from 'react';

const Appointments = () => {
	return (
		<div className="bg-gray-800 h-full w-11/12 mt-5 mb-6 rounded-xl flex flex-col">
			<h1 className="h-[10vh] px-5 flex items-center text-4xl border-b-2 border-gray-700 w-full">
				Your Appointments
			</h1>
			<div
				className="max-h-[75vh] w-full px-5 py-4 overflow-y-scroll no-scrollbar flex flex-col items-center"
				style={{ scrollbarWidth: 'none' }}
			>
				{/* patient name
					his email
					clinic's location
					timing => date, day and time */}
				<div className="bg-gray-700 w-11/12 rounded-xl flex my-4">
					<div className="h-full w-5/12 px-5 py-5 flex flex-col justify-center">
						<h1 className="text-4xl py-2 w-full text-center">Yash Sharma</h1>
						<h3 className="pl-2 text-xs text-gray-300 w-full text-center">
							yashsharma0701@outlook.com
						</h3>
					</div>
					<div className="h-full flex-grow px-5 flex flex-col justify-center">
						<h2>Lord Sinha Road</h2>
						<h2>31st December, 2023</h2>
						<h3>Thursday, 5:00 PM - 7:30 PM</h3>
					</div>
				</div>
				<div className="bg-gray-700 w-11/12 rounded-xl flex my-4">
					<div className="h-full w-5/12 px-5 py-5 flex flex-col justify-center">
						<h1 className="text-4xl py-2 w-full text-center">Yash Sharma</h1>
						<h3 className="pl-2 text-xs text-gray-300 w-full text-center">
							yashsharma0701@outlook.com
						</h3>
					</div>
					<div className="h-full flex-grow px-5 flex flex-col justify-center">
						<h2>Lord Sinha Road</h2>
						<h2>31st December, 2023</h2>
						<h3>Thursday, 5:00 PM - 7:30 PM</h3>
					</div>
				</div>
				<div className="bg-gray-700 w-11/12 rounded-xl flex my-4">
					<div className="h-full w-5/12 px-5 py-5 flex flex-col justify-center">
						<h1 className="text-4xl py-2 w-full text-center">Yash Sharma</h1>
						<h3 className="pl-2 text-xs text-gray-300 w-full text-center">
							yashsharma0701@outlook.com
						</h3>
					</div>
					<div className="h-full flex-grow px-5 flex flex-col justify-center">
						<h2>Lord Sinha Road</h2>
						<h2>31st December, 2023</h2>
						<h3>Thursday, 5:00 PM - 7:30 PM</h3>
					</div>
				</div>
				<div className="bg-gray-700 w-11/12 rounded-xl flex my-4">
					<div className="h-full w-5/12 px-5 py-5 flex flex-col justify-center">
						<h1 className="text-4xl py-2 w-full text-center">Yash Sharma</h1>
						<h3 className="pl-2 text-xs text-gray-300 w-full text-center">
							yashsharma0701@outlook.com
						</h3>
					</div>
					<div className="h-full flex-grow px-5 flex flex-col justify-center">
						<h2>Lord Sinha Road</h2>
						<h2>31st December, 2023</h2>
						<h3>Thursday, 5:00 PM - 7:30 PM</h3>
					</div>
				</div>
				<div className="bg-gray-700 w-11/12 rounded-xl flex my-4">
					<div className="h-full w-5/12 px-5 py-5 flex flex-col justify-center">
						<h1 className="text-4xl py-2 w-full text-center">Yash Sharma</h1>
						<h3 className="pl-2 text-xs text-gray-300 w-full text-center">
							yashsharma0701@outlook.com
						</h3>
					</div>
					<div className="h-full flex-grow px-5 flex flex-col justify-center">
						<h2>Lord Sinha Road</h2>
						<h2>31st December, 2023</h2>
						<h3>Thursday, 5:00 PM - 7:30 PM</h3>
					</div>
				</div>
				<div className="bg-gray-700 w-11/12 rounded-xl flex my-4">
					<div className="h-full w-5/12 px-5 py-5 flex flex-col justify-center">
						<h1 className="text-4xl py-2 w-full text-center">Yash Sharma</h1>
						<h3 className="pl-2 text-xs text-gray-300 w-full text-center">
							yashsharma0701@outlook.com
						</h3>
					</div>
					<div className="h-full flex-grow px-5 flex flex-col justify-center">
						<h2>Lord Sinha Road</h2>
						<h2>31st December, 2023</h2>
						<h3>Thursday, 5:00 PM - 7:30 PM</h3>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Appointments;
