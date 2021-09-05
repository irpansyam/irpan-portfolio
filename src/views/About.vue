<template>
  <div class="about">
    <div class="container p-5">
      <div
        class="row align-items-center row-cols-1 row-cols-sm-1 row-cols-md-2"
      >
        <div class="col col-md-6 img-about">
          <img class="image-hero" src="../assets/irpan-circle2.svg" alt="" />
        </div>
        <div class="col col-md-6 head-about">
          <h1 class="name">Irpan</h1>
          <p class="age"></p>
          <p class="location"></p>
        </div>
      </div>
      <div
        class="row text-left row-cols-1 mt-5 head-caption"
        data-aos="fade-right"
        data-aos-delay="200"
      >
        <p class="text-left">
          Starting from the pleasure of learning programming code that is
          related to problem solving logic which is getting more and more
          complicated, I try to focus on several programming languages such as
          Java, PHP, Javascript so that it comes to how to build an Android
          application and develop a web application. In terms of design, apart
          from being a small child, I am happy with artistic things such as
          painting and drawing objects, for the purposes of a User Interface, a
          mobile application or website requires UI UX design skills that are
          attractive and easy to use.
        </p>
      </div>
      <div
        class="row align-items-center row-cols-1 row-cols-sm-1 row-cols-md-2 mt-4"
      >
        <div class="col col-md-6" data-aos="fade-right" data-aos-delay="400">
          <img src="../assets/image-about1.png" alt="" class="card-image" />
        </div>
        <div
          class="col col-md-6 text-left mt-3 mb-3 caption-about1"
          data-aos="fade-left"
          data-aos-delay="600"
        >
          <h2>Activities that I Enjoy Doing</h2>
          <p>
            Most of my time spent hours in front of the computer to build an
            Android application, develop the web, learn from training
            institutions about programming, design and all things related to
            programming, especially Android and Web applications. All of these
            are activities that make me happy to do it despite my hours at the
            computer, happy to create something that solves a problem and maybe
            has a bit of artistic value in terms of appearance.
          </p>
        </div>
      </div>
      <div
        class="row align-items-center row-cols-1 row-cols-sm-1 row-cols-md-2 mt-4"
      >
        <div
          class="col col-md-6 mt-3 mb-3 caption-about2"
          data-aos="fade-right"
          data-aos-delay="800"
        >
          <h2>My Daily Activities</h2>
          <p>
            Every day I spend 8 hours working at a state-owned company as a
            marketing and customer service staff tasked with creating product
            marketing designs and developing Android and Web applications. The
            rest of the time I am with my family, and I spend more hours at the
            computer for developing Android and Web applications and also always
            take part in training, courses, seminars on Android, Web
            programming, and design.
          </p>
        </div>
        <div class="col col-md-6" data-aos="fade-left" data-aos-delay="1000">
          <img src="../assets/image-about2.png" alt="" class="card-image" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
export default {
  name: "About",
  components: {},
  mounted: function() {
    gsap.registerPlugin(TextPlugin);
    gsap.from(".image-hero", {
      duration: 1,
      rotateY: 360,
      opacity: 0,
    });
    gsap.from(".name", {
      duration: 1,
      x: -50,
      opacity: 0,
      delay: 1,
      ease: "back",
    });
    gsap.to(".age", {
      duration: 1,
      delay: 2,
      text: "34 Years Old",
    });
    gsap.to(".location", {
      duration: 1.5,
      delay: 3,
      text: "Base location in Balikpapan East Kalimantan Indonesia",
    });
  },
};
</script>
<style scoped>
.about {
  background-image: url("../assets/wave-about.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  background-position-y: 0rem;
}
.image-hero {
  width: 300px;
  height: auto;
}
.img-about {
  text-align: right;
  padding: 1rem;
}
.head-about {
  text-align: left;
  padding: 1rem;
}
.head-about h1 {
  font-weight: bold;
  color: #afaa30;
}
.head-about p {
  font-weight: 500;
  font-size: 20px;
  color: #b9b9b9;
}
.head-caption {
  margin: 0rem;
}
.head-caption p {
  color: #b9b9b9;
  font-size: 20px;
}
.caption-about2 {
  text-align: right;
}
.caption-about1 h2,
.caption-about2 h2 {
  font-weight: bold;
  color: #afaa30;
}
.card-image {
  width: 100%;
  height: auto;
  border-radius: 1rem;
}
@media screen and (max-width: 768px) {
  .img-about {
    text-align: center;
  }
  .head-about {
    text-align: center;
  }
  .caption-about2 {
    text-align: start;
  }
}
</style>
