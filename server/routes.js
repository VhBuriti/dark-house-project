const express = require("express");
const { getConnectedClient } = require("./connectionDB");
const { ObjectId } = require("mongodb");
const router = express.Router();

const getCollection = () => {
    const client = getConnectedClient();
    const collection = client.db("storypalace").collection("/all-stories");
    return collection;
}

router.get("/all-stories", async (req, res) => {
    const collection = getCollection();
    const all_stories = await collection.find({}).toArray();

    res.status(200).json(all_stories);
});

router.post("/all-stories", async (req, res) => {
    const collection = getCollection();
    let { story } = req.body;


    const newStory = await collection.insertOne({ story });

    res.status(201).json({ newStory });
});

// router.delete("/todos/:id", async (req, res) => {
//     const collection = getCollection();
//     const _id = new ObjectId(req.params.id);

//     const deletedTodo = await collection.deleteOne({ _id });

//     res.status(200).json(deletedTodo);
// });

// router.put("/todos/:id", async (req, res) => {
//     const collection = getCollection();
//     const _id = new ObjectId(req.params.id);
//     const { status } = req.body;

//     if (typeof status !== "boolean") {
//         return res.status(400).json({ mssg: "invalid status"});
//     }

//     const updatedTodo = await collection.updateOne({ _id }, { $set: { status: !status } });

//     res.status(200).json(updatedTodo);
// });

module.exports = router;