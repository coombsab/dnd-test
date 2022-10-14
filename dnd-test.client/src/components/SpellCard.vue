<template>
  <div class="card spellcard text-visible d-flex flex-row align-items-center gap-2 selectable elevation-3"  @click="setActiveSpell()" data-bs-toggle="modal" data-bs-target="#spellModal">
    <!-- <img :src="spell.icon[1]" v-if="spell.icon[1]">
    <img src="https://cdn-icons-png.flaticon.com/512/1669/1669398.png" alt="" v-else> -->
    <img :src="spell.icon" alt="" v-if="spell.icon">
    <i class="mdi mdi-auto-fix" v-else></i>
    <span>{{spell.name}}</span>
  </div>

  <div class="modal fade" id="spellModal" tabindex="-1" aria-labelledby="spellModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content parchment-bg py-4 py-md-0 px-md-5">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="spellModalLabel">{{activeSpell?.name}}</h1>
          <div class="d-flex flex-wrap gap-3 align-items-center flex-grow-1 justify-content-around">
            <span>{{activeSpell?.duration}}</span>
            <span>{{activeSpell?.range}}</span>
          </div>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body d-flex flex-column flex-wrap" v-if="activeSpell">
          <div class="d-flex flex-wrap gap-5">
            <div>
              <h6>Classes</h6>
              <div class="d-flex flex-wrap gap-2">
                <span v-for="c in activeSpell.classes">{{c.name}}</span>
              </div>
            </div>
            <div>
              <h6>School</h6>
              <span>{{activeSpell.school.name}}</span>
            </div>
            <div>
              <h6>{{activeSpell.index}}</h6>
            </div>
          </div>
          <div class="description mt-3 d-flex flex-column">
            <span class="my-3" v-for="d in activeSpell.desc">{{d}}</span>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState";
import { spellsService } from "../services/SpellsService";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";

export default {
  props: {
    spell: { type: Object, required: true }
  },

  setup(props) {
    
    return {
      activeSpell: computed(() => AppState.activeSpell),
      icon: computed(() => AppState.spellIcons.filter(icon => icon[0] === props.spell.name)),
      async setActiveSpell() {
        try {
          await spellsService.getSpellByURL(props.spell.url)
        }
        catch(error) {
          logger.log('error', error)
          Pop.error(error.message)
        }
      },
      setIcon(spell) {
        return spellsService.setIcon(spell)
      }
    }
  }
}
</script>

<style scoped lang="scss">
  img {
    height: 1rem;
    width: 1rem;
  }

  h6 {
    margin-top: 1rem;
  }

  .description {
    overflow-y: auto;
    height: 45vh;
  }

  .spellcard {
    background-color: rgba(0, 0, 0, 0.466);
    border-radius: 0.5rem;
    margin: 0.4rem;
    padding: 0.5rem 0.75rem;
    translate: 150ms linear;
  }

  .spellcard:hover {
    transform: scale(1.15);
  }

  .parchment-bg {
    background-image: url("../assets/img/parchment.png");
    background-position: center;
    background-size: cover;
    background-color: transparent;
  }
 

  #spellModal {
    right: 50%;
    top: 7%;
  }

  @media (min-width: 768px) {
    #spellModal {
      right: 50%;
      top: 20%;
    }

    .spellcard {
      background-color: rgba(0, 0, 0, 0.466);
      border-radius: 0.5rem;
      margin: 0.75rem;
      padding: 0.5rem 0.75rem;
    }
  }
</style>