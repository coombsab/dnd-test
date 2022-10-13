// @ts-ignore
import mongoose from "mongoose";
import { OBJECT_ID, SCHEMA_OPTIONS } from "../db/DbUtils.js";
const Schema = mongoose.Schema;

export const CampaignSchema = new Schema(
  {
    name: { type: String, required: true, maxlength: 50 },
    creatorId: { type: OBJECT_ID, required: true },
    desc: { type: String, required: true, maxlength: 1000 },
    coverImg: { type: String, maxlength: 10000 },
  },
  SCHEMA_OPTIONS
);

CampaignSchema.virtual("creator", {
  localField: "creatorId",
  foreignField: "_id",
  justOne: true,
  ref: "Account",
});
