import express from 'express';
const router = express.Router();

import {
    getCards,
    getCard,
  } from '../controllers/cardController.js';

router.get("/", getCards);

router.get("/:id", getCard);

export {router as cardsRouter};
