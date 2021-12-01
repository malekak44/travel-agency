require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./db/connect');
const packageRouter = require('./routes/package');
const serviceRouter = require('./routes/service');
const notFound = require('./middleware/not-found');
const errorHandler = require('./middleware/error-handler');

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/v1/packages', packageRouter);
app.use('/api/v1/services', serviceRouter);
app.use(errorHandler);
app.use(notFound);

const port = process.env.PORT || 5000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`);
        });
    }
    catch (error) {
        console.log(error);
    }
}

start();