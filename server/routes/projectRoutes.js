import { Router } from "express";
import * as projectController from '../controllers/projectController.js';

const router = Router();

router.get('/', projectController.list);

export default router;