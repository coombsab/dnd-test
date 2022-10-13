import { Auth0Provider } from "@bcwdev/auth0provider";
import { monstersService } from "../services/MonstersService.js";
import BaseController from "../utils/BaseController.js";

export class MonstersController extends BaseController {
  constructor() {
    super('api/monsters'),
      this.router
        .use(Auth0Provider.getAuthorizedUserInfo)
        .post('', this.addMonster)
        .put('/:monsterId', this.editMonster)
        .delete('/:monsterId', this.deleteMonster)
  }
  async deleteMonster(req, res, next) {
    try {
      const monster = await monstersService.deleteMonster(req.params.monsterId, req.userInfo.id)
      res.send(monster)
    } catch (error) {
      next(error)
    }
  }
  async editMonster(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      req.body.id = req.params.monsterId
      const monster = await monstersService.editMonster(req.body)
      res.send(monster)
    } catch (error) {
      next(error)
    }
  }

  async addMonster(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const monster = await monstersService.addMonster(req.body)
      res.send(monster)
    } catch (error) {
      next(error)
    }
  }







}