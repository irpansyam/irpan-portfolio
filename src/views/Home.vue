<template>
  <div class="home">
    <Hero id="home"></Hero>
    <LoveToDo id="love-todo"></LoveToDo>
    <div class="experience-dash">
      <div class="container container-circle">
        <div class="row row-circle align-items-center">
          <div class="col circle-exp">
            <h3>12</h3>
            <p>PROJECT</p>
          </div>
          <div class="col circle-exp-active">
            <h3>12</h3>
            <p>CUSTOMER HAPPY</p>
          </div>
          <div class="col circle-exp">
            <h3>282</h3>
            <p>WORK HOUR</p>
          </div>
          <div class="col circle-exp">
            <h3>8</h3>
            <p>CERTIFICATE</p>
          </div>
        </div>
      </div>
    </div>
    <MyCreativeWorks id="portfolio"></MyCreativeWorks>
    <ShouldHireMe></ShouldHireMe>
    <div class="experience-dash" style="height: 10rem;"></div>
    <Testimoni></Testimoni>
    <div id="contact" class="container mt-5">
      <div class="row row-cols-1 align-items-center">
        <div class="col">
          <div class="card card-ajakan" data-aos="zoom-in-up">
            <div class="card-body">
              <h6>GET IN TOUCH</h6>
              <H1 class="card-title">Let's work together</H1>
              <p class="card-text">
                If you have a website or mobile app idea in mind or you need
                some advice about product design, feel free to contact me.
                Currently my time books quickly, so the sooner you write, the
                better it is for both of us.
              </p>
              <router-link to="/contact" exact>
                <a class="btn btn-template"
                  ><span>irpansyamsuddin@gmail.com</span></a
                >
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/Hero.vue";
import LoveToDo from "@/components/LoveToDo.vue";
import MyCreativeWorks from "@/components/MyCreativeWorks.vue";
import ShouldHireMe from "@/components/ShouldHireMe.vue";
import Testimoni from "@/components/Testimoni.vue";
import "../plugins/fontawesome.js";

export default {
  name: "Home",
  components: {
    Hero,
    LoveToDo,
    MyCreativeWorks,
    ShouldHireMe,
    Testimoni,
  },
};
</script>
<style scoped>
.home {
  background-image: url("../assets/wave-home.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  background-position-y: 0rem;
}
.experience-dash {
  background-image: url(../assets/code-background.svg);
  width: 100%;
  height: auto;
  margin: 0;
}
.container-circle,
.row-circle {
  display: grid;
  justify-items: center;
  align-items: center;
}
.row-circle {
  max-width: 750px;
  grid-template-columns: repeat(4, 1fr);
}
@media screen and (max-width: 768px) {
  .row-circle {
    max-width: 450px;
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 2rem;
  }
}
.circle-exp {
  width: 110px;
  height: 110px;
  max-width: 110px;
  border: 7px solid #ddd633;
  box-sizing: border-box;
  border-radius: 50%;
}
.circle-exp-active {
  margin: 2rem;
  width: 110px;
  height: 110px;
  max-width: 110px;
  border: 9px solid #828058;
  box-sizing: border-box;
  border-radius: 50%;
  background: #e4dd2a;
}
.circle-exp-active h3 {
  color: #34342f;
}
.circle-exp-active p {
  color: #34342f;
}
h3 {
  color: #ffffff;
  margin-top: 1rem;
}
p {
  color: #ffffff;
  margin-bottom: 1rem;
  font-size: 0.7rem;
}
.card-ajakan {
  width: 100%;
  height: auto;
  margin: 3rem 0 3rem 0;
  background: #18180f;
  box-shadow: 8px 10px 30px 6px #000000;
  border: double 2px transparent;
  border-radius: 13px;
  background-image: linear-gradient(#18180f, #18180f),
    linear-gradient(to left, #222015, #575925);
  background-origin: border-box;
  background-clip: content-box, border-box;
}
.card-body h6 {
  margin: 1rem 0 0;
  color: #afaa30;
}
.card-body p {
  font-size: 1rem;
  padding: 0 5rem 0 5rem;
  margin: 0 0 4rem 0;
  color: #a3a3a3;
}
.card-title {
  margin: 2rem 0 1rem;
  color: #b9b9b9;
  font-weight: bold;
}
.btn-template {
  width: 30%;
  min-width: 22rem;
  height: auto;
  margin: 0 0 1rem;
  padding: 0.5rem 2rem;
}
.btn-template span {
  font-weight: 500;
}
@media screen and (max-width: 567px) {
  .btn-template {
    min-width: 18rem;
  }
  .btn-template span {
    font-size: 0.8em;
  }
}
</style>
