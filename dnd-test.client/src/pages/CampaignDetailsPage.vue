<template>
  <div class="p-3">
    <div v-if="campaign" class="h00 elevated rounded" :style="{backgroundImage: `url(${campaign.coverImg})`}">
      <div class="text-light h00 glass">
        <section class="row">
          <div class="col-7"></div>
          <div class="col-3"></div>
          <!-- ADD ENCOUNTER -->
          <div class="col-2">
            <button v-if="campaign.creatorId == account.id" class="btn btn-danger" type="button" data-bs-toggle="modal"
              data-bs-target="#CreateEncounterModal">
              Create Encounter
            </button>
          </div>
          <!-- LEAVE BUTTON -->
          <!-- <button></button> -->
          <!-- JOIN BUTTON -->
          <div class="col-2">
            <!-- <button></button> -->
          </div>

        </section>
        <section class="row"></section>




      </div>
    </div>
  </div>

  <!-- MODAL COMPONENT -->
  <CreateEncounterModal />
</template>

<script>
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { AppState } from "../AppState.js";
import { campaignsService } from "../services/CampaignsService.js";
import Pop from "../utils/Pop.js";
import CreateEncounterModal from "../components/CreateEncounterModal.vue";
export default {
  setup() {
    const route = useRoute();
    async function getCampaignById() {
      try {
        await campaignsService.getCampaignById(route.params.campaignId);
      }
      catch (error) {
        Pop.error(error);
      }
    }
    onMounted(() => {
      getCampaignById();
    });
    return {
      campaign: computed(() => AppState.activeCampaign),
      account: computed(() => AppState.account)
    };
  },
  components: { CreateEncounterModal }
};
</script>

<style lang="scss" scoped>
.h00 {
  height: 96vh;
  background-size: cover;
  background-position: center;
}

.glass {
  background-color: rgba(38, 37, 37, 0.397);
}
</style>
