const express = require('express');
const router = express.Router();

const {
    createService,
    getHomeServices,
} = require('../controllers/service');

router
    .route('/')
    .post(createService);

router
    .route('/home')
    .get(getHomeServices);

module.exports = router;