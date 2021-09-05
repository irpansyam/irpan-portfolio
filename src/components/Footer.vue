<template>
  <div class="container-footer">
    <div class="row nav-bottom pt-5">
      <div class="col-12">
        <nav class="navbar navbar-expand-md navbar-dark bg-transparent">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavBottom"
            aria-controls="navbarNavBottom"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavBottom">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <router-link class="nav-link router-link" to="/"
                  >Home</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link router-link" to="/about"
                  >About</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link router-link" to="/portfolio"
                  >Portfolio</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link router-link" to="/contact"
                  >Contact Me</router-link
                >
              </li>
            </ul>
            <a href="https://docs.google.com/uc?export=download&id=1vVtJrkEl-rNzmstHeZkAdOveruypLcvI" class="btn btn-template btn-cv">Download CV</a>
          </div>
        </nav>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-12 text-center">
        <a href="https://www.facebook.com/ivank.mamo"
          ><img class="icon-media-footer" src="../assets/facebook2.svg" alt=""
        /></a>
        <a href="https://twitter.com/Ivank_Mamo"
          ><img class="icon-media-footer" src="../assets/twitter2.svg" alt=""
        /></a>
        <a href="https://www.linkedin.com/in/irpan-syamsuddin/"
          ><img class="icon-media-footer" src="../assets/linkdin2.svg" alt=""
        /></a>
        <a href="https://www.instagram.com/irpansyam/"
          ><img class="icon-media-footer" src="../assets/instagram2.svg" alt=""
        /></a>
      </div>
    </div>
    <div class="text-center footer">
      <p>Copyright@Irpan 2021, All rights reserved</p>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
export default {
  name: "Footer",
  mounted: function() {
    gsap.registerPlugin(TextPlugin);
    gsap.from(".icon-media-footer", {
      duration: 2,
      scale: 0.5,
      opacity: 0,
      delay: 2,
      stagger: 0.2,
      ease: "elastic",
      force3D: true,
    });
  },
};
</script>
<style scoped>
.container-footer {
  background-color: rgb(30, 31, 24);
}
.footer {
  width: 100%;
  height: auto;
  margin: 2rem 0 0;
  background: rgba(228, 221, 42, 0.12);
  display: grid;
}
.footer p {
  height: 60px;
  margin: 1rem 0 0;
  padding: 0.7rem 0 1rem 0;
  color: #a3a3a3;
}

.icon-media-footer {
  width: 3.5rem;
  height: 3.5rem;
  margin-right: 0.7rem;
}
.icon-media-footer:hover {
  background-color: rgb(61, 61, 18);
}
.nav-bottom {
  display: grid;
  justify-content: center;
}
.nav-bottom .col-12 .navbar {
  justify-content: center;
}
</style>
