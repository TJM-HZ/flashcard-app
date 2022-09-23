import express from 'express';
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

router
    .route("/:id")
    .get(getCard)
    .put(setCard)
    // .delete((req, res) => {
    //     res.send(`Delete card with ID ${req.params.id}`)
    // })

router.param("id", (req, res, next, id) => {
    console.log(id)
})

let cardsRouter = router
export default cardsRouter;
