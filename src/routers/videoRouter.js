import express from "express";
import {
	watch,
	getEdit,
	postEdit,
	getUpload,
	postUpload,
	deleteVideo,
} from "../controllers/videoController";

const videoRouter = express.Router();

// parameter ( : )
// this allows you have urls that have variables inside of them
// (\\d+) = 'digit', 숫자만.
// (nico\w+) = 'nico'가 포함이 된 모든 문자, 숫자만.
// [0-9a-f]{24} => 모든 글자
videoRouter.get("/:id([0-9a-f]{24})", watch);
videoRouter.route("/:id([0-9a-f]{24})/edit").get(getEdit).post(postEdit);
videoRouter.route("/:id([0-9a-f]{24})/delete").get(deleteVideo);
videoRouter.route("/upload").get(getUpload).post(postUpload);

export default videoRouter;
