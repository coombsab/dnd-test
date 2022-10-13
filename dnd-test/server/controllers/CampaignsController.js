import { Auth0Provider } from "@bcwdev/auth0provider";
import { campaignsService } from "../services/CampaignsService.js";
import { encountersService } from "../services/EncountersService.js";
import BaseController from "../utils/BaseController.js";

export class CampaignsController extends BaseController {
  constructor() {
    super("api/campaigns");
    this.router
      .get("", this.getCampaigns)
      .get("/:campaignId", this.getCampaignByCampaignId)
      .get("/:campaignId/encounters", this.getEncountersByCampaignId)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post("", this.addCampaign)
      .delete("/:campaignId", this.deleteCampaign)
      .put("/:campaignId", this.editCampaign);
  }
  async getCampaignByCampaignId(rq, rs, nx) {
    try {
      const campaign = await campaignsService.getCampaignById(rq.params.campaignId)
      rs.send(campaign)
    } catch (error) {
      nx(error)
    }
  }

  async getCampaigns(req, res, next) {
    try {
      const campaigns = await campaignsService.getCampaigns(req.query);
      res.send(campaigns);
    } catch (error) {
      next(error);
    }
  }
  async getEncountersByCampaignId(req, res, next) {
    try {
      const encounters = await encountersService.getEncountersByCampaignId(req.params.campaignId);
      res.send(encounters);
    } catch (error) {
      next(error);
    }
  }
  async addCampaign(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id;
      const campaign = await campaignsService.addCampaign(req.body);
      res.send(campaign);
    } catch (error) {
      next(error);
    }
  }

  async editCampaign(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id;
      req.body.id = req.params.campaignId;
      const campaign = await campaignsService.editCampaign(req.body);
      res.send(campaign);
    } catch (error) {
      next(error);
    }
  }

  async deleteCampaign(req, res, next) {
    try {
      const campaign = await campaignsService.deleteCampaign(
        req.params.campaignId,
        req.userInfo.id
      );
      res.send(campaign);
    } catch (error) {
      next(error);
    }
  }

  //TODO - This is a future goal
  // async getCharactersByCampaignId() {

  // }
}
