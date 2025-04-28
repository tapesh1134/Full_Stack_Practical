import User from '../models/userModel.js';

export const getUserRegisteredEvents = async (req, res) => {
  const user = await User.findById(req.params.userId).populate('registeredEvents');

  if (!user) return res.status(404).json({ message: 'User not found' });

  res.json(user.registeredEvents);
};
