import React from 'react';
import Profile from './Profile/Profile';
import SideProfile from './SideProfile/SideProfile';

const Content = () => {
	return (
		<div className="flex flex-grow h-full">
			<div className="w-8/12 flex flex-col items-center">
				<Profile />
			</div>
			<div className="flex-grow flex justify-center items-center px-3 py-5">
				<SideProfile />
			</div>
		</div>
	);
};

export default Content;
