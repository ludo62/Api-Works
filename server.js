require('dotenv').config();
const express = require('express');
const createHttperrors = require('http-errors');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();
app.use(morgan('dev'));
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use('/', require('./routes/index.route'));
app.use('/auth', require('./routes/auth.route'));
app.use('/user', require('./routes/user.route'));

app.use((req, res, next) => {
	next(createHttperrors.NotFound());
});

app.use((error, req, res, next) => {
	res.status(error.status || 500);
	res.status(error.status);
	res.render('error_40x', { error });
});

const PORT = process.env.PORT;

mongoose
	.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log('Connected to MongoDB');
		app.listen(PORT, () => {
			console.log(`Server is running on port ${PORT}`);
		});
	})
	.catch((err) => console.log(err.message));
