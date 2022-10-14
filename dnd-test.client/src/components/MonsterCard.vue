<template>
  <div class="monster-card p-3 rounded elevation-2 text-light selectable" title="See Monster Details" data-bs-toggle="modal"
    data-bs-target="#monsterModal" @click="setActiveMonster()">
    <span>{{monster.name}}</span>
  </div>

  <div class="modal fade" id="monsterModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">{{activeMonster?.name}}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body" v-if="activeMonster">
          <img :src="activeMonster?.image" class="img-fluid pb-2 rounded">
          <div class="d-flex flex-wrap justify-content-around mb-3">
            <div>
              <h6 class="statistics">Type</h6>
              <p>{{activeMonster.type}}</p>
            </div>
            <div>
              <h6 class="statistics">Size</h6>
              <p>{{activeMonster.size}}</p>
            </div>
            <div>
              <h6 class="statistics">Alignment</h6>
              <p>{{activeMonster.alignment}}</p>
            </div>
            <div>
              <h6 class="statistics">Health</h6>
              <p>{{activeMonster.hit_points}}</p>
            </div>
          </div>
          <p>{{activeMonster.desc}}</p>

        </div>
        <div class="modal-body" v-else>
          <p>Sorry, there is no monster data available :(</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>




<script>
import { computed } from '@vue/reactivity';
import { AppState } from '../AppState';
import { monstersService } from '../services/MonstersService';
import { logger } from '../utils/Logger';
import Pop from '../utils/Pop';


export default {
  props: {
    monster: { type: Object, required: true }
  },
  setup(props) {
    return {
      activeMonster: computed(() => AppState.activeMonster),

      async setActiveMonster() {
        try {
          console.log(props.monster)
          await monstersService.setActiveMonster(props.monster.url)
        } catch (error) {
          Pop.error(error)
          logger.log(error)
        }
      }
    };
  },
};
</script>

<style lang="scss" scoped>
.monster-card {
  background-color: green;
  height: fit-content;
  margin-top: 2rem;
}

p {
  margin: 0;
}

.statistics {
  border-bottom: 1px solid gray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
