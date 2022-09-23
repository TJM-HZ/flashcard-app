import {
    getCardData,
    setCardData,
    getCardsData,
  } from '../adapters/supabaseAdapter.js';
  
  export async function getCard(req, res) {
    const rows = await getCardData(req.params.id);
    res.json(rows);
  }
  
  export async function getCards(req, res) {
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
        title: 'no cards found',
        message: `🥴 We did something wrong`,
      });
    }
  }
  
  export async function setCard(req, res) {
    const card = {};
    if (req.body.pet && req.body.timeslot && req.body.date) {
      card.question = req.body.question;
      card.answer = req.body.answer;
      card.deck = req.body.deck;
      const rows = await setCardData(card);
      if (rows.length >= 0) {
        res.json({
          title: 'Card is added',
          message: `Card question: ${card.question} \n Card answer: ${card.answer} \n Deck: ${card.deck}`,
        });
      } else {
        res.status(500);
        res.json({
          title: 'cannot add card',
          message: `Unknown causes`,
        });
      }
    } else {
      res.status(422);
      res.json({
        title: 'cannot add card',
        message: `You need to set client, date and time`,
      });
    }
  }
  