module.exports = (req, res, next) => {
	require('../models/User').find({}, (err, students) => {
		if (err) {
			next(new Error('error'));
		} else {
			res.status(201).send(students);
		}
	});
};
