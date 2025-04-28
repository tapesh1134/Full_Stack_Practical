import Event from '../models/eventModel.js';
import User from '../models/userModel.js';

export const createEvent = async (req, res) => {
  const { title, description, date } = req.body;

  if (new Date(date) <= new Date()) {
    return res.status(400).json({ message: 'Event date must be in the future' });
  }

  const event = await Event.create({
    title,
    description,
    date,
    createdBy: req.user._id,
  });

  res.status(201).json(event);
};

export const getAllEvents = async (req, res) => {
  const events = await Event.find({ date: { $gte: new Date() } }).populate('createdBy', 'name email');
  res.json(events);
};

export const getEventDetails = async (req, res) => {
  try {
    const { id } = req.params;

    const event = await Event.findById(id).populate('createdBy', 'name email');

    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    res.json(event);
  } catch (error) {
    console.error('Error fetching event details:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
