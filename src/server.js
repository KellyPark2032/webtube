import express from "express";
import morgan from "morgan";
import session from "express-session";
import MongoStore from "connect-mongo";
import rootRouter from "./routers/rootRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";
import { localsMiddleware } from "./middlewares";
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

// make middleware from module named 'express-session'
// this middleware named 'session' post 'cookie'
// http => stateless, so we can use cookie or session ID
// session data is not saved in the cookie itself, jsut the session ID.
// session data is stored server-side.
app.use(
	session({
		secret: process.env.COOKIE_SECRET, // secret: string that uses when sign in cookies.
		resave: false,
		saveUninitialized: false,
		store: MongoStore.create({ mongoUrl: process.env.DB_URL }),
	})
);

// configure our application about how to "get" request
// GET = one of the HTTP METHOD
app.use(localsMiddleware);
app.use("/", rootRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

export default app;
