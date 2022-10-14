<template>
  <div class="row justify-content-around">
    <div class="card col-3 m-3 cards elevation-3">
      <img src="https://thiscatdoesnotexist.com" alt="">
      <h4 class="text-shadow2">Thomas Daily</h4>
      <div class="card-body rounded text-shadow ">
        <p>Description</p>
      </div>
      <div class="card-text">
        <a href="https://github.com/Thomas-Daily" target="_blank" class="mdi mdi-github fs-4 p-1"></a>
        <a class="mdi mdi-linkedin fs-4 p-1" target="_blank" href=""></a>
      </div>
    </div>
    <div class="card col-3 m-3 cards elevation-3">
      <img src="https://thiscatdoesnotexist.com" alt="">
      <h4 class="text-shadow2">Abraham Coombs</h4>
      <div class="card-body rounded text-shadow ">
        <p>Description</p>
      </div>
      <div class="card-text">
        <a href="https://github.com/coombsab" target="_blank" class="mdi mdi-github fs-4 p-1"></a>
        <a class="mdi mdi-linkedin fs-4 p-1" target="_blank" href="https://github.com/coombsab"></a>
      </div>
    </div>
    <div class="card col-3 m-3 cards elevation-3">
      <img src="../assets/img/me.jpg" alt="">
      <h4 class="text-shadow2">Jake Neitzell</h4>
      <div class="card-body rounded text-shadow ">
        <p>Description</p>
      </div>
      <div class="card-text">
        <a href="https://github.com/JacobNeitzell" target="_blank" class="mdi mdi-github fs-4 p-1"></a>
        <a class="mdi mdi-linkedin fs-4 p-1" target="_blank"
          href="https://www.linkedin.com/in/jacob-neitzell-610a64180/"></a>
      </div>
    </div>
    <div class="card col-3 m-3 cards elevation-3">
      <img src="https://thiscatdoesnotexist.com" alt="">
      <h4 class="text-shadow2">Talor Montandon</h4>
      <div class="card-body rounded text-shadow ">
        <p>Description</p>
      </div>
      <div class="card-text">
        <a href="https://github.com/Tmontandon" target="_blank" class="mdi mdi-github fs-4 p-1"></a>
        <a class="mdi mdi-linkedin fs-4 p-1" target="_blank" href="https://github.com/Tmontandon"></a>
      </div>
    </div>
    <div class="card col-3 m-3 cards elevation-3">
      <img src="https://thiscatdoesnotexist.com" alt="">
      <h4 class="text-shadow2">Jake Paulin</h4>
      <div class="card-body rounded text-shadow ">
        <p>Description</p>
      </div>
      <div class="card-text">
        <a href="https://github.com/Jakeepaulin" target="_blank" class="mdi mdi-github fs-4 p-1"></a>
        <a class="mdi mdi-linkedin fs-4 p-1" target="_blank" href="https://github.com/Jakeepaulin"></a>

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
<style lang="scss" scoped>
.cards {
  background-image: url('https://wallpaperforu.com/wp-content/uploads/2020/10/amoled-wallpaper-20101513342433.jpg');
  background-position: center;
  background-size: cover;
}



.text-shadow2 {
  color: rgba(206, 157, 219, 0.888);
  text-shadow: 1px 1px rgba(51, 48, 48, 0.856), 0px 0px 5px rgb(12, 28, 85);
  font-weight: bold;
  letter-spacing: 0.08rem
}


.text-shadow {
  color: rgba(209, 215, 221, 0.988);
  text-shadow: 1px 1px black, 0px 0px 5px rgba(18, 190, 203, 0.921);
  font-weight: bold;
  letter-spacing: 0.08rem
}

a {
  color: rgb(250, 12, 198);

}

.card-body {
  background-color: rgba(138, 75, 149, 0.464);
}
</style>