import React from 'react';

const Ratings = () => {
	return (
		<div className="bg-gray-800 h-40 w-11/12 rounded-xl flex">
			<div className="w-1/4 flex flex-col justify-center p-5">
				<span className="font-bold text-7xl">4.2</span>
				<span className="font-bold">14.5K Ratings</span>
			</div>
			<div className="flex-grow flex flex-col justify-center items-center">
				<div class="flex items-center my-1 w-full">
					<span class="w-[7%] text-sm flex items-center justify-center font-medium text-blue-600 dark:text-blue-500 hover:underline">
						5 star
					</span>
					<div class="w-3/4 h-4 mx-4 bg-gray-200 rounded dark:bg-gray-700">
						<div class="h-4 bg-yellow-300 rounded w-[70%]"></div>
					</div>
					<span class="text-sm font-medium text-gray-500 dark:text-gray-400">
						70%
					</span>
				</div>
				<div class="flex items-center my-1 w-full">
					<span class="w-[7%] text-sm flex items-center justify-center font-medium text-blue-600 dark:text-blue-500 hover:underline">
						4 star
					</span>
					<div class="w-3/4 h-4 mx-4 bg-gray-200 rounded dark:bg-gray-700">
						<div class="h-4 bg-yellow-300 rounded w-[40%]"></div>
					</div>
					<span class="text-sm font-medium text-gray-500 dark:text-gray-400">
						40%
					</span>
				</div>
				<div class="flex items-center my-1 w-full">
					<span class="w-[7%] text-sm flex items-center justify-center font-medium text-blue-600 dark:text-blue-500 hover:underline">
						3 star
					</span>
					<div class="w-3/4 h-4 mx-4 bg-gray-200 rounded dark:bg-gray-700">
						<div class="h-4 bg-yellow-300 rounded w-[20%]"></div>
					</div>
					<span class="text-sm font-medium text-gray-500 dark:text-gray-400">
						20%
					</span>
				</div>
				<div class="flex items-center my-1 w-full">
					<span class="w-[7%] text-sm flex items-center justify-center font-medium text-blue-600 dark:text-blue-500 hover:underline">
						1 star
					</span>
					<div class="w-3/4 h-4 mx-4 bg-gray-200 rounded dark:bg-gray-700">
						<div class="h-4 bg-yellow-300 rounded w-[10%]"></div>
					</div>
					<span class="text-sm font-medium text-gray-500 dark:text-gray-400">
						10%
					</span>
				</div>
				<div class="flex items-center my-1 w-full">
					<span class="w-[7%] text-sm flex items-center justify-center font-medium text-blue-600 dark:text-blue-500 hover:underline">
						1 star
					</span>
					<div class="w-3/4 h-4 mx-4 bg-gray-200 rounded dark:bg-gray-700">
						<div class="h-4 bg-yellow-300 rounded w-[50%]"></div>
					</div>
					<span class="text-sm font-medium text-gray-500 dark:text-gray-400">
						50%
					</span>
				</div>
			</div>
		</div>
	);
};

export default Ratings;
