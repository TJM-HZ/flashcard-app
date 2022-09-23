import express from 'express';
import cors from 'cors';
const router = express.Router();

import {
    getCards,
    setCard,
    getCard,
  } from '../controllers/cardController.js';

router.get("/", getCards);

router.get("/new", (req, res) => {
    res.send("New card form")
});

router.post("/", (req, res) => {
    res.send("Create card")
});

router.get('/:id', getCard);

// router
//     .route("/:id")
//     .get(getCard)
//     .put(setCard)
//     // .delete((req, res) => {
//     //     res.send(`Delete card with ID ${req.params.id}`)
//     // })

router.param("id", (req, res, next, id) => {
    console.log(id)
})

export {router as cardsRouter};
