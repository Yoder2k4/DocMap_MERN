import React, { useState, useCallback, useEffect } from 'react';
import ToggleDays from './WeekdayPicker';
import TimePicker from './TimePicker';

const TimingForm = ({ timingIndex, onChange }) => {
	const [timing, setTiming] = useState({
		days: '',
		time: { open: '', close: '' },
	});

	const daySelectHandler = useCallback((daysArray) => {
		setTiming((prevTiming) => {
			const updatedTiming = prevTiming;
			updatedTiming['days'] = daysArray;
			return updatedTiming;
		});
	}, []);
	const openTimeSelectHandler = useCallback((openTime) => {
		setTiming((prevTiming) => {
			const updatedTiming = prevTiming;
			updatedTiming['time']['open'] = JSON.stringify(openTime);
			return updatedTiming;
		});
	}, []);
	const closeTimeSelectHandler = useCallback((closeTime) => {
		setTiming((prevTiming) => {
			const updatedTiming = prevTiming;
			updatedTiming['time']['close'] = JSON.stringify(closeTime);
			return updatedTiming;
		});
	}, []);

	useEffect(() => {
		onChange(timing);
	}, [onChange, timing]);

	return (
		<div key={timingIndex} style={{ width: '100%' }}>
			<ToggleDays onSelect={daySelectHandler} />
			<TimePicker
				onOpenSelect={openTimeSelectHandler}
				onCloseSelect={closeTimeSelectHandler}
			/>
			<br />
		</div>
	);
};

export default TimingForm;
