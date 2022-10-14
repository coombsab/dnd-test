<template>
  <div class="component">
  </div>
  <div class="modal fade" id="CreateEncounterModal" tabindex="-1" aria-labelledby="CreateEncounterModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="CreateEncounterModalLabel">New Encounter</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form action="submit" class="card" @submit.prevent="addEncounter()">
            <div class="card-body text-start">
              <div>
                <label for="name">Name:</label>
                <input type="text" class="form-control" v-model="editable.name" required name="name" />
              </div>
              <div>
                <label for="coverImg">Cover Image:</label>
                <input type="url" class="form-control" v-model="editable.coverImg" name="coverImg" />
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
                Create An Ecounter!
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { encountersService } from '../services/EncountersService.js';
import Pop from '../utils/Pop.js';

export default {
  setup() {
    const route = useRoute()
    let editable = ref({})
    return {
      editable,
      async addEncounter() {
        try {
          let encounter = editable.value
          encounter.campaignId = route.params.campaignId
          await encountersService.addEncounterToCampaign(encounter)
          editable.value = {}
        } catch (error) {
          Pop.error(error)
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>

</style>