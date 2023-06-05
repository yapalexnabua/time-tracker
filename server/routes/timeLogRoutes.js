import { Router } from "express";
import * as timeLogController from '../controllers/timeLogController.js';

const router = Router();

router.get('/', timeLogController.list);
router.post('/', timeLogController.create);

export default router;