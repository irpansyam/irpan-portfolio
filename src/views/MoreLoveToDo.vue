<template>
  <div class="more-love-todo">
    <div class="container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-transparent">
          <li class="breadcrumb-item">
            <router-link class="router-link" to="/" exact tag="a"
              >Home</router-link
            >
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            More Love To Do
          </li>
        </ol>
      </nav>
      <div
        class="row row-cols-1 row-cols-sm-1 row-cols-md-2 align-items-center"
      >
        <div class="col col-md-7 column-illustration">
          <img
            src="../assets/more-ltd-illustration.svg"
            alt=""
            class="moreltd-illustration"
            data-aos="zoom-in-up"
          />
        </div>
        <div class="col col-md-5 head-moreltd" data-aos="zoom-in-up">
          <h1>Actually I Love to Do</h1>
          <p>
            Some of the activities that I enjoy doing, whether in my spare time,
            on holidays or at work.
          </p>
        </div>
      </div>
      <div
        class="row row-cols-1 row-cols-sm-1 row-cols-md-2 align-items-center text-left mt-5"
      >
        <div class="col col-md-12 col-lg-6" data-aos="fade-right">
          <img src="../assets/example-ui5.png" alt="" class="img-moreltd" />
        </div>
        <div class="col col-md-12 col-lg-6" data-aos="fade-left">
          <div class=" row head-title">
            <div class="col-2 col-md-2">
              <div class="card circle-icon">
                <img src="../assets/android.svg" alt="" class="img-icon-dev" />
              </div>
            </div>
            <div class="col-10 col-md-10">
              <h2>Android Development</h2>
            </div>
          </div>
          <p>
            Create and develop Android applications based on the Java and Kotlin
            programming languages. Build Android applications based on industry
            needs, from design patterns, testing, API and databases. Not only
            that, in application development we also implement Android Jetpack
            such as ViewModel, LiveData, Room, and Paging to build applications
            with the Android Architecture Component.
          </p>
        </div>
        <div class="col col-md-12 mt-3" data-aos="fade-right">
          <p>
            For more advanced development, we apply the principles of Clean
            Architecture, Reactive, Dependency Injection, Modularization,
            Performance, and Security.
          </p>
        </div>
      </div>
      <div
        class="row row-cols-1 row-cols-sm-1 row-cols-md-2 align-items-center text-left mt-5"
      >
        <div class="col col-md-12 col-lg-6" data-aos="fade-right">
          <div class=" row head-title">
            <div class="col-2 col-md-2">
              <div class="card circle-icon">
                <img src="../assets/web.svg" alt="" class="img-icon-dev" />
              </div>
            </div>
            <div class="col-10 col-md-10">
              <h2>Web Development</h2>
            </div>
          </div>
          <p>
            Build Front End Web applications based on industry needs with
            Javascript ES6, and several frameworks / libraries such as
            Bootstrap, Materialize, and Vue Js. Developing responsive websites
            such as PWA, reusable, encapsulated, mobile first approach and
            optimized. In addition, we are also developing a website with a
            clean architecture (Clean code) principle so that it can be easily
            developed by other developers. Perform automation testing such as
            Unit Test, Integration Test, End to End Test before the project is
            published.
          </p>
        </div>
        <div class="col col-md-12 col-lg-6" data-aos="fade-left">
          <img src="../assets/example-ui6.png" alt="" class="img-moreltd" />
        </div>
        <div class="col col-md-12 mt-3" data-aos="fade-right">
          <p>
            For Back End development, usually building a RESTFULL API with PHP
            using the Laravel framework with a MySql database. Create an API for
            Front End needs as well as for consumption of Mobile applications.
          </p>
        </div>
      </div>
      <div
        class="row row-cols-1 row-cols-sm-1 row-cols-md-2 align-items-center text-left mt-5"
      >
        <div class="col col-md-12 col-lg-6" data-aos="fade-right">
          <img src="../assets/example-ui7.png" alt="" class="img-moreltd" />
        </div>
        <div class="col col-md-12 col-lg-6" data-aos="fade-left">
          <div class=" row head-title">
            <div class="col-2 col-md-2">
              <div class="card circle-icon">
                <img src="../assets/design.svg" alt="" class="img-icon-dev" />
              </div>
            </div>
            <div class="col-10 col-md-10">
              <h2>UI UX Design</h2>
            </div>
          </div>
          <p>
            To support the appearance of mobile or front end application
            development, we designed a user interface using Figma or Adobe XD.
            The design is made minimalist and simpler so that the application is
            easy to use and can support a better user experience.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MoreLoveToDo",
};
</script>
<style scoped>
.container {
  padding: 0 3rem 3rem;
}
.more-love-todo {
  background-image: url("../assets/wave-moreltd.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  background-position-y: 0rem;
}
.router-link {
  color: #afaa30;
}
.router-link:hover {
  text-decoration: none;
  font-weight: bold;
}
.column-illustration,
.head-moreltd {
  text-align: left;
  margin: 1rem 0 1rem 0;
}
.head-moreltd h1 {
  font-weight: bold;
  color: #afaa30;
}
.head-moreltd p {
  font-size: 20px;
  color: #b9b9b9;
}
.moreltd-illustration {
  width: 100%;
  height: auto;
}
.circle-icon {
  width: 70px;
  height: 70px;
  background: rgba(205, 199, 47, 0.26);
  backdrop-filter: blur(30px);
  border-radius: 50%;
  text-align: center;
  display: grid;
  justify-items: center;
  align-items: center;
}
.img-icon-dev {
  width: 45px;
  height: 45px;
}
.head-title {
  padding: 15px;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
}
.head-title h2 {
  flex-basis: auto;
  margin: 0rem;
  padding: 0 0 0 1rem;
  font-weight: bold;
  color: #afaa30;
}
.img-moreltd {
  width: 100%;
  height: auto;
  border-radius: 20px;
  filter: drop-shadow(5px 10px 30px rgba(95, 97, 16, 0.05));
}
@media screen and (max-width: 500px) {
  .circle-icon {
    width: 50px;
    height: 50px;
  }
  .img-icon-dev {
    width: 35px;
    height: 35px;
  }
}
</style>
