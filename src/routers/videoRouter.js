import express from "express";
import { watch, getEdit, postEdit } from "../controllers/videoController";

const videoRouter = express.Router();

// parameter ( : )
// this allows you have urls that have variables inside of them
// (\\d+) = 'digit', 숫자만.
// (nico\w+) = 'nico'가 포함이 된 모든 문자, 숫자만.
videoRouter.get("/:id(\\d+)", watch);
videoRouter.get("/:id(\\d+)/edit", getEdit);
videoRouter.post("/:id(\\d+)/edit", postEdit);

export default videoRouter;
