import express from "express";
import { join, login } from "../controllers/userController";
import { trending } from "../controllers/videoController";

// All these files we are creating are known as modules, and they are isolated.
// Every Router is bubble.
const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.get("/join", join);
globalRouter.get("/login", login);

// default export
export default globalRouter;
