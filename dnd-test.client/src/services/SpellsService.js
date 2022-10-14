import { AppState } from "../AppState.js"
import { dndApi } from "./AxiosService.js"

class SpellsService {
  async getSpells(params) {
    AppState.spells = []
    const res = await dndApi.get("api/spells", {params})
    AppState.spells = res.data.results
  }

  async getSpellByURL(url) {
    AppState.activeSpell = null
    const res = await dndApi.get(url)
    AppState.activeSpell = res.data
  }

  setIcons() {
    const fallbackIcon = "https://cdn-icons-png.flaticon.com/512/1669/1669398.png"
    AppState.spells.forEach(spell => {
      let icon = AppState.spellIcons.filter(icon => icon[0] === spell.index)
      if (icon.length > 0) {
        spell.icon = icon[0][1]
      } else {
        spell.icon = null
      }
    })
  }
}

export const spellsService = new SpellsService()