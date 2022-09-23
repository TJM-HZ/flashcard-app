import express from 'express';
const router = express.Router();

import { getCard, getCards, setCard } from '../controllers/cardsController.js';
import { getDeck, getDecks, setDeck } from '../controllers/decksController.js';






router.get('/', (req, res) => {
    res.json('Welcome to flashyflash')
})




