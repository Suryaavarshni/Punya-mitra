const express = require('express');
const router = express.Router();
const Message = require('../models/message');

// Get all messages
router.get('/', async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new message
router.post('/', async (req, res) => {
  const { name, email, phone, message } = req.body;
  const newMessage = new Message({ name, email, phone, message });
  try {
    const savedMessage = await newMessage.save();
    res.status(201).json({ message: 'Message sent successfully', data: savedMessage });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
