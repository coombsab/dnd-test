<template>
  <router-link :to="{ name: 'CampaignDetails', params: { campaignId: campaign.id } }">
  <div class="rounded-3 theme-card my-4 elevation-3" :style="{ backgroundImage: `url(${campaign.coverImg})` }">
    <div class="muted-layer rounded-3 ">
        <i v-if="account.id == campaign.creatorId" class="mdi mdi-delete selectable rounded fs-6 delete-icon on-hover text-visible" @click.stop="removeCampaign(campaign.id)"></i>
        <div class="card-content d-flex flex-column flex-wrap justify-content-around text-center color-shift">
          <span class="pb-5 fs-4 text-visible">{{ campaign.name }}</span>
          <span class="flex-grow-1 mt-5 desc fs-6" :class="campaign.desc.length > 120 ? 'text-truncate' : ''">{{ campaign.desc }}</span>
          <span class="" v-if="campaign.desc.length > 120"><em>Truncated desc as it was too long (> 120 chars)</em></span>
        </div>
      </div>
    </div>
  </router-link>
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

<style lang="scss" scoped>
  .theme-card {
    background-size: cover;
    background-position: center;
    background-color: black;
    height: 30rem;
    width: 22rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 150ms linear;
    margin-right: 2rem;
    margin-left: 2rem;
  }
  
  .muted-layer {
    position: relative;
    background-color: rgba(0, 0, 0, 0.639);
    width: 100%;
    height: 100%;
  }

  .card-content {
    height: 100%;
    width: 100%;
    padding: 5rem;
  }
  
  .delete-icon{
    position: absolute;
    right: 2%;
    top: 2%;
  }

  .desc {
    max-width: 100%;
    
  }
  
  .color-shift {
    color: rgba(96, 190, 234, 0.505);
    text-shadow: none;
    
  }

  .color-shift:hover {
    color: rgb(96, 190, 234);
    text-shadow: 1px 1px rgba(0, 0, 0, 0.644), 0px 0px 5px rgba(189, 234, 30, 0.678);
  }

  .theme-card:hover {
    transform: scale(1.1);
  }
</style>
