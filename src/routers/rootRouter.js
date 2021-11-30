import express from "express";
<<<<<<< HEAD
import { getJoin, postJoin , login } from "../controllers/userController";
=======
import {
	getJoin,
	postJoin,
	getLogin,
	postLogin,
} from "../controllers/userController";
>>>>>>> 1e994d6392108d866be69dd7405e8c258dd10e78
import { home, search } from "../controllers/videoController";

// All these files we are creating are known as modules, and they are isolated.
// Every Router is bubble.
const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.route("/join").get(getJoin).post(postJoin);
<<<<<<< HEAD
rootRouter.get("/login", login);
=======
rootRouter.route("/login").get(getLogin).post(postLogin);
>>>>>>> 1e994d6392108d866be69dd7405e8c258dd10e78
rootRouter.get("/search", search);

// default export
export default rootRouter;
