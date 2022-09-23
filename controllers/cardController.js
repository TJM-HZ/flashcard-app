import {
  getCardData,
  getCardsData,
} from '../adapters/supabaseAdapter.js';

export async function getCard(req, res) {

  console.log(`getCard ${req.params.id}`);

  const rows = await getCardData(req.params.id);
  res.json(rows);
}

export async function getCards(req, res) {

  console.log('getCards');

  const cards = [];
  const rows = await getCardsData();
  if (rows.length > 0) {
    rows.map((card) => {
      cards.push({
        id: card.id,
        question: card.question,
        answer: card.answer,
        deck: card.deck,
      });
    });
    res.json(cards);
  } else {
    res.status(500);
    res.json({
      title: 'Cannot find cards',
    });
  }
}
