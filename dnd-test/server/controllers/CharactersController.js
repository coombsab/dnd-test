import { Auth0Provider } from "@bcwdev/auth0provider";
import { charactersService } from "../services/CharactersService";
import BaseController from "../utils/BaseController";

export class CharactersController extends BaseController {
  constructor() {
    super("api/characters")
    this.router
      .get("", this.getCharacters)
      .get("", this.getCharactersByCreatorId)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post("", this.createCharacter)
  }

  async getCharacters(req, res, next) {
    const characters = await charactersService.getCharacters()
    res.send(characters)
  }

  async getCharactersByCreatorId(req, res, next) {
    try {
      const characters = await charactersService.getCharactersByCreatorId(req.userInfo.id)
      res.send(characters)
    }
    catch(error) {
      next(error)
    }
  }

  async createCharacter(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const character = await charactersService.createCharacter(req.body)
      res.send(character)
    }
    catch(error) {
      next(error)
    }
  }
}