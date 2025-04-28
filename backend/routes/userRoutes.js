import express from 'express';
import { getUserRegisteredEvents } from '../controllers/userController.js';

const router = express.Router();

router.get('/:userId/events', getUserRegisteredEvents);

export default router;
