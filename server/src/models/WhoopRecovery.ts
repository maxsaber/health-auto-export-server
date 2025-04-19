import mongoose, { Document, Schema } from 'mongoose';

interface Score {
  user_calibrating: boolean;
  recovery_score: number;
  resting_heart_rate: number;
  hrv_rmssd_milli: number;
  spo2_percentage: number;
  skin_temp_celsius: number;
}

export interface WhoopRecoveryDocument extends Document {
  cycle_id: number;
  sleep_id: number;
  user_id: number;
  created_at: Date;
  updated_at: Date;
  score_state: 'SCORED' | 'NOT_SCORED';
  score: Score;
}

const ScoreSchema: Schema<Score> = new Schema({
  user_calibrating: { type: Boolean, required: true },
  recovery_score: { type: Number, required: true },
  resting_heart_rate: { type: Number, required: true },
  hrv_rmssd_milli: { type: Number, required: true },
  spo2_percentage: { type: Number, required: true },
  skin_temp_celsius: { type: Number, required: true },
});

const WhoopRecoverySchema: Schema<WhoopRecoveryDocument> = new Schema({
  cycle_id: { type: Number, required: true },
  sleep_id: { type: Number, required: true },
  user_id: { type: Number, required: true },
  created_at: { type: Date, required: true },
  updated_at: { type: Date, required: true },
  score_state: {
    type: String,
    enum: ['SCORED', 'NOT_SCORED'],
    required: true,
  },
  score: { type: ScoreSchema, required: true },
});

export default mongoose.model<WhoopRecoveryDocument>('WhoopRecovery', WhoopRecoverySchema);
