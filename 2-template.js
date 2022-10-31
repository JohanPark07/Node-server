const http = require("http");
const fs = require("fs");
const ejs = require("ejs");

// console.log(http.STATUS_CODES);
// console.log(http.METHODS);

const name = "Ellie";
const courses = [
  { name: "HTML" },
  { name: "CSS" },
  { name: "JS" },
  { name: "Node" },
  { name: "Frontend" },
];
const server = http.createServer((req, res) => {
  console.log("incoming....");
  const url = req.url;
  res.setHeader("Content-Type", "text/html");
  if (url === "/") {
    ejs
      .renderFile("./template/index.ejs", { name: name })
      .then((data) => res.end(data));
  } else if (url === "/courses") {
    ejs
      .renderFile("./template/courses.ejs", { courses: courses })
      .then((data) => res.end(data));
  } else {
    ejs
      .renderFile("./template/not-found.ejs", { name: name })
      .then((data) => res.end(data));
  }
});

server.listen(8080);
