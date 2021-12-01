import express from "express";
import {
	getJoin,
	postJoin,
	getLogin,
	postLogin,
} from "../controllers/userController";
import { home, search } from "../controllers/videoController";

// All these files we are creating are known as modules, and they are isolated.
// Every Router is bubble.
const rootRouter = express.Router();

// route handler has two objects => req, res (+ next)
// handler = controller, and all controllers have middleware.
rootRouter.get("/", home);
rootRouter.route("/join").get(getJoin).post(postJoin);
rootRouter.route("/login").get(getLogin).post(postLogin);
rootRouter.get("/search", search);

// default export
export default rootRouter;
