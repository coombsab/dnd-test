<template>
  <main>
    <router-view />
    <Login class="login" />
  </main>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'

export default {
  setup() {
    return {
      appState: computed(() => AppState)
    }
  },
  components: { Navbar }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
.main {
  position: relative;
}
.login {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
}
</style>
