import React, { useCallback, useEffect, useState } from 'react';
import AddressAutocomplete from './AutocompleteAddress';
import TimingForm from './TimingForm';

const ClinicForm = ({ clinic, clinicIndex, onChange }) => {
	const [clinicElement, setClinicElement] = useState({
		place: '',
		location: '',
		timings: [{ days: '', time: { open: '', close: '' } }],
	});

	const placeInputChangeHandler = (e) => {
		const { name, value } = e.target;
		setClinicElement((prevClinic) => ({
			...prevClinic,
			[name]: value,
		}));
	};

	const locationInputChangehandler = (locationValue) => {
		setClinicElement((prevClinic) => {
			const updatedClinic = prevClinic;
			updatedClinic['location'] = JSON.stringify(locationValue);
			return updatedClinic;
		});
	};
	const changeTimingHandler = useCallback((updatedTiming, timingIndex) => {
		setClinicElement((prevClinic) => {
			const updatedClinic = prevClinic;
			updatedClinic['timings'][timingIndex] = updatedTiming;
			return updatedClinic;
		});
	}, []);
	const addTimingHandler = (e) => {
		e.preventDefault();
		setClinicElement((prevClinic) => {
			const updatedTimings = [
				...prevClinic.timings,
				{
					days: '',
					time: { open: '', close: '' },
				},
			];
			return { ...prevClinic, timings: updatedTimings };
		});
	};

	useEffect(() => {
		onChange(clinicElement);
	}, [onChange, clinicElement]);

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<input
				type="text"
				id="place"
				name="place"
				placeholder="Place Name"
				onChange={placeInputChangeHandler}
				value={clinicElement.place}
				className='text-black'
			/>
			<AddressAutocomplete
				key={clinicIndex}
				inputHandle={(locationValue) =>
					locationInputChangehandler(locationValue)
				}
				indice={clinicIndex}
			/>
			<label htmlFor="timings">Timings</label>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				{clinic['timings'].map((timing, timingIndex) => (
					<TimingForm
						key={timingIndex}
						timingIndex={timingIndex}
						onChange={(updatedTiming) =>
							changeTimingHandler(updatedTiming, timingIndex)
						}
					/>
				))}
				<button onClick={addTimingHandler}>Add Timing</button>
			</div>
		</div>
	);
};

export default ClinicForm;
