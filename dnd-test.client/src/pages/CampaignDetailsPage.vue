<template>
  <div class="p-3">
    <div v-if="campaign" class="h00 elevated rounded" :style="{backgroundImage: `url(${campaign.coverImg})`}">
      <div class="text-light h00 glass">
        <section class="row justify-content-between">
          <div class="col-7 bg-dark p-2 text-center">
            <div class=" bg-secondary text-white">
              <h2> {{campaign.name}}</h2>
            </div>
          </div>
          <!-- NOTE Cant input Dm's Name because creator of campaign is not populated on campaign -->
          <!-- <div class="col-3 bg-dark p-2">
            <div class="bg-secondary p-1">
              {{campaign.}}
            </div>
          </div> -->
          <!-- ADD ENCOUNTER -->
          <div class="col-2">
            <button v-if="campaign.creatorId == account.id" class="btn btn-danger" type="button" data-bs-toggle="modal"
              data-bs-target="#CreateEncounterModal">
              Create Encounter
            </button>
          </div>
          <!-- BUTTONS - IDEAL
          LEAVE BUTTON
          <div>
            <button></button>
          </div>
          JOIN BUTTON
          <div class="col-2">
          <button></button>
          </div> -->
        </section>
        <section class="row">
          <div class="col-6">
            <img :src="campaign.coverImg" alt="" class="img-fluid">
            <div class="bg-dark p-2">
              <div class="bg-secondary p-1">
                <p>{{campaign.desc}}</p>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="bg-dark p-2">
              <div class="bg-secondary p-1">
                <h4 class="border-bottom border-3 border-danger text-danger">Completed Encounters</h4>
                <EncounterCard :encounter="completedEncounters" />
                <h4 class="border-bottom border-3 border-danger text-danger">Encounters</h4>
                <EncounterCard :encounter="uncompletedEncounters" />
              </div>
            </div>
          </div>
        </section>




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
import EncounterCard from "../components/EncounterCard.vue";
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
      account: computed(() => AppState.account),
      completedEncounters: computed(() => AppState.encounters.filter(e => e.isCompleted)),
      uncompletedEncounters: computed(() => AppState.encounters.filter(e => !e.isCompleted))
    };
  },
  components: { CreateEncounterModal, EncounterCard }
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
