<template>
  <div class="body-lovetodo">
    <div class="container">
      <div
        class="row align-items-center row-cols-1 row-cols-sm-1 row-cols-md-2"
      >
        <div class="col col-md-4 text-left lovetodo-head" data-aos="fade-right">
          <h2>What Actually I Love to Do</h2>
          <div class="line-header"></div>
          <p>
            Some of the activities that I enjoy doing, whether in my spare time,
            on holidays or at work.
          </p>
          <router-link class="router-link btn btn-template" to="/morelovetodo"
            >See More</router-link
          >
        </div>
        <div class="col col-md-8 text-left card-container">
          <div
            class="row align-items-center row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2"
          >
            <div class="col">
              <div class="card card-love-todo" data-aos="zoom-in-up">
                <div class="circle-icon">
                  <img
                    src="../assets/android.svg"
                    alt=""
                    class="img-icon-dev"
                  />
                </div>
                <div class="card-body">
                  <h5 class="card-title">Android Development</h5>
                  <p class="card-text">
                    Create or develop Android applications based on the Java and
                    Kotlin programming languages.
                  </p>
                </div>
              </div>
              <div class="card card-love-todo" data-aos="zoom-in-up">
                <div class="circle-icon">
                  <img src="../assets/design.svg" alt="" class="img-icon-dev" />
                </div>
                <div class="card-body">
                  <h5 class="card-title">UI & UX Design</h5>
                  <p class="card-text">
                    Designing an attractive application appearance and
                    prioritizing design for a better user experience.
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card card-love-todo" data-aos="zoom-in-up">
                <div class="circle-icon">
                  <img src="../assets/web.svg" alt="" class="img-icon-dev" />
                </div>
                <div class="card-body">
                  <h5 class="card-title">Web Development</h5>
                  <p class="card-text">
                    Create and develop Front End Web applications with
                    Javascript, and several frameworks such as Bootstrap,
                    Materialize, and VueJs. Back End with PHP Laravel and MySql.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoveToDo",
};
</script>
<style scoped>
.body-lovetodo {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  background-position-y: 0rem;
}
.container {
  margin-top: 4rem;
}
.lovetodo-head,
.card-container {
  margin: 5rem 0 0.5rem 0;
}
.lovetodo-head h2 {
  width: 60%;
  font-weight: bold;
  color: #b9b9b9;
}
.lovetodo-head p {
  margin: 2rem 0 0 0;
  color: #b9b9b9;
}
.line-header {
  width: calc(100% / 2.5);
  height: 0px;
  border: 4px solid #ddd633;
  border-radius: 4px;
  background: #ddd633;
}
.card-love-todo {
  margin: 0 0 6rem 0;
  background: #0b0b0a;
  box-shadow: 20px 30px 40px rgba(247, 222, 0, 0.02);
  backdrop-filter: blur(10px);
  border-radius: 10px;
}
.circle-icon {
  margin: -3rem 0 0 2rem;
  width: 80px;
  height: 80px;
  background: rgba(205, 199, 47, 0.26);
  backdrop-filter: blur(30px);
  border-radius: 50%;
  text-align: center;
  display: grid;
  justify-items: center;
  align-items: center;
}
.card-title {
  color: #afaa30;
  margin: 1rem 0 1rem 0;
}
.card-text {
  color: #a3a3a3;
}
.img-icon-dev {
  width: 45px;
  height: auto;
}
</style>
