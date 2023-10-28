import React from 'react';
import ReviewSection from './ReviewsSection';
import CommentSection from './CommentSection';

const Reviews = () => {
	return (
		<div className="bg-gray-800 h-full w-11/12 mt-5 mb-6 rounded-xl flex flex-col">
			<ReviewSection />
			<CommentSection />
		</div>
	);
};

export default Reviews;
