const express = require('express');
const { createBooking, getAllBookings } = require('../controllers/bookingController');

const router = express.Router();

router.post('/', createBooking);
router.get('/', getAllBookings);

module.exports = router;