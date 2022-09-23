import express from 'express';
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Deck list")
});

router.get("/new", (req, res) => {
    res.send("New deck form")
});

router.post("/", (req, res) => {
    res.send("Create deck")
});

router
    .route("/:id")
    .get((req, res) => {
        res.send(`Get deck with ID ${req.params.id}`)
    })
    .put((req, res) => {
        res.send(`Update deck with ID ${req.params.id}`)
    })
    .delete((req, res) => {
        res.send(`Delete deck with ID ${req.params.id}`)
    })

router.param("id", (req, res, next, id) => {
    console.log(id)
})



export { router as decksRouter};
