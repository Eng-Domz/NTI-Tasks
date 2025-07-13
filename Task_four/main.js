const fs = require('fs');
const url = require('url');
const http = require('http');
const nunjucks = require('nunjucks');

const data = fs.readFileSync("db.json", "utf-8");
const courses = JSON.parse(data);

const mainFile = fs.readFileSync("index.html", "utf-8");
const template = fs.readFileSync("card.html", "utf-8");
const openTemplate = fs.readFileSync("openCard.html", "utf-8");
const errorFile = fs.readFileSync("404.html", "utf-8");
const server = http.createServer((req,res)=>
{
    const {pathname , query} = url.parse(req.url, true);
    
    if(pathname === "/" || pathname === "/all"){
        res.writeHead(200, {"content-type" : "text/html"});
        const cards = courses.map(course =>nunjucks.renderString(template,course)).join("\n");
        const rendered = nunjucks.renderString(mainFile, {content: cards});
        res.end(rendered);
    }else if(pathname === "/free"){
        res.writeHead(200, {"content-type" : "text/html"});
        const freeCourses = courses.filter(course => course.price === 0);
        const cards = freeCourses.map(course => nunjucks.renderString(template, course)).join("\n");
        const rendered = nunjucks.renderString(mainFile, {content: cards});
        res.end(rendered);
    }else if(pathname === "/courses"){
        const courseId = parseInt(query.id);
        const course = courses.find(c => c.id === courseId);
        res.writeHead(200, {"content-type" : "text/html"});
        const cardContent = nunjucks.renderString(openTemplate, course);
        const rendered = nunjucks.renderString(mainFile, {content: cardContent});
        res.end(rendered);
    }else{
        res.writeHead(404, {"content-type" : "text/html"});
        res.end(errorFile);
    }
})

server.listen(8000,"127.0.0.1",()=>{
    console.log("Server is running on port 8000");
})