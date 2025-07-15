const express = require("express");
const app = express();
const fs = require("fs");
// Add middleware to parse JSON bodies
app.use(express.json());

const data = fs.readFileSync(`${__dirname}/db.json`, "utf-8");
let courses = JSON.parse(data);

const getCourses = (req,res)=>{res.status(200).json(courses);};

const getCourseById = (req,res)=>{
    const id = parseInt(req.params.id);
    const course = courses.find(course => course.username === id);
    if(course){
        res.status(200).json(course);
    } else {
        res.status(404).json({message: "Course not found"});
    }
};

const createCourse =(req,res)=>{
    const newCourse = {
        username: courses.length? courses.length + 1 : 1,
        title: req.body.title,
        content: req.body.content
    };
    
    courses.push(newCourse);
    fs.writeFileSync(`${__dirname}/db.json`, JSON.stringify(courses, null, 2));
    res.status(201).json(newCourse);
}; 

const editCourse = (req,res)=>{
    const id = parseInt(req.params.id);
    const courseIndex = courses.findIndex(course => course.username === id);
    
    if(courseIndex === -1){
        return res.status(404).json({message: "Course not found"});
    }
    courses[courseIndex] = {
        username: id,
        title: req.body.title,
        content: req.body.content
    }
    fs.writeFileSync(`${__dirname}/db.json`, JSON.stringify(courses, null, 2));
    res.status(200).json(courses[courseIndex]);
};

const patchCourse = (req,res)=>{
    const id = parseInt(req.params.id);
    const courseIndex = courses.findIndex(course => course.username === id);
    if(courseIndex === -1){
        return res.status(404).json({message: "Course not found"});
    }
    courses[courseIndex] = {
        username: id,
        title: req.body.title || courses[courseIndex].title,
        content: req.body.content || courses[courseIndex].content
    }
    fs.writeFileSync(`${__dirname}/db.json`, JSON.stringify(courses, null, 2));
    res.status(200).json(courses[courseIndex]);
};

const deleteCourse = (req,res)=>{
    const id = parseInt(req.params.id);
    const courseIndex = courses.findIndex(course => course.username === id);
    if(courseIndex === -1){
        return res.status(404).json({message: "Course not found"});
    }
    courses.splice(courseIndex,1);
    fs.writeFileSync(`${__dirname}/db.json`, JSON.stringify(courses, null, 2));
    res.status(200).json({message: "Course deleted"});
};




// first way
// app.get("/courses",getCourses);
// app.get("/course/:id",getCourseById);
// app.post("/courses",createCourse);
// app.put("/courses/:id",editCourse);

//second way
app.route("/courses")
    .get(getCourses)
    .post(createCourse);
app.route("/courses/:id")
    .get(getCourseById)
    .put(editCourse)
    .patch(patchCourse)
    .delete(deleteCourse);


app.listen(8000,"127.0.0.1",()=>{
    console.log("Server is running on port 8000");
});
