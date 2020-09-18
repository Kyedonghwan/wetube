import express from "express";
import {
  getEditVideo,
  postEditVideo,
  getUpload,
  postUpload,
  deleteVideo,
  videoDetail,
} from "../controllers/videoController";
import { uploadVideo } from "../middlewares";
import routes from "../routes";

const videoRouter = express.Router();

// Upload
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

// video detail
videoRouter.get(routes.videoDetail(), videoDetail);

// edit
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

// delete
videoRouter.get(routes.deleteVideo(), deleteVideo);

export default videoRouter;
