import express from 'express';

import { getAllRecoveries, getRecoveriesByUserId } from '../controllers/WhoopRecoveryController';

const router = express.Router();

router.get('/whoop/recovery', getAllRecoveries);

router.get('/whoop/recovery/user/:user_id', getRecoveriesByUserId);

export default router;
