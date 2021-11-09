import express from "express";
import morgan from "morgan";

const PORT = 4000;

// create express application called "app"
const app = express();

// Middleware doesn't respond to the request.
// we will use morgan.
const logger = morgan("dev");


// route handler has two objects => req, res (+ next)
// handler = controller, and all controllers have middleware.
const home = (req, res) => {
    console.log("I will respond.")
    res.send("hello");
}
const login = (req, res) => {
    return res.send("login");
}

// configure our application about how to "get" request
// GET = one of the HTTP METHOD
app.use(logger);
app.get("/", home);
app.get("/login", login);

const handleListening = () => 
    console.log(`✅ Server listening on port ${PORT}`);

// we have to make listen application
app.listen(PORT, handleListening); 