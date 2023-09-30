import { Fragment, useContext } from 'react';
import {
	Link,
	Outlet,
	useLocation,
	useNavigate,
	useParams,
} from 'react-router-dom';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../../img/logo.png';
import AuthContext from '../../utils/auth-context';

const navigation = [
	{ name: 'Authenticate', href: '/', current: true },
	{ name: 'About', href: '/', current: false },
	{ name: 'Contact', href: '/', current: false },
	{ name: 'Feedback', href: '/', current: false },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function Navbar(props) {
	const navigate = useNavigate();
	const ctx = useContext(AuthContext);
	const { userID } = useParams();
	const routeLocation = useLocation();

	let styleClass;
	if (userID && routeLocation.pathname === `/patient/${userID}`) {
		styleClass =
			'fixed top-0 w-full z-10 bg-black bg-opacity-5 backdrop-filter backdrop-blur-sm';
	} else {
		styleClass = 'bg-gray-800 fixed top-0 left-0 right-0';
	}

	const logoutBtnhandler = () => {
		props.onLogout();
		navigate(`/`);
	};

	const LoginConfigure = ({ isLogin }) => {
		if (isLogin !== '') {
			return (
				<Menu as="div" className="relative ml-3">
					<div>
						<Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
							<span className="absolute -inset-1.5" />
							<span className="sr-only">Open user menu</span>
							<img
								className="h-8 w-8 rounded-full"
								src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
								alt=""
							/>
						</Menu.Button>
					</div>
					<Transition
						as={Fragment}
						enter="transition ease-out duration-100"
						enterFrom="transform opacity-0 scale-95"
						enterTo="transform opacity-100 scale-100"
						leave="transition ease-in duration-75"
						leaveFrom="transform opacity-100 scale-100"
						leaveTo="transform opacity-0 scale-95"
					>
						<Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
							<Menu.Item>
								{({ active }) => (
									<a
										href="/"
										className={classNames(
											active ? 'bg-gray-100' : '',
											'block px-4 py-2 text-sm text-gray-700',
										)}
									>
										Your Profile
									</a>
								)}
							</Menu.Item>
							<Menu.Item>
								{({ active }) => (
									<a
										href="/"
										className={classNames(
											active ? 'bg-gray-100' : '',
											'block px-4 py-2 text-sm text-gray-700',
										)}
									>
										Settings
									</a>
								)}
							</Menu.Item>
							<Menu.Item>
								{({ active }) => (
									<button
										onClick={logoutBtnhandler}
										// href="?"
										className={classNames(
											active ? 'bg-gray-100' : '',
											'block w-full px-4 py-2 text-sm text-gray-700 text-left',
										)}
									>
										Sign out
									</button>
								)}
							</Menu.Item>
						</Menu.Items>
					</Transition>
				</Menu>
			);
		}
		return (
			<button
				type="button"
				className="text-white bg-gray-700 hover:bg-gray-950 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
			>
				Guest Login
			</button>
		);
	};

	return (
		<Fragment>
			<Disclosure as="nav" className={styleClass}>
				{({ open }) => (
					<>
						<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
							<div className="relative flex h-16 items-center justify-between">
								<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
									{/* Mobile menu button*/}
									<Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
										<span className="absolute -inset-0.5" />
										<span className="sr-only">Open main menu</span>
										{open ? (
											<XMarkIcon className="block h-6 w-6" aria-hidden="true" />
										) : (
											<Bars3Icon className="block h-6 w-6" aria-hidden="true" />
										)}
									</Disclosure.Button>
								</div>
								<div className="flex flex-1 items-center sm:items-stretch ">
									<div className="flex flex-shrink-0 items-center justify-start cursor-default">
										<img className="h-8 w-auto" src={logo} alt="DocMap Logo" />
										<span className="self-center ml-2 text-2xl font-semibold whitespace-nowrap text-white">
											DocMap
										</span>
									</div>
									<div className="hidden sm:block mx-auto">
										<div className="flex space-x-4">
											{navigation.map((item) => (
												<Link
													key={item.name}
													to={item.href}
													className={classNames(
														item.current
															? 'bg-gray-900 text-white'
															: 'text-gray-300 hover:bg-gray-700 hover:text-white',
														'rounded-md px-3 py-2 text-sm font-medium',
													)}
													aria-current={item.current ? 'page' : undefined}
												>
													{item.name}
												</Link>
											))}
										</div>
									</div>
								</div>
								<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
									<LoginConfigure isLogin={ctx.isLoggedIn} />
								</div>
							</div>
						</div>

						<Disclosure.Panel className="sm:hidden">
							<div className="space-y-1 px-2 pb-3 pt-2">
								{navigation.map((item) => (
									<Disclosure.Button
										key={item.name}
										as="a"
										href={item.href}
										className={classNames(
											item.current
												? 'bg-gray-900 text-white'
												: 'text-gray-300 hover:bg-gray-700 hover:text-white',
											'block rounded-md px-3 py-2 text-base font-medium',
										)}
										aria-current={item.current ? 'page' : undefined}
									>
										{item.name}
									</Disclosure.Button>
								))}
							</div>
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>
			<main>
				<Outlet />
			</main>
		</Fragment>
	);
}
