import React, { Fragment, useEffect, useState } from 'react';
import { useCallback } from 'react';
import { useParams } from 'react-router-dom';

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
	console.log('doctorList', doctorList);

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
			{doctorList.length === 0 && <p>No doctor found</p>}
			{doctorList.map((doc) => (
				<div key={doc._id}>
					<span>{doc.name} : </span>
					<span>{doc.specialisation} : </span>
					<span> ${doc.fees} : </span>
				</div>
			))}
		</Fragment>
	);
};

export default DoctorPage;
