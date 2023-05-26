import { Schema, model } from 'mongoose';

const trainSchema = Schema({
  number: {
    type: Number,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  days: {
    type: [String],
    required: true,
  },
  departure: {
    type: String,
    required: true,
  },
  arrival: {
    type: String,
    required: true,
  },
});

const Train = model('train', trainSchema);

export default Train;
