const express = require('express');
const env = require('dotenv');
env.config({ path: './config.env' });
const courseRouter = require('./courseRouter');
const {connectDB , getDB} = require('./courseDB');
const app = express();

app.use(express.json());
app.use("/courses", courseRouter);

let db;
connectDB((err)=>{
    if(err){
        console.log("Database connection failed");
        return;
    }
    console.log("Database connected successfully");
    app.listen(process.env.PORT, ()=>{
        console.log(`Server is running on port ${process.env.PORT}`);
    });
    db = getDB();
});