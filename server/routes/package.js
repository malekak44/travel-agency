const express = require('express');
const router = express.Router();

const {
    createPackage,
    getHomePackages,
} = require('../controllers/package');

router
    .route('/')
    .post(createPackage);

router
    .route('/home')
    .get(getHomePackages);

module.exports = router;