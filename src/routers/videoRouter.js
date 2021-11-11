import express from "express";

const videoRouter = express.Router();

videoRouter.get("/watch", handleWatch);
videoRouter.get("/edit", handleEdit);

export default videoRouter;