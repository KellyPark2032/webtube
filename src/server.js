import express from "express";
import morgan from "morgan";
import session from "express-session";
import rootRouter from "./routers/rootRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
// find Current Working Directory
// Current Working Directory is that starting Node.js
// console.log(process.cwd())

// create express application called "app"
const app = express();

// setting express to use view engine
// when send file to pug, pug change this file to HTML

// Middleware doesn't respond to the request.
// we will use morgan.
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

app.use(logger);

// express application understand and transform the form's value into javascript
app.use(express.urlencoded({ extended: true }));

app.use(
	session({
		secret: "Hello!",
		resave: true,
		saveUninitialized: true,
	})
);

app.use((req, res, next) => {
	req.sessionStore.all((error, sessions) => {
		console.log(sessions);
		next();
	});
});

app.get("/add-one", (req, res, next) => {
	req.session.potato += 1;
	return res.send(`${req.session.id} ${req.session.potato}`);
});

// configure our application about how to "get" request
// GET = one of the HTTP METHOD
app.use("/", rootRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);
// app.get("/", home);
// app.get("/login", login);

// route handler has two objects => req, res (+ next)
// handler = controller, and all controllers have middleware.
const home = (req, res) => {
	console.log("I will respond.");
	res.send("hello");
};
const login = (req, res) => {
	return res.send("login");
};

export default app;
