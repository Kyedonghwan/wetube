import express from "express";
const app = express();

const PORT = 4000;

const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("Hello from home");

const handleProfile = (req, res) => res.send("You are on my profile");

const betweenHome = (req, res, next) => {
  console.log("Between");
  next();
};
app.use(betweenHome);

app.get("/", handleHome);
//betweenHome은 middleware로써 home과 handleHome사이에 존재.

app.get("/profile", handleProfile);
// respond with "hello world" when a GET request is made to the homepage
app.listen(PORT, handleListening);
