<template>
  <div class="container" id="myCreativeWork">
    <div class="row align-items-center row-cols-1 row-cols-sm-1 row-cols-md-2">
      <div class="col col-md-7 text-left card-container">
        <div
          class="row align-items-center row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2"
        >
          <div class="col">
            <img
              data-aos="zoom-in-up"
              :src="templateThumbnail1"
              alt=""
              class="rounded mx-auto d-block image-ui"
            />
            <img
              data-aos="zoom-in-up"
              :src="templateThumbnail2"
              alt=""
              class="rounded mx-auto d-block image-ui"
            />
          </div>
          <div class="col">
            <img
              data-aos="zoom-in-up"
              :src="templateThumbnail3"
              alt=""
              class="rounded mx-auto d-block image-ui"
            />
          </div>
        </div>
      </div>
      <div class="col col-md-5 text-left portofolio-head" data-aos="fade-left">
        <h2>Some of My Creative Works</h2>
        <div class="line-header"></div>
        <p>
          Some snippets of project images that I've worked on from clients.
        </p>
        <div class="button-container">
          <div
            class="row row-cols-1 row-cols-sm-2 row-cols-md-1 row-cols-lg-2 text-center align-items-center"
          >
            <div>
              <a
                href="#myCreativeWork"
                @click="clickBtnUiUx()"
                class="btn btn-border"
                v-bind:class="{ active: isActiveUiUx }"
              >
                UI UX Design
              </a>
            </div>
            <div>
              <a
                href="#myCreativeWork"
                @click="clickBtnAndroid()"
                class="btn btn-border"
                v-bind:class="{ active: isActiveAndroid }"
              >
                Android Dev
              </a>
            </div>
            <div>
              <a
                href="#myCreativeWork"
                @click="clickBtnFrontEnd()"
                class="btn btn-border"
                v-bind:class="{ active: isActiveFrontEnd }"
              >
                Front End Dev
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyCreativeWorks",
  data: () => {
    return {
      templateThumbnail1: require("../assets/picup1.png"),
      templateThumbnail2: require("../assets/picup2.png"),
      templateThumbnail3: require("../assets/picup3.png"),
      isActiveUiUx: false,
      isActiveAndroid: false,
      isActiveFrontEnd: false,
    };
  },
  methods: {
    clickBtnUiUx: function() {
      this.templateThumbnail1 = require("../assets/portfolio_ui1.png");
      this.templateThumbnail2 = require("../assets/portfolio_ui2.png");
      this.templateThumbnail3 = require("../assets/portfolio_ui3.png");
      this.isActiveUiUx = true;
      this.isActiveAndroid = false;
      this.isActiveFrontEnd = false;
    },
    clickBtnAndroid: function() {
      this.templateThumbnail1 = require("../assets/picup1.png");
      this.templateThumbnail2 = require("../assets/picup2.png");
      this.templateThumbnail3 = require("../assets/picup3.png");
      this.isActiveUiUx = false;
      this.isActiveAndroid = true;
      this.isActiveFrontEnd = false;
    },
    clickBtnFrontEnd: function() {
      this.templateThumbnail1 = require("../assets/demo_portfolio1.png");
      this.templateThumbnail2 = require("../assets/demo_portfolio2.png");
      this.templateThumbnail3 = require("../assets/demo_portfolio3.png");
      this.isActiveUiUx = false;
      this.isActiveAndroid = false;
      this.isActiveFrontEnd = true;
    },
  },
};
</script>
<style scoped>
.container {
  padding-top: 3rem;
}
.card-container,
.portofolio-head {
  margin: 0.5rem 0 0.5rem 0;
}
.image-ui {
  margin: 0 0 2rem 0;
  width: 100%;
  height: auto;
}
.portofolio-head h2 {
  width: 60%;
  font-weight: bold;
  color: #b9b9b9;
}
.portofolio-head p {
  margin-top: 2rem;
  color: #b9b9b9;
}
.line-header {
  width: calc(100% / 3);
  height: 0px;
  border: 4px solid #ddd633;
  border-radius: 4px;
  background: #ddd633;
}
.active {
  background: #cdc72f;
  color: #111101 !important;
}
.row {
  margin: 0 0 0.5rem 0;
}
</style>
