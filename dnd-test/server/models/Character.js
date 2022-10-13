import { Schema } from "mongoose";
import { OBJECT_ID, SCHEMA_OPTIONS } from "../db/DbUtils";

export const CharacterSchema = new Schema({
  name: { type: String, required: true, maxlength: 50 },
  desc: { type: String, required: true, maxlength: 500 },
  race: { type: String, required: true, enum: ["elf", "dwarf", "human"]},
  class: { type: String, required: true, enum: ["wizard", "fighter", "thief", "cleric"]},
  creatorId: { type: OBJECT_ID, required: true },
  campaignId: { type: OBJECT_ID }

}, SCHEMA_OPTIONS)

CharacterSchema.virtual("creator", {
  localField: "creatorId",
  foreignField: "_id",
  justOne: true,
  ref: "Account"
})

CharacterSchema.virtual("campaign", {
  localField: "campaignId",
  foreignField: "_id",
  justOne: true,
  ref: "Campaign"
})