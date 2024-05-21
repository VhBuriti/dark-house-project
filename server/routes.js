const express = require("express");
const { getConnectedClient } = require("./connectionDB");
const { ObjectId } = require("mongodb");
const router = express.Router();

const getCollection = () => {
  const client = getConnectedClient();
  const collection = client.db("storypalace").collection("/all-stories");
  return collection;
};

router.get("/all-stories", async (req, res) => {
  const collection = getCollection();
  const all_stories = await collection.find({}).toArray();

  res.status(200).json(all_stories);
});

router.post("/all-stories", async (req, res) => {
  const collection = getCollection();
  let { story } = req.body;
  const storyId = new ObjectId();
  story = { _id: storyId, ...story };

  const newStory = await collection.insertOne(story);

  res.status(201).json({ story, id: newStory.insertedId });
});

router.get("/all-stories/story/:id", async (req, res) => {
  const collection = getCollection();
  const _id = new ObjectId(req.params.id);

  const story = await collection.findOne({ _id });

  res.status(200).json(story);
  console.log("story", story);
});

module.exports = router;
