import {
    getDeckData,
    setDeckData,
    getDecksData,
  } from '../adapters/supabaseAdapter.js';
  
  export async function getDeck(req, res) {
    const rows = await getDeckData(req.params.id);
    res.json(rows);
  }
  
  export async function getDecks(req, res) {
    const decks = [];
    const rows = await getDecksData();
    if (rows.length > 0) {
      rows.map((deck) => {
        decks.push({
          name: deck.name,
        });
      });
      res.json(decks);
    } else {
      res.status(500);
      res.json({
        title: 'no Decks found',
        message: `🥴 We did something wrong`,
      });
    }
  }
  
  export async function setDeck(req, res) {
    const deck = {};
    if (req.body.name) {
      deck.name = req.body.name;
      const rows = await setDeckData(deck);
      if (rows.length >= 0) {
        res.json({
          title: 'Deck is added',
          message: `Deck name: ${deck.name}`,
        });
      } else {
        res.status(500);
        res.json({
          title: 'cannot add deck',
          message: `Unknown causes`,
        });
      }
    } else {
      res.status(422);
      res.json({
        title: 'cannot add deck',
        message: `You need to set question, answer and deck`,
      });
    }
  }
  