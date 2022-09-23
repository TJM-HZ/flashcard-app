import express from 'express';
const router = express.Router();

import {
    getDecks,
    getDeck,
  } from '../controllers/deckController.js';

router.get("/", getDecks);

router.get("/:id", getDeck);

export {router as decksRouter};
