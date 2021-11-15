import express from "express";
import { see, edit, deleteVideo, upload } from "../controllers/videoController"

const videoRouter = express.Router();

// parameter ( : )
// this allows you have urls that have variables inside of them
// (\\d+) = 'digit', 숫자만.
// (nico\w+) = 'nico'가 포함이 된 모든 문자, 숫자만.
videoRouter.get("/:id(\\d+)", see);
videoRouter.get("/:id(\\d+)/edit", edit);
videoRouter.get("/:id(\\d+)/delete", deleteVideo);
videoRouter.get("/upload", upload);
 
export default videoRouter; 