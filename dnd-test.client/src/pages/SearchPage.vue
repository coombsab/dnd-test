<template>
  <section class="search p-3">
    <section class="form-wrapper">
        <form @submit.prevent="handleSubmit()" class="form elevation-3">
          <div class="form-floating">
            <input type="text" class="form-control" id="floatingSearchInput" placeholder="Search Spells by Name" v-model="editable">
            <label for="floatingSearchInput">Search Spells by Name</label>
          </div>
        </form>

    </section>
    <section class="d-flex flex-wrap">
      <SpellCard v-for="spell in spells" :key="spell.id" :spell="spell" />
    </section>
  </section>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import { onMounted } from "vue";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { AppState } from "../AppState"
import SpellCard from "../components/SpellCard.vue";
import { spellsService } from "../services/SpellsService.js"

export default {
    setup() {
    const editable = ref("")
        async function getSpells() {
            try {
              await spellsService.getSpells()
              spellsService.setIcons()
            }
            catch (error) {
                logger.log("[getSpells]", error);
                Pop.error(error.message);
            }
        }
        onMounted(() => {
            getSpells();
        });
        return {
            // spells: computed(() => AppState.spells),
            editable,
            spells: computed(() => AppState.spells.filter(s => s.name.toUpperCase().includes(editable.value.toUpperCase())))

        };
    },
    components: { SpellCard }
}
</script>

<style scoped lang="scss">
  .form-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .form {
    width: 100%;
  }

  input {
    border: 4px solid rgba(119, 1, 119, 0.685);
    border-radius: 3px;
  }

  @media (min-width: 768px) {
    .form-wrapper {
      width: 100%;
      display: flex;
      justify-content: center;
    }
    .form {
      width: 75%;
    }

    input {
      border: 4px solid rgba(119, 1, 119, 0.685);
      border-radius: 3px;
    }
  }
</style>
