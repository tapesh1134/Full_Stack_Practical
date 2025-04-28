import express from 'express';
import {protect} from '../middleware/authMiddleware.js';
import { createEvent, getAllEvents, getEventDetails } from '../controllers/eventController.js';

const router = express.Router();

router.post('/', protect, createEvent);
router.get('/', getAllEvents);
router.get('/:id', getEventDetails); 

export default router;
