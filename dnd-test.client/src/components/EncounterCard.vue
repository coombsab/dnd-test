<template>
  <div class="encounter-card">
    <div class="card glass" :style="{ backgroundImage: `url(${encounter.coverImg})` }">
      <div class="card-header">
        <h3>{{ encounter.name }}</h3>
      </div>
      <div class="card-body">
        <p>{{ encounter.desc }}</p>
        <p>{{ encounter.type }}</p>
      </div>
      <div class="card-footer">
        <p>{{ encounter.isCompleted }}</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    encounter: { type: Array, required: true },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.glass {
  background-color: rgba(38, 37, 37, 0.397);
}
</style>
