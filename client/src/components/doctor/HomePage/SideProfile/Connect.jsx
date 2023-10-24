import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faSquareXTwitter } from '@fortawesome/free-brands-svg-icons/faSquareXTwitter';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from 'flowbite-react';

const Connect = () => {
	return (
		<div className="bg-gray-800 w-full h-1/4 mb-10 rounded-xl">
			<div className="w-full h-1/2 text-3xl flex items-center justify-center">
				Connect
			</div>
			<div className="w-full h-[70px] flex items-center justify-evenly">
				<Tooltip content={'+91 98318 42474'} animation="duration-300">
					<button
						onClick={() => {
							navigator.clipboard.writeText('+91 98318 42474');
						}}
					>
						<FontAwesomeIcon icon={faPhone} />
					</button>
				</Tooltip>
				<Tooltip
					content={'yashsharma0701@outlook.com'}
					animation="duration-300"
				>
					<button
						onClick={() => {
							navigator.clipboard.writeText('yashsharma0701@outlook.com');
						}}
					>
						<FontAwesomeIcon icon={faEnvelope} size="xl" />
					</button>
				</Tooltip>

				<Tooltip content={'Facebook'} animation="duration-300">
					<button>
						<FontAwesomeIcon icon={faFacebook} size="xl" />
					</button>
				</Tooltip>
				<Tooltip content={'LinkedIn'} animation="duration-300">
					<button>
						<FontAwesomeIcon icon={faLinkedin} size="xl" />
					</button>
				</Tooltip>
				<Tooltip content={'Twitter'} animation="duration-300">
					<button>
						<FontAwesomeIcon icon={faSquareXTwitter} size="xl" />
					</button>
				</Tooltip>
			</div>
		</div>
	);
};

export default Connect;
