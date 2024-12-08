import express from 'express';
import { createItem, getItems } from '../controllers/itemController.js';

const router = express.Router();

// POST: Create a new item
router.post('/', createItem);

// GET: Fetch all items
router.get('/', getItems);

export default router;
