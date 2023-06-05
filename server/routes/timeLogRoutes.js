import { Router } from "express";
import * as timeLogController from '../controllers/timeLogController.js';
import logTimeMiddleware from "../middleware/logTimeMiddleware.js";
import listTimeLogsMiddleware from "../middleware/listTimeLogsMiddleware.js";

const router = Router();

router.get('/', listTimeLogsMiddleware, timeLogController.list);
router.post('/', logTimeMiddleware, timeLogController.create);

export default router;