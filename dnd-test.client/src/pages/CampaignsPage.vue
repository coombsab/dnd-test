<template>
  <div class="campaigns-page text-visible p-4">
    <!-- ADD CAMPAIGN BUTTON -->
    <button class="btn text-visible create-button" type="button" data-bs-toggle="modal" data-bs-target="#campaignModal">
      Create Campaign
    </button>
    <!-- MY CAMPAIGNS -->
    <div class="border-bottom border-3 border-color my-3 mb-4" v-if="userCampaigns.length > 0">
      <h3>My Campaigns</h3>
    </div>
    <div class="d-flex flex-wrap justify-content-around">
      <CampaignCard v-for="c in userCampaigns" :key="c.id" :campaign="c" />
    </div>
    <!-- ALL CAMPAIGNS -->
    <div class="border-bottom border-3 border-color my-3">
      <h3>All Campaigns</h3>
    </div>
    <div class="d-flex flex-wrap justify-content-around">
      <CampaignCard v-for="c in campaigns" :key="c.id" :campaign="c" />
    </div>
  </div>
  <!-- MODAL close this if its driving you crazy -->
  <div class="modal fade" id="campaignModal" tabindex="-1" aria-labelledby="campaignModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="campaignModalLabel">New Campaign</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form action="submit" class="card" @submit.prevent="addCampaign()">
            <div class="card-body text-start">
              <div class="form-floating mb-3">
                <input type="text" class="form-control" v-model="editable.name" required name="name" placeholder="Name:" maxlength="50"/>
                <label for="name">Name:</label>
              </div>
              <div class="form-floating mb-3">
                <input type="url" class="form-control" v-model="editable.coverImg" required name="coverImg" placeholder="coverImg" maxlength="10000"/>
                <label for="coverImg">Cover Image:</label>
              </div>
              <div class="form-floating">
                <textarea class="form-control textarea-height" v-model="editable.desc" name="description" style="resize: none" placeholder="Descripotion:" maxlength="500"></textarea>
                <label for="description">Description:</label>
              </div>
              <div class="text-end">
                <span>{{editable.desc ? editable.desc.length : 0}}</span>
                <span>/ 500</span>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">
                Start Your Adventure!
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, watchEffect, ref } from "vue";
import { AppState } from "../AppState.js";
import { campaignsService } from "../services/CampaignsService.js";
import Pop from "../utils/Pop.js";
import CampaignCard from "../components/CampaignCard.vue";
import { AuthService } from "../services/AuthService.js";

export default {
  setup() {
    let editable = ref({});
    onMounted(() => {
      getCampaigns();
    });
    watchEffect(() => {
      getCampaigns();
      // editable.value = { ...AppState.campaigns }
    });
    async function getCampaigns() {
      try {
        await campaignsService.getCampaigns();
      } catch (error) {
        Pop.error(error, "[getCampaigns]");
      }
    }
    return {
      editable,
      campaigns: computed(() =>
        AppState.campaigns.filter((c) => c.creatorId != AppState.account.id)
      ),
      userCampaigns: computed(() =>
        AppState.campaigns.filter((c) => c.creatorId == AppState.account.id)
      ),

      async addCampaign() {
        if (!AppState.account.id) {
          return AuthService.loginWithPopup();
        }
        try {
          await campaignsService.addCampaign(editable.value);
          editable.value = {};
        } catch {
          Pop.error([addCampaign]);
        }
      },
    };
  },
  components: { CampaignCard },
};
</script>

<style lang="scss" scoped>
  .border-color {
    border-color: rgb(96, 190, 234) !important;
  }

  .textarea-height {
    height: 10.8rem;
  }

  .campaigns-page {
    position: relative;
  }

  .create-button {
    position: absolute;
    right: 1.5rem;
    top: 2rem;
    // border-color: rgb(96, 190, 234);
    background-color: rgba(0, 0, 0, 0.639);
  }

  .create-button:hover {
    background-color: rgba(0, 0, 0, 0.804);
  }
</style>
