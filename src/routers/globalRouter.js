import express from "express";
import { join, login } from "../controllers/userController"
import { trending, search } from "../controllers/videoController"

// All these files we are creating are known as modules, and they are isolated.
// Every Router is bubble.
const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);

// default export
export default globalRouter;