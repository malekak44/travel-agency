const mongoose = require('mongoose');

const PackageSchema = new mongoose.Schema({
    location: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Package', PackageSchema);