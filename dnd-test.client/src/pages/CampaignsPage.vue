<template>
  <div class="campaigns-page text-danger">
    <!-- ADD CAMPAIGN BUTTON -->
    <button class="btn btn-danger" type="button" data-bs-toggle="modal" data-bs-target="#campaignModal">
      Create Campaign
    </button>
    <!-- MY CAMPAIGNS -->
    <div class="border-bottom border-3 border-danger my-3 mb-4">
      <h3>My Campaigns</h3>
    </div>
    <CampaignCard v-for="c in userCampaigns" :key="c.id" :campaign="c" />
    <!-- ALL CAMPAIGNS -->
    <div class="border-bottom border-3 border-danger my-3">
      <h3>All Campaigns</h3>
    </div>
    <CampaignCard v-for="c in campaigns" :key="c.id" :campaign="c" />
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
              <div>
                <label for="name">Name:</label>
                <input type="text" class="form-control" v-model="editable.name" required name="name" />
              </div>
              <div>
                <label for="coverImg">Cover Image:</label>
                <input type="url" class="form-control" v-model="editable.coverImg" required name="coverImg"
                  placeholder="coverImg" />
              </div>
              <div>
                <label for="description">Description:</label>
                <textarea type="text" class="form-control" v-model="editable.desc" name="description" rows="8"
                  style="resize: none"></textarea>
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

</style>
