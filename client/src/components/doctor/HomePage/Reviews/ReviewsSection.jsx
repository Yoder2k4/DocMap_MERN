import React from 'react';

const ReviewSection = () => {
	return (
		<div
			className="h-[45vh] px-3 pt-2 w-full overflow-y-scroll no-scrollbar divide-y-2 divide-solid divide-gray-900"
			style={{ scrollbarWidth: 'none' }}
		>
			<article className="py-2">
				<div className="flex items-center mb-4 space-x-4">
					<img
						className="w-10 h-10 rounded-full object-cover"
						src="https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg"
						alt=""
					/>
					<div className="space-y-1 font-medium text-white">
						<p>
							Jese Leos
							<span className="block text-sm text-gray-400">
								yasharma0701@gmail.com
							</span>
						</p>
					</div>
				</div>
				<div className="flex items-center mb-1">
					<svg
						className="w-4 h-4 text-yellow-300 mr-1"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 22 20"
					>
						<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
					</svg>
					<svg
						className="w-4 h-4 text-yellow-300 mr-1"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 22 20"
					>
						<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
					</svg>
					<svg
						className="w-4 h-4 text-yellow-300 mr-1"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 22 20"
					>
						<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
					</svg>
					<svg
						className="w-4 h-4 text-yellow-300 mr-1"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 22 20"
					>
						<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
					</svg>
					<svg
						className="w-4 h-4 text-gray-300 dark:text-gray-500 mr-1"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 22 20"
					>
						<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
					</svg>
					<h3 className="ml-2 text-sm font-semibold text-white">
						Thinking to buy another one!
					</h3>
				</div>
				<footer className="mb-5 text-sm text-gray-400">
					<p>
						Reviewed on <time dateTime="2017-03-03 19:00">March 3, 2017</time>
					</p>
				</footer>
				<p className="mb-2 text-gray-400">
					This is my third Invicta Pro Diver. They are just fantastic value htmlFor
					money. This one arrived yesterday and the first thing I did was set
					the time, popped on an identical strap from another Invicta and went
					in the shower with it to test the waterproofing.... No problems.
				</p>
				<p className="mb-3 text-gray-400">
					It is obviously not the same build quality as those very expensive
					watches. But that is like comparing a Citroën to a Ferrari. This watch
					was well under £100! An absolute bargain.
				</p>
				<aside>
					<p className="mt-1 text-xs text-gray-400">
						19 people found this helpful
					</p>
					<div className="flex items-center mt-3 space-x-3">
						<a
							href="/"
							className="border focus:outline-none focus:ring-4 font-medium rounded-lg text-xs px-2 py-1.5 bg-gray-800 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700"
						>
							Helpful
						</a>
					</div>
				</aside>
			</article>
		</div>
	);
};

export default ReviewSection;
