const mongoose = require('mongoose');
const env = require('dotenv');
env.config({ path: './config.env' });
const {MongoClient} = require('mongodb');
let db;

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const connectDB = async (cb) => {
    try {
        const client = await MongoClient.connect(process.env.URI);
        db = client.db();
        console.log("Connected to MongoDB");
        return cb();
    } catch (error) {
        console.log(error);
        return cb(error);
    }
};

const getDB = () => db;

const Course = mongoose.model('Course', courseSchema);

module.exports = {
    connectDB,
    getDB,
    Course
};