<template>
  <section class="home d-flex flex-column flex-md-wrap flex-md-row justify-content-center align-items-center gap-5">
    <router-link :to="{ name: 'Characters' }" aria-label="Characters Page">
      <div class="character theme-card elevation-3">
        <div class="on-md-hover text-visible">
          <span class="popup-text">
            Characters
          </span>
        </div>
      </div>
    </router-link>
    <router-link :to="{ name: 'Campaigns' }" aria-label="Campaigns Page">
      <div class="campaign theme-card elevation-3">
        <div class="on-md-hover text-visible">
          <span class="popup-text">
            Campaigns
          </span>
        </div>
      </div>
    </router-link>
    <router-link :to="{ name: 'Search' }" aria-label="Search Page">
      <div class="search theme-card elevation-3">
        <div class="on-md-hover text-visible">
          <span class="popup-text">
            Search
          </span>
        </div>
      </div>
    </router-link>
  </section>
</template>

<script>


export default {
    setup() {

        return {

        };
    },
}
</script>

<style scoped lang="scss">
.search {
  background-image: url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fb9da4b6-117d-4be0-ad56-7cd5d4d8c244/d2d3jhq-051ffa01-7251-4e64-80ad-e62117f65414.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ZiOWRhNGI2LTExN2QtNGJlMC1hZDU2LTdjZDVkNGQ4YzI0NFwvZDJkM2pocS0wNTFmZmEwMS03MjUxLTRlNjQtODBhZC1lNjIxMTdmNjU0MTQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.nJOp3t0RlfdQzUf5MIUlS4LYB8p21J0zcVvPRzRCvLg");
}

.character {
  background-image: url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ecd743aa-b751-48c0-86bc-d33576fe5f20/da56uy1-0a40770b-0069-4a78-a8f3-5ec3ab0ed6e5.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2VjZDc0M2FhLWI3NTEtNDhjMC04NmJjLWQzMzU3NmZlNWYyMFwvZGE1NnV5MS0wYTQwNzcwYi0wMDY5LTRhNzgtYThmMy01ZWMzYWIwZWQ2ZTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.vSYFC1TEi0LnjOk7Sc_MzZxGRmKen3PmFIMCOr6Q-jQ");
}

.campaign {
  background-image: url("https://i.pinimg.com/originals/8e/21/79/8e2179f19baa714f8f8fb6b0e48ae651.jpg");
}

.theme-card {
  background-size: cover;
  background-position: center;
  background-color: black;
  height: 40vh;
  width: 80vw;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.popup-text {
  font-size: 48px;

}

.home {
  height: 100vh;
  overflow-y: auto;
}

@media (min-width: 768px) {
  .theme-card {
    background-size: cover;
    background-position: center;
    background-color: black;
    height: 32rem;
    width: 24rem;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .on-md-hover {
    transition: all 0.2s linear;
    opacity: 0;
    pointer-events: none;
  }
  *:hover > .on-md-hover {
    opacity: 1;
    pointer-events: all;
  }
}
</style>
