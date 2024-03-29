import React, { Fragment, useCallback, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DoctorForm from '../../components/doctor/Forms/Form';
import DoctorEduForm from '../../components/doctor/Forms/DoctorEduForm';
import ClinicForm from '../../components/doctor/Forms/ClinicForm';
import UploadImage from '../../components/doctor/Forms/UploadImage';
import Qualifications from '../../components/doctor/HomePage/EditProfile/Qualifications';

const API_BASE = 'http://localhost:3001';

const DoctorInfo = () => {
	const navigate = useNavigate();
	const { userID } = useParams();

	const [info, setInfo] = useState({
		name: '',
		contact: '',
		contactMail: '',
		experience: '',
		specialisation: '',
		fees: '',
	});
	const [images, setImages] = useState({
		pfpInfo: { url: '', filename: '' },
		bgInfo: { url: '', filename: '' },
	});
	const [education, setEducation] = useState([{ degree: '', institution: '' }]);
	const [clinics, setClinics] = useState([
		{
			place: '',
			location: '',
			timings: [{ days: '', time: { open: '', close: '' } }],
		},
	]);

	const changeInfoHandler = useCallback((changedInfo) => {
		setInfo(changedInfo);
	}, []);

	const changeEduInfoHandler = useCallback((updatedInfo) => {
		setEducation(updatedInfo);
	}, []);

	const addLocationBtnHandler = (e) => {
		e.preventDefault();
		setClinics((prevData) => [
			...prevData,
			{ location: '', timings: [{ days: '', time: { open: '', close: '' } }] },
		]);
	};
	const editClinicHandler = useCallback((editedClinic, clinicIndex) => {
		setClinics((prevData) => {
			const updatedClinics = [...prevData];
			updatedClinics[clinicIndex] = editedClinic;
			return updatedClinics;
		});
	}, []);
	const pfpChangeHandler = useCallback((imgObj) => {
		setImages((prevData) => {
			const updatedImagesInfo = prevData;
			updatedImagesInfo['pfpInfo'] = imgObj;
			return updatedImagesInfo;
		});
	}, []);
	const bgChangeHandler = useCallback((imgObj) => {
		setImages((prevData) => {
			const updatedImagesInfo = prevData;
			updatedImagesInfo['bgInfo'] = imgObj;
			return updatedImagesInfo;
		});
	}, []);

	const submitFormHandler = async (e) => {
		e.preventDefault();

		const toSend = {
			doctor: info,
			images,
			education,
			clinics,
		};
		console.log(toSend);
		try {
			const response = await fetch(API_BASE + `/doctor/${userID}`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(toSend),
			});

			if (response.ok) {
				console.log('Data sent successfully');
				const data = await response.json();
				localStorage.setItem('accID', data._id);
				navigate(`/doctor/${userID}`);
			} else {
				console.log('Error submitting data');
			}
		} catch (error) {
			console.log('Some error: ', error);
		}
	};

	return (
		<Fragment>
			<form encType="multipart/form-data" className="h-[91vh]">
				<DoctorForm onChange={changeInfoHandler} />
				<br />
				<UploadImage imgType="pfpURL" imageInfoChange={pfpChangeHandler} />
				<br />
				<UploadImage imgType="bgURL" imageInfoChange={bgChangeHandler} />
				<br />
				<Qualifications
					qualifications={education}
					onChange={changeEduInfoHandler}
				/>
				<br />
				<div id="addLocation">
					{clinics.map((clinic, clinicIndex) => (
						<ClinicForm
							key={clinicIndex}
							clinic={clinic}
							clinicIndex={clinicIndex}
							onChange={(editedClinic) =>
								editClinicHandler(editedClinic, clinicIndex)
							}
						/>
					))}
					<button onClick={addLocationBtnHandler}>Add Location</button>
				</div>
				<button onClick={submitFormHandler}>Submit</button>
			</form>
		</Fragment>
	);
};

export default DoctorInfo;
