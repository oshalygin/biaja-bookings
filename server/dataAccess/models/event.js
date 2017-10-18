/* eslint-disable no-underscore-dangle */
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const venueSchema = new Schema({
  artist: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: false,
  },
  dateMillis: {
    type: Number,
    get: value => Math.round(value),
    set: value => Math.round(value),
    required: false,
  },
  venue: {
    type: String,
    required: false,
  },
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
  website: {
    type: String,
    required: false,
  },
  contactEmails: {
    type: String,
    required: false,
  },
  price: {
    type: String,
    required: false,
  },
  phone: {
    type: String,
    required: false,
  },
  eventType: {
    type: String,
    required: true,
  },
  createdDate: {
    type: Number,
    get: value => Math.round(value),
    set: value => Math.round(value),
    required: true,
  },
});

venueSchema.set('toJSON', {
  transform(doc, ret) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  },
});

export default mongoose.model('Venue', venueSchema);
