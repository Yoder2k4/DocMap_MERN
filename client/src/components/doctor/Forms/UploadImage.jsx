import React, { useEffect, useState } from 'react';

const API_BASE = 'http://localhost:3001';

const UploadImage = ({ imageInfoChange }) => {
	const [selectedFile, setSelectedFile] = useState(null);
	const [imgData, setImgData] = useState({ url: '', filename: ' ' });

	useEffect(() => {
		imageInfoChange(imgData);
	}, [imgData, imageInfoChange]);

	const handleFileChange = (e) => {
		setSelectedFile(e.target.files[0]);
	};

	const handleUpload = async (e) => {
		e.preventDefault();
		if (!selectedFile) {
			alert('Please select a file to upload.');
			return;
		}

		const formData = new FormData(); // ?????
		formData.append('pfp', selectedFile);

		try {
			const response = await fetch(API_BASE + `/doctor/uploadImg`, {
				method: 'POST',
				body: formData,
			});

			if (response.ok) {
				const data = await response.json();
				console.log(data);
				setImgData({ url: data.url, filename: data.filename });
			}
		} catch (error) {
			console.error('Error uploading image:', error);
		}
	};

	return (
		<>
			<h2>Upload an Image</h2>
			<input
				type="file"
				name="pfp"
				accept="image/*"
				onChange={handleFileChange}
			/>
			<button onClick={handleUpload}>Upload</button>
		</>
	);
};

export default UploadImage;
