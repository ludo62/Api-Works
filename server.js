require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const connectDB = require('./config/db');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));


// Authentification users
app.use('/auth', require('./routes/auth.route'));
// Authentification Admin
app.use('/admin', require('./routes/admin.route'));
// ALert
app.use('/post', require('./routes/alert.route'));




const PORT = process.env.PORT;

const start = async () => {
	try {
		await connectDB();
		console.log('DB connected');
		app.listen(PORT, () => console.log(`Server is started on port ${PORT}`));
	} catch (error) {
		console.log(error);
	}
};
start();
