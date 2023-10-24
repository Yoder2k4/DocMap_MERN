import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Locations = () => {
	return (
		<div
			className="bg-gray-800 w-full h-[58vh] mt-10 p-4 rounded-xl flex flex-col overflow-y-scroll no-scrollbar"
			style={{ scrollbarWidth: 'none' }}
		>
			<div className="w-full flex items-center py-2">
				<span className="w-1/4 items-center">
					<FontAwesomeIcon
						icon="fa-solid fa-location-crosshairs"
						size="3x"
						className="hover:text-orange-500 cursor-pointer"
					/>
				</span>
				<span className="w-3/4 h-full flex flex-col">
					<div className="text-xl pb-2">Place Name</div>
					<div className="flex items-center py-1">
						<span className="w-1/3 text-xs h-full flex items-center">
							S<span className="text-yellow-300">M</span>TWTFS
						</span>
						<span className="w-2/3 text-sm h-full flex flex-col">
							<div>5:30 PM - 12:00 PM</div>
							<div>5:30 PM - 12:00 PM</div>
							<div>5:30 PM - 12:00 PM</div>
						</span>
					</div>
					<div className="flex items-center py-1">
						<span className="w-1/3 text-xs h-full flex items-center">
							S<span className="text-yellow-300">M</span>TWTFS
						</span>
						<span className="w-2/3 text-sm h-full flex flex-col">
							<div>5:30 PM - 12:00 PM</div>
							<div>5:30 PM - 12:00 PM</div>
						</span>
					</div>
				</span>
			</div>
            <hr className="h-px border-1"></hr>
			<div className="w-full flex items-center py-2">
				<span className="w-1/4 items-center">
					<FontAwesomeIcon
						icon="fa-solid fa-location-crosshairs"
						size="3x"
						className="hover:text-orange-500 cursor-pointer"
					/>
				</span>
				<span className="w-3/4 h-full flex flex-col">
					<div className="text-xl pb-2">Place Name</div>
					<div className="flex items-center py-1">
						<span className="w-1/3 text-xs h-full flex items-center">
							S<span className="text-yellow-300">M</span>TWTFS
						</span>
						<span className="w-2/3 text-sm h-full flex flex-col">
							<div>5:30 PM - 12:00 PM</div>
							<div>5:30 PM - 12:00 PM</div>
							<div>5:30 PM - 12:00 PM</div>
						</span>
					</div>
					<div className="flex items-center py-1">
						<span className="w-1/3 text-xs h-full flex items-center">
							S<span className="text-yellow-300">M</span>TWTFS
						</span>
						<span className="w-2/3 text-sm h-full flex flex-col">
							<div>5:30 PM - 12:00 PM</div>
							<div>5:30 PM - 12:00 PM</div>
						</span>
					</div>
				</span>
			</div>
            <hr className="h-px border-1"></hr>
			<div className="w-full flex items-center py-2">
				<span className="w-1/4 items-center">
					<FontAwesomeIcon
						icon="fa-solid fa-location-crosshairs"
						size="3x"
						className="hover:text-orange-500 cursor-pointer"
					/>
				</span>
				<span className="w-3/4 h-full flex flex-col">
					<div className="text-xl pb-2">Place Name</div>
					<div className="flex items-center py-1">
						<span className="w-1/3 text-xs h-full flex items-center">
							S<span className="text-yellow-300">M</span>TWTFS
						</span>
						<span className="w-2/3 text-sm h-full flex flex-col">
							<div>5:30 PM - 12:00 PM</div>
						</span>
					</div>
				</span>
			</div>
		</div>
	);
};

export default Locations;
