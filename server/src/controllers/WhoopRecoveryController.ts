import { Request, Response } from 'express';

import WhoopRecovery from '../models/WhoopRecovery';

export const getAllRecoveries = async (_req: Request, res: Response): Promise<void> => {
  try {
    const recoveries = await WhoopRecovery.find().sort({ created_at: -1 });
    res.status(200).json(recoveries);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};

export const getRecoveriesByUserId = async (req: Request, res: Response): Promise<void> => {
  try {
    const { user_id } = req.params;
    const recoveries = await WhoopRecovery.find({ user_id }).sort({ created_at: -1 });
    res.status(200).json(recoveries);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};
