import express from "express";
import { watch, getEdit, postEdit } from "../controllers/videoController";

const videoRouter = express.Router();

// parameter ( : )
// this allows you have urls that have variables inside of them
// (\\d+) = 'digit', 숫자만.
// (nico\w+) = 'nico'가 포함이 된 모든 문자, 숫자만.
videoRouter.get("/:id(\\d+)", watch);
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);

export default videoRouter;
