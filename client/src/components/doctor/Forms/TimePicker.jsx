import React, { Fragment, useCallback, useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimeField } from '@mui/x-date-pickers/TimeField';

const TimePicker = ({onOpenSelect, onCloseSelect }) => {
	const [openTime, setOpenTime] = useState(dayjs('2022-04-17T15:30'));
	const [closeTime, setCloseTime] = useState(dayjs('2022-04-17T15:30'));

	const OpenTimeStatesinParent = useCallback(
		(time) => {
			onOpenSelect(time);
		},
		[onOpenSelect],
	);

	useEffect(() => {
		OpenTimeStatesinParent(
			openTime.$d.toLocaleTimeString('en-US', {
				hour12: true,
				hour: 'numeric',
				minute: 'numeric',
			}),
		);
	}, [OpenTimeStatesinParent, openTime]);

	const CloseTimeStatesinParent = useCallback(
		(time) => {
			onCloseSelect(time);
		},
		[onCloseSelect],
	);

	useEffect(() => {
		CloseTimeStatesinParent(
			closeTime.$d.toLocaleTimeString('en-US', {
				hour12: true,
				hour: 'numeric',
				minute: 'numeric',
			}),
		);
	}, [CloseTimeStatesinParent, closeTime]);

	return (
		<Fragment>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<TimeField
					label="Opens at"
					value={openTime}
					onChange={(newValue) => setOpenTime(newValue)}
				/>
				<TimeField
					label="Closes at"
					value={closeTime}
					onChange={(newValue) => setCloseTime(newValue)}
				/>
			</LocalizationProvider>
		</Fragment>
	);
};

export default TimePicker;
