import { AppState } from "../AppState"
import { Monster } from "../models/Monster"
import { ShortMonster } from "../models/ShortMonster"
import { logger } from "../utils/Logger"
import { dndApi } from "./AxiosService"

class MonstersService {
  async getApiMonsters(params = "") {
    const res = await dndApi.get("api/monsters", params)
    logger.log(res.data)
    AppState.monsters = res.data.results.map(data => new ShortMonster(data))
  }

  async setActiveMonster(monsterUrl) {
    AppState.activeMonster = null
    const res = await dndApi.get(monsterUrl)
    AppState.activeMonster = new Monster(res.data)
  }
  async getApiMonsterByIndex(monsterIndex) {

  }

  async getMonsters(params) {

  }
  async getMonstersByEncounterId(encounterId) {

  }
  async addMonster(monsterData) {

  }
}

export const monstersService = new MonstersService()