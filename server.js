require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));




app.use('/auth', require('./routes/auth'));
app.use('/api/private', require('./routes/private'));

// Error handler
app.use(errorHandler);

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