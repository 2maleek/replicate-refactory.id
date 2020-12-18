<template>
  <div class="home">
    <b-jumbotron class="jb">
      <div class="col-md-6">
        <p  class="headline">Empowering
        <span class="text-orange">People</span>
        Through Programming</p>

        <p>
          Refactory adalah perusahaan edukasi dan teknologi
          yang menyediakan layanan lengkap berupa course maupun
          custom training yang materinya dapat disesuaikan dengan
          kebutuhan teknologi dan bisnis perusahaan Anda.
        </p>

        <hr class="my-4">

        <b-button variant="primary" href="#">Temukan Solusi Anda</b-button>
        <b-button variant="success" href="#">Tingkatkan Skill Anda</b-button>

      </div>
      <p>
       PARTNER EKSKLUSIF KAMI
      </p>
    </b-jumbotron>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  components: {
  },
};
</script>

<style scoped>
  .home {
    background-image: url(https://refactory.id/wp-content/uploads/2020/01/hero-homepage.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    top: -78px;
    min-height: 80vh;
    z-index: -1;
    text-align: left;
  }

  .jb {
    background-image: linear-gradient(110deg, #00256C 10%, #04ACA4 90%);
    background-color: transparent;
    opacity: 0.75;
    color: white;
    min-height: 80vh;
  }

  .headline {
    font-size: 20px;
  }

  .text-orange {
    color: #e48800;
  }
</style>
