const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  bookingDetails: {
    temple: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    members: { type: Number, required: true },
    amount: { type: String, required: true }
  }
});

module.exports = mongoose.model('Booking', bookingSchema);
