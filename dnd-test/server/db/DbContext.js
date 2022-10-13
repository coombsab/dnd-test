import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { CharacterSchema } from "../models/Character";
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Characters = mongoose.model("Character", CharacterSchema)
}

export const dbContext = new DbContext()
