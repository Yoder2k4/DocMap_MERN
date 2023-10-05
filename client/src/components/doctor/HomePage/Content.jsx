import React from 'react';
import DetailPfp from './Profile/Content/DetailPfp';
import Ratings from './Profile/Content/Ratings';

const Content = () => {
	return (
		<div className="flex flex-grow h-full">
			<div id="main" className="w-8/12 flex flex-col items-center">
				<DetailPfp />
				<Ratings />
			</div>
			<div id="routes" className="flex-grow bg-gray-600"></div>
		</div>
	);
};

export default Content;
