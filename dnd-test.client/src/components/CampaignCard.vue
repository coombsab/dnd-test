<template>
  <div class="campaign-card my-2">
    <div class="card">
      <div class="card-header d-flex justify-content-between">
        <span>{{ campaign.name }}</span
        ><i
          v-if="account.id == campaign.creatorId"
          class="mdi mdi-delete mx-3 selectable rounded fs-4"
          @click.stop="removeCampaign(campaign.id)"
        ></i>
      </div>
      <router-link
        :to="{ name: 'CampaignDetails', params: { campaignId: campaign.id } }"
        class="selectable"
      >
        <div class="card-body">{{ campaign.desc }}</div>
        <div class="card-footer"></div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState.js";
import { Campaign } from "../models/Campaign.js";
import { campaignsService } from "../services/CampaignsService.js";
import Pop from "../utils/Pop.js";

export default {
  props: {
    campaign: { type: Campaign, required: true },
  },
  setup() {
    return {
      account: computed(() => AppState.account),
      async removeCampaign(id) {
        try {
          const yes = await Pop.confirm(
            "Are you sure you want to delete this Campaign?"
          );
          if (!yes) {
            return;
          }
          const campaign = AppState.campaigns.find(
            (c) => c.creatorId == AppState.account.id
          );
          await campaignsService.removeCampaign(id);
          Pop.success("You deleted your Campaign");
        } catch (error) {
          Pop.error(error);
        }
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
