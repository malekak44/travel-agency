const Errors = require('../errors');
const Package = require('../models/Package');
const { StatusCodes } = require('http-status-codes');

const createPackage = async (req, res) => {
    const { location, price, duration, image } = req.body;

    if (!location || !price || !duration || !image) {
        throw new Errors.BadRequestError('Please provide all values');
    }

    const package = await Package.create({ location, price, duration, image });
    res.status(StatusCodes.CREATED).json({ package });
}

const getHomePackages = async (req, res) => {
    const packages = await Package.find({}).limit(3);
    res.status(StatusCodes.OK).json({ packages: packages });
}

module.exports = {
    createPackage,
    getHomePackages,
}