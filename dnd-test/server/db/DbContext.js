

import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { CampaignSchema } from "../models/Campaign.js";
import { CampEncounterSchema } from "../models/CampaignEncounterSchema.js";
import { CharacterSchema } from "../models/Character";
import { EncounterSchema } from "../models/Encounter.js";
import { MonsterSchema } from "../models/Monster.js";
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Monsters = mongoose.model('Monster', MonsterSchema)

  Encounters = mongoose.model('Encounter', EncounterSchema)

  Campaigns = mongoose.model('Campaign', CampaignSchema)

  CampaignEncounter = mongoose.model('CampaignEncounter', CampEncounterSchema)

  Characters = mongoose.model("Character", CharacterSchema)
}

export const dbContext = new DbContext()
