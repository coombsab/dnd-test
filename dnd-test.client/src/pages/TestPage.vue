<template>
  <div class="box text-visible">
    <div class="elem1">
      <span>Elem 1</span>
    </div>
    <div class="elem2 scrollable">
      <div class="d-flex flex-column scrollable">
        <span class="my-2 text-visible" v-for="n of 100">Hello World</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    
    return {
      
    }
  }
}
</script>

<style scoped lang="scss">
  .box {
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: gray;
  }

  .elem1 {
    min-height: 10rem;
    background-color: red ;
  }

  .elem2 {
    background-color: black;
    flex-grow: 1;
  }
  
  .scrollable {
    
    overflow-y: auto;
  }

</style>