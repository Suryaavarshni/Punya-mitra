const express = require('express');
const router = express.Router();
const Booking = require('../models/booking');

// Get all bookings for a user
router.get('/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const userBookings = await Booking.find({ userId });
    res.status(200).json(userBookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get recent bookings for a user
router.get('/recent/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const userBookings = await Booking.find({ userId }).sort({ _id: -1 }).limit(5);
    res.status(200).json(userBookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new booking
router.post('/', async (req, res) => {
  const { userId, bookingDetails } = req.body;
  const newBooking = new Booking({ userId, bookingDetails });
  try {
    const savedBooking = await newBooking.save();
    res.status(201).json({ message: 'Booking created successfully', booking: savedBooking });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get a single booking by id
router.get('/booking/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const booking = await Booking.findById(id);
    if (booking) {
      res.status(200).json(booking);
    } else {
      res.status(404).json({ message: 'Booking not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a booking
router.put('/booking/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { bookingDetails } = req.body;
    const updatedBooking = await Booking.findByIdAndUpdate(id, { bookingDetails }, { new: true });
    if (updatedBooking) {
      res.status(200).json({ message: 'Booking updated successfully', booking: updatedBooking });
    } else {
      res.status(404).json({ message: 'Booking not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a booking
router.delete('/booking/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBooking = await Booking.findByIdAndDelete(id);
    if (deletedBooking) {
      res.status(200).json({ message: 'Booking deleted successfully' });
    } else {
      res.status(404).json({ message: 'Booking not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;