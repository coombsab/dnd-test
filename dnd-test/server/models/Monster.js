import { Schema } from 'mongoose'
import { OBJECT_ID, SCHEMA_OPTIONS } from "../db/DbUtils"

export const MonsterSchema = new Schema({
  index: { type: String, required: true },
  creatorId: { type: OBJECT_ID, required: true },
  encounterId: { type: OBJECT_ID, required: true },
  name: { type: String, required: true },
  type: { type: String, required: true },
  size: { type: String, required: true },
  alignment: { type: String },
  
  //EDITABLE FIELDS
  hit_points: { type: Number, required: true },
  nickName: { type: String, maxlength: 50, minlength: 1 },
  desc: { type: String, maxlength: 500 },
  image: { type: String },
  icon: { type: String, required: true },
  initiative: { type: Number, min: 1 },

}, SCHEMA_OPTIONS)

MonsterSchema.virtual("encounter", {
  localField: "encounterId",
  foreignField: "_id",
  justOne: true,
  ref: "Encounter"
})