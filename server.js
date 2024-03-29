// Importations des dépendances
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
const postRoutes = require('./routes/post.routes');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Création des routes
app.use('/', authRoutes);
app.use('/', userRoutes);
app.use('/', postRoutes);

const corsOptions = {
	credentials: true,
	optionsSuccessStatus: 200,
	methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
	preflightContinue: false,
};

app.use(cors(corsOptions));

// Lancement du serveur
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
