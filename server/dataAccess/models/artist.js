/* eslint-disable no-underscore-dangle */
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const artistSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  level: {
    type: Number,
    get: value => Math.round(value),
    set: value => Math.round(value),
    required: true,
  },
  createdDate: {
    type: Date,
    required: true,
  },
});

artistSchema.set('toJSON', {
  transform(doc, ret) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  },
});

export default mongoose.model('Artist', artistSchema);
