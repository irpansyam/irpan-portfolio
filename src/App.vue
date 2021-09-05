<template>
  <div class="container-fluid" id="app">
    <nav class="navbar navbar-expand-md sticky-top navbar-dark nav-top">
      <a class="navbar-brand" href="#">Ir</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav ">
          <li class="nav-item">
            <router-link class="nav-link router-link" to="/">Home</router-link>
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
        <a href="https://docs.google.com/uc?export=download&id=1vVtJrkEl-rNzmstHeZkAdOveruypLcvI" class="btn btn-template btn-cv"><span>Download CV</span></a>
      </div>
    </nav>
    <router-view class="mt-3" />
    <Footer></Footer>
  </div>
</template>

<script>
import { gsap } from "gsap";
import Footer from "@/components/Footer.vue";
export default {
  name: "App",
  components: {
    Footer,
  },
  mounted: function() {
    gsap.from(".navbar", {
      duration: 1.5,
      y: "-100%",
      opacity: 0,
      ease: "bounce",
    });
  },
};
</script>

<style></style>
