import { dbContext } from "../db/DbContext"

class CharactersService {
  async getCharacters() {
    const characters = await dbContext.Characters.find().populate("creator", "name picture").populate("campaign")
    return characters
  }
  async getCharactersByCreatorId(creatorId) {
    const characters = await dbContext.Characters.find({ creatorId }).populate("creator", "name picture").populate("campaign")
    return characters
  }
  async createCharacter(characterData) {
    const character = await dbContext.Characters.create(characterData)
    character.populate("creator", "name picture")
    character.populate("campaign")
    return character
  }
}

export const charactersService = new CharactersService()