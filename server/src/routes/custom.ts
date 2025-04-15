import express from 'express';

import { getCustomMetrics } from '../controllers/custom';

const router = express.Router();

router.get('/:selected_metric', getCustomMetrics);

export default router;
