// @ts-ignore
import mongoose from 'mongoose'
import { OBJECT_ID } from "../db/DbUtils.js"
const Schema = mongoose.Schema

export const CampEncounterSchema = new Schema({
  campaignId: { type: OBJECT_ID, required: true },
  encounterId: { type: OBJECT_ID, required: true },





}
)
// TODO add virtuals for Campaign and encounter