import React from 'react';

const Badge = () => {
	return (
		<span className="p-[0.8px] rounded-lg bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
			<span className="border bg-gray-700 w-40 h-16 rounded-lg flex">
				<span className="flex h-full w-1/3 justify-center items-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						id="institution"
					>
						<path
							fill="#fff"
							d="M8 0 0 3v2h16V3zM0 14h16v2H0v-2zM16 7V6H0v1h1v5H0v1h16v-1h-1V7h1zM4 12H3V7h1v5zm3 0H6V7h1v5zm3 0H9V7h1v5zm3 0h-1V7h1v5z"
						></path>
					</svg>
				</span>
				<span className="flex flex-col w-2/3 h-full">
					<span className="h-1/2 flex items-center">MBBS</span>
					<span className="h-1/2 flex items-center text-sm">AIMS Delhi</span>
				</span>
			</span>
		</span>
	);
};

export default Badge;
