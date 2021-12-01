const Errors = require('../errors');
const Service = require('../models/Service');
const { StatusCodes } = require('http-status-codes');

const createService = async (req, res) => {
    const { name, cost, description, imageURL } = req.body;

    if (!name || !cost || !description || !imageURL) {
        throw new Errors.BadRequestError('Please provide all values');
    }

    const service = await Service.create({ name, cost, description, imageURL });
    res.status(StatusCodes.CREATED).json({ service });
}

const getHomeServices = async (req, res) => {
    const services = await Service.find({}).sort({ _id: -1 }).limit(3);
    res.status(StatusCodes.OK).json({ services: services });
}

module.exports = {
    createService,
    getHomeServices,
}