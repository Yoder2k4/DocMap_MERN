import React, { useCallback, useEffect, useState } from 'react';
import LayerGroup from 'ol/layer/Group';
import { Feature, Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import VectorLayer from 'ol/layer/Vector';
import { Point } from 'ol/geom';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import { fromLonLat, transform } from 'ol/proj';
import VectorSource from 'ol/source/Vector';
import markerIcon from '../../img/markerIcon.png';

const BASE_URL = 'http://localhost:3001';

const MapBox = () => {
	const [map, setMap] = useState(null);

	const [doctorData, setdoctorData] = useState([]);

	const getLocations = useCallback(async () => {
		const response = await fetch(BASE_URL + '/patient/user');

		if (!response.ok) {
			console.log(`Something went wrong in ${BASE_URL} + '/patient/user'`);
		}

		const data = await response.json();
		setdoctorData(data);
	}, []);

	useEffect(() => {
		getLocations();
	}, [getLocations]);

	useEffect(() => {
		const newMap = new Map({
			target: 'map',
			view: new View({
				center: [9840030.498189036, 2578745.255910921],
				zoom: 13,
			}),
		});

		const darkMatterMap = new TileLayer({
			source: new OSM({
				url: `https://maps.geoapify.com/v1/tile/dark-matter-brown/{z}/{x}/{y}@2x.png?apiKey=${'fb1725b059fd44308deefe5ba3854e50'}`,
			}),
			visible: true,
			title: 'OSMStandard',
		});

		const baseLayerGroup = new LayerGroup({
			layers: [darkMatterMap],
		});

		newMap.addLayer(baseLayerGroup);
		setMap(newMap);

		if (doctorData.length > 0) {
			let locationArray = [];
			doctorData.forEach((data) =>
				data.clinics.forEach((clinics) => {
					const obj = JSON.parse(clinics.location);
					locationArray = [...locationArray, obj.geometry.coordinates];
				}),
			);
			console.log('locationArray: ', locationArray);

			// ============================= SETING UP MARKER ===============================
			const markers = locationArray.map(
				(loc, index) =>
					new Feature({
						geometry: new Point(fromLonLat(loc)),
						name: `Doctor ${index}`,
					}),
			);

			const markerLayer = new VectorLayer({
				source: new VectorSource({
					features: markers,
				}),
				style: new Style({
					image: new Icon({
						src: markerIcon,
						scale: 0.03,
					}),
				}),
			});

			newMap.addLayer(markerLayer);
			// ============================================================================
			newMap.on('click', (e) => {
				// to get x/y coordinates
				console.log(e.coordinate);

				const lonLat = transform(
					[e.coordinate[0], e.coordinate[1]],
					'EPSG:3857',
					'EPSG:4326',
				);
				console.log(lonLat);
			});
		}

		return () => {
			newMap.setTarget(null); // Cleanup when component unmounts
		};
	}, [doctorData]);

	return <div id="map" style={{ height: '100vh' }}></div>;
};

export default MapBox;
