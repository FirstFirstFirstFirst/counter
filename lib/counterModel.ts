// lib/counterModel.ts
import mongoose, { Schema, Document } from "mongoose";

interface ICounter extends Document {
  count: number;
}

const CounterSchema: Schema = new mongoose.Schema({
  count: {
    type: Number,
    required: true,
    default: 0,
  },
});

export default mongoose.models.Counter ||
  mongoose.model<ICounter>("Counter", CounterSchema);
