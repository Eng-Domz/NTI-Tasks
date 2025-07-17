const express = require('express');
const router = express.Router();
const {getDB} = require('./courseDB');
const {ObjectId} = require('mongodb');

// Get all courses
router.get("/", async (req, res) => {
    try {
        const db = getDB();
        const courses = await db.collection('courses').find().toArray();
        res.json(courses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get a single course
router.get("/:id", async (req, res) => {
    try {
        const db = getDB();
        const course = await db.collection('courses').findOne({ _id: new ObjectId(req.params.id) });
        if (!course) {
            return res.status(404).json({ message: "Course not found" });
        }
        res.json(course);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create a new course
router.post("/", async (req, res) => {
    try {
        const { name, description } = req.body;
        if (!name || !description) {
            return res.status(400).json({ message: "Name and description are required" });
        }
        const db = getDB();
        const newCourse = await db.collection('courses').insertOne({
            name: req.body.name,
            description: req.body.description
        });
        res.status(201).json(newCourse);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update a course
router.put("/:id", async (req, res) => {
    try {
        const { name, description } = req.body;
        if (!name || !description) {
            return res.status(400).json({ message: "Name and description are required" });
        }
        const db = getDB();
        const updatedCourse = await db.collection('courses').updateOne({_id: new ObjectId(req.params.id) }, { $set: { name: req.body.name, description: req.body.description } });
        res.status(200).json(updatedCourse);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// patch a course
router.patch("/:id", async (req, res) => {
    try {
        const db = getDB();
        const course = await db.collection("courses").findOne({_id: new ObjectId(req.params.id)});
        if (!course) {
            return res.status(404).json({ message: "Course not found" });
        }
        let {name, description} = req.body;
        if(!name){
            name = course.name;
        }
        if(!description){
            description = course.description;
        }
        await db.collection("courses").updateOne({_id: new ObjectId(req.params.id)}, {$set: {name, description}});
        res.json({message: "Course updated successfully"});
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete a course
router.delete("/:id", async (req, res) => {
    try {
        const db = getDB();
        await db.collection("courses").deleteOne({_id: new ObjectId(req.params.id)});
        res.json({ message: "Course deleted successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//Delete all courses
router.delete("/", async (req, res) => {
    try {
        const db = getDB();
        await db.collection("courses").deleteMany({});
        res.json({ message: "All courses deleted successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;