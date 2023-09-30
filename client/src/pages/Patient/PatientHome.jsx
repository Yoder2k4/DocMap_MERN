import React, { Fragment } from 'react';
// import { useParams } from 'react-router-dom';
import MapBox from '../../components/patient/MapBox';

// const BASE_URL = 'http://localhost:3001';

const PatientHome = () => {
	// const { userID } = useParams();
	return (
		<Fragment>
			<MapBox />
		</Fragment>
	);
};

export default PatientHome;
