import { AppState } from "../AppState.js";
import { Campaign } from "../models/Campaign.js";
import { router } from "../router.js";
import { baseApi } from "./AxiosService.js";

class CampaignsService {
  async getCampaigns() {
    const res = await baseApi.get("/api/campaigns");
    AppState.campaigns = res.data.map((p) => new Campaign(p));
  }
  async getCampaignById(id) {
    const res = await baseApi.get(`api/campaigns/${id}`);
    AppState.activeCampaign = new Campaign(res.data);
  }

  async addCampaign(CampaignData) {
    const res = await baseApi.post("/api/campaigns", CampaignData);
    const campaign = new Campaign(res.data);
    AppState.campaigns = [...AppState.campaigns, campaign];
    AppState.activeCampaign = campaign;
    console.log(AppState.activeCampaign);
    router.push({
      name: "CampaignDetails",
      params: { campaignId: campaign.id },
    });
  }

  async addCampaignEncounter() {
    // const res = await
  }

  async removeCampaign(campaignId) {
    const res = await baseApi.delete(`api/campaigns/${campaignId}`);
    AppState.campaigns = AppState.campaigns.filter((c) => c.id != campaignId);
  }
}

export const campaignsService = new CampaignsService();
