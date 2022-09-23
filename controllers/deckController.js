import {
  getDeckData,
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
      title: 'Cannot find decks',
    });
  }
}