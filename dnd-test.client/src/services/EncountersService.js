import { AppState } from "../AppState.js"
import { Encounter } from "../models/Encounter.js"
import { baseApi } from "./AxiosService.js"

class EncountersService {
  async getEncounters(params) {

  }

  async getEncountersByCampaignId(campaignId) {

  }

  async addEncounterToCampaign(encounterData) {
    const res = await baseApi.post("/api/encounters", encounterData)
    const encounter = new Encounter(res.data)
    AppState.encounters = [...AppState.encounters, encounter]
    console.log(AppState.encounters);
  }
}

export const encountersService = new EncountersService()