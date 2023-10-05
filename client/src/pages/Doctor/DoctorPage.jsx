import React, { Fragment, useEffect, useState } from 'react';
import { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import Sidenav from '../../components/doctor/HomePage/Sidenav';
import Content from '../../components/doctor/HomePage/Content';

const API_BASE = 'http://localhost:3001';

const DoctorPage = () => {
	const { userID } = useParams();
	const [doctorList, setDoctorList] = useState([]);
	const [doctorData, setDoctorData] = useState({});

	const fetchDoctors = useCallback(async () => {
		try {
			const response = await fetch(API_BASE + '/doctor/list');

			if (!response.ok) {
				console.log('Oops! Something went wrong');
			}

			const data = await response.json();
			setDoctorList(data);
		} catch {
			console.log('Fetch not working');
		}
	}, []);

	useEffect(() => {
		fetchDoctors();
	}, [fetchDoctors]);

	useEffect(() => {
		if (doctorList.length > 0) {
			const foundDoctor = doctorList.find(
				(doctor) => doctor.doctorID === userID,
			);
			if (foundDoctor) setDoctorData(foundDoctor);
		}
	}, [doctorList, userID]);

	console.log('doctorData', doctorData);

	return (
		<Fragment>
			<div className="h-full w-full flex">
				<Sidenav />
				<div className="h-full w-full">
					<Content />
				</div>
			</div>
		</Fragment>
	);
};

export default DoctorPage;
