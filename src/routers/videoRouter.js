import express from "express";
import {
  getEditVideo,
  postEditVideo,
  getUpload,
  postUpload,
  deleteVideo,
  videoDetail,
} from "../controllers/videoController";
import { uploadVideo, onlyPrivate } from "../middlewares";
import routes from "../routes";

const videoRouter = express.Router();

// Upload
videoRouter.get(routes.upload, onlyPrivate, getUpload);
videoRouter.post(routes.upload, onlyPrivate, uploadVideo, postUpload);

// video detail
videoRouter.get(routes.videoDetail(), videoDetail);

// edit
videoRouter.get(routes.editVideo(), onlyPrivate, getEditVideo);
videoRouter.post(routes.editVideo(), onlyPrivate, postEditVideo);

// delete
videoRouter.get(routes.deleteVideo(), deleteVideo);

export default videoRouter;
