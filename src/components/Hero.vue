<template>
  <div class="hero">
    <div class="container">
      <div class="row row-container">
        <div class="col-10 text-left hero-head">
          <div class="card card-hero">
            <div class="card-body">
              <div class="row m-2 row-inner-card">
                <div class="col col-md-7 text-left head-card-hero">
                  <p>Hello!</p>
                  <h1>I'm Irpan</h1>
                  <h4></h4>
                  <p class="detail-card-hero"></p>
                  <a
                    href="#contact"
                    id="btn-connect"
                    class="btn btn-template"
                    role="button"
                    >Let's Connect</a
                  >
                  <div class="row mt-5 grid-medsos">
                    <a href="https://www.facebook.com/ivank.mamo"
                      ><img
                        class="icon-media"
                        src="../assets/facebook2.svg"
                        alt=""
                    /></a>
                    <a href="https://twitter.com/Ivank_Mamo"
                      ><img
                        class="icon-media"
                        src="../assets/twitter2.svg"
                        alt=""
                    /></a>
                    <a href="https://www.linkedin.com/in/irpan-syamsuddin/"
                      ><img
                        class="icon-media"
                        src="../assets/linkdin2.svg"
                        alt=""
                    /></a>
                    <a href="https://www.instagram.com/irpansyam/"
                      ><img
                        class="icon-media"
                        src="../assets/instagram2.svg"
                        alt=""
                    /></a>
                  </div>
                </div>
                <div class="col col-md-5 text-center">
                  <img
                    class="image-hero"
                    src="../assets/irpan-circle.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="circle-yellow"></div>
        </div>
        <div class="col-2 text-left">
          <div class="dev-logos">
            <img src="../assets/logos_java.svg" alt="" class="image-logo" />
            <img src="../assets/kotlin.svg" alt="" class="image-logo" />
            <img src="../assets/flutter.svg" alt="" class="image-logo" />
            <img src="../assets/logos_html-5.svg" alt="" class="image-logo" />
            <img
              src="../assets/logos_javascript.svg"
              alt=""
              class="image-logo"
            />
            <img src="../assets/bootstrap 2.svg" alt="" class="image-logo" />
            <img src="../assets/logos_vue.svg" alt="" class="image-logo" />
            <img src="../assets/logos_laravel.svg" alt="" class="image-logo" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
export default {
  name: "Hero",
  mounted: function() {
    gsap.registerPlugin(TextPlugin);
    gsap.from(".image-hero", {
      duration: 1,
      rotateY: 360,
      opacity: 0,
    });
    gsap.from(".image-logo", {
      duration: 2,
      scale: 0.5,
      opacity: 0,
      delay: 0.5,
      stagger: 0.2,
      ease: "elastic",
      force3D: true,
    });
    gsap.from(".icon-media", {
      duration: 2,
      scale: 0.5,
      opacity: 0,
      delay: 7.5,
      stagger: 0.2,
      ease: "elastic",
      force3D: true,
    });
    gsap.from(".head-card-hero h1", {
      duration: 1,
      x: -50,
      opacity: 0,
      delay: 1,
      ease: "back",
    });
    gsap.to(".head-card-hero h4", {
      duration: 1.5,
      delay: 1,
      text: "Android & Web Developer",
    });
    gsap.to(".detail-card-hero", {
      duration: 5,
      delay: 2,
      text: `More than 3 years of experience developing android
            applications and front end web in my company, and some of
            the other clients. Base in Balikpapan, Indonesia.`,
    });
    gsap.from("#btn-connect", {
      duration: 1,
      x: -50,
      opacity: 0,
      delay: 6.5,
      ease: "back",
    });
  },
};
</script>
<style scoped>
.row-container {
  align-items: center;
}
.hero {
  width: 100%;
  height: auto;
}
.hero-head {
  margin-top: 0;
}
.hero-head h1 {
  color: #afaa30;
  font-weight: bold;
}
.hero-head h4 {
  color: #b9b9b9;
  margin-bottom: 1rem;
}
.hero-head p {
  color: #b9b9b9;
  margin-bottom: 0;
}
.icon-media {
  width: 3.5rem;
  height: 3.5rem;
  margin-right: 0.7rem;
}
.icon-media:hover {
  background-color: rgb(61, 61, 18);
}
.card-hero {
  width: 100%;
  height: auto;
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: inset 3px 4px 25px 10px rgba(192, 196, 156, 0.1);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border-radius: 29px;
  z-index: 1;
}
.row-inner-card {
  display: flex;
  justify-content: center;
  align-items: center;
}
.image-hero {
  margin-right: -10rem;
  width: 380px;
  height: 380px;
  z-index: 3;
}
.circle-yellow {
  position: absolute;
  width: 250px;
  height: 250px;
  background: rgba(109, 105, 0, 0.67);
  border-radius: 50%;
  margin-top: -10rem;
  margin-left: calc((100% / 2) + 9rem);
  z-index: 0;
}
.dev-logos {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0 0 4rem;
}
.image-logo {
  width: 3rem;
  height: 3rem;
  margin: 0.5rem;
}
@media screen and (max-width: 992px) {
  .circle-yellow {
    width: 210px;
    height: 210px;
    margin-top: -14rem;
    margin-left: calc((100% / 2) + 8rem);
  }
  .image-hero {
    width: 300px;
    height: 300px;
  }
  .dev-logos {
    margin: 0 0 0 6rem;
  }
}
@media screen and (max-width: 768px) {
  .image-hero {
    margin: 0%;
    width: 100%;
    height: auto;
    margin-bottom: 3em;
  }
  .row-inner-card {
    flex-direction: column-reverse;
  }
  .head-card-hero {
    text-align: center !important;
  }
  .grid-medsos {
    justify-content: center;
  }
  .circle-yellow {
    margin-top: -20rem;
    margin-left: calc((100% / 2) + 3rem);
  }
  .dev-logos {
    margin: 0;
  }
}
@media screen and (max-width: 576px) {
  .circle-yellow {
    margin-top: -20rem;
    margin-left: calc((100% / 2) + 3rem);
  }
}
</style>
