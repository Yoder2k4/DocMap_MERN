const DoctorUser = require('../models/doctorUser');
const DoctorDetails = require('../models/doctorDetails');

module.exports.registerDoctor = async (req, res) => {
	const { email, password } = req.body;
	const user = new DoctorUser({ email });
	const registeredUser = await DoctorUser.register(user, password);
	req.login(registeredUser, (err) => {
		if (err) {
			return res.send(err);
		}
		res.json(registeredUser);
	});
};

module.exports.loginDoctor = async (req, res) => {
	const { email } = req.body;
	const doctorAcc = await DoctorUser.findOne({ email });
	res.json(doctorAcc);
};

module.exports.loginFailRoute = (req, res) => {
	res.redirect('http://localhost:3000/doctor/login');
};

module.exports.registerDoctorInfo = async (req, res) => {
	const { doctor, education, clinics, images } = req.body;
	const { id } = req.params;
	doctor.doctorID = id;
	doctor.education = education;
	doctor.clinics = clinics;
	doctor.images = images;
	const newDoctor = new DoctorDetails(doctor);
	await newDoctor.save();
	const DoctorAcc = await DoctorUser.findById(id);
	DoctorAcc.accID = newDoctor._id;
	await DoctorAcc.save();
	res.json({ newDoctor, DoctorAcc });
};
