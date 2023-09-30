import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const API_BASE = 'http://localhost:3001';

const PatientLogin = (props) => {
	const navigate = useNavigate();
	const [data, setData] = useState({
		email: '',
		password: '',
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch(API_BASE + '/patient/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});

			if (response.ok) {
				const user = await response.json();
				const userID = user._id;
				props.onLogin('patient');
				navigate(`/patient/${userID}`);
				console.log('Data submitted successfully');
			} else {
				console.error('Error submitting data');
			}
		} catch (error) {
			console.log('handleSubmit');
			console.error('Error:', error.message);
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	return (
		<Fragment>
			<form onSubmit={handleSubmit}>
				<input
					type="email"
					name="email"
					id="email"
					onChange={handleChange}
					value={data.email}
				/>
				<label htmlFor="email">Email</label>
				<br />
				<br />
				<input
					type="password"
					name="password"
					id="password"
					onChange={handleChange}
					value={data.password}
				/>
				<label htmlFor="password">Password</label>
				<br />
				<br />
				<button>Log In</button>
			</form>
		</Fragment>
	);
};

export default PatientLogin;