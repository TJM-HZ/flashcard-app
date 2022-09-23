import {
  getCardData,
  getCardsData,
} from '../adapters/supabaseAdapter.js';

export async function getCard(req, res) {
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
        question: card.question,
        answer: card.answer,
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
