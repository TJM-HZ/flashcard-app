import express from 'express';
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Card list")
});

router.get("/new", (req, res) => {
    res.send("New card form")
});

router.post("/", (req, res) => {
    res.send("Create card")
});

router
    .route("/:id")
    .get((req, res) => {
        res.send(`Get card with ID ${req.params.id}`)
    })
    .put((req, res) => {
        res.send(`Update card with ID ${req.params.id}`)
    })
    .delete((req, res) => {
        res.send(`Delete card with ID ${req.params.id}`)
    })

router.param("id", (req, res, next, id) => {
    console.log(id)
})

export { router as cardsRouter};
