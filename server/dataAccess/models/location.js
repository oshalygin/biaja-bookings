/* eslint-disable no-underscore-dangle */
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const locationSchema = new Schema({
  city: {
    type: String,
    required: false,
  },
  state: {
    type: String,
    required: false,
  },
  country: {
    type: String,
    required: true,
  },
  level: {
    type: Number,
    get: value => Math.round(value),
    set: value => Math.round(value),
    required: false,
    default: 0,
  },
  createdDate: {
    type: Number,
    get: value => Math.round(value),
    set: value => Math.round(value),
    required: true,
  },
});

locationSchema.set('toJSON', {
  transform(doc, ret) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  },
});

export default mongoose.model('Location', locationSchema);
