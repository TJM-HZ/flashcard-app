import express from 'express';
const router = express.Router();

import {
    getDecks,
    setDeck,
    getDeck,
  } from '../controllers/deckController.js';

router.get("/", getDecks);

router.get("/new", (req, res) => {
    res.send("New deck form")
});

router.post("/", (req, res) => {
    res.send("Create deck")
});


router.get("/:id", getDeck);

// router
//     .route("/:id")
//     .get(getDeck)
//     .put(setDeck)
//     // .delete((req, res) => {
//     //     res.send(`Delete deck with ID ${req.params.id}`)
//     // })

router.param("id", (req, res, next, id) => {
    console.log(id)
})

export {router as decksRouter};

