<template>
  <div class="container container-testimoni">
    <div
      class="row align-items-center d-flex flex-column flex-sm-column flex-md-row flex-lg-row mt-5"
    >
      <div class="col-md-3 text-left testimoni-head" data-aos="fade-right">
        <div class="icon-quote-container">
          <img class="icon-quote" src="../assets/quote.svg" alt="" />
        </div>
        <h2>What My Customers are Saying</h2>
        <div class="line-header"></div>
      </div>
      <div class="col-md-9 text-left testimoni-card">
        <div
          class="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 testimoni-row"
        >
          <div class="col col-lg-6">
            <div class="card card-item" data-aos="zoom-in-up">
              <div class="card-body">
                <div class="row card-head">
                  <div class="col-3 col-md-3 col-lg-5 text-center">
                    <img src="../assets/user1.svg" alt="" class="image-user" />
                  </div>
                  <div class="col-9 col-md-9 col-lg-7">
                    <h4>Rekha F Al Khamdillah</h4>
                    <h5>Manager of marketing</h5>
                  </div>
                </div>
                <p class="card-text">
                  The application development carried out by Irpan is more up-to-date
                  with the current development of Android technology, very responsive
                  to project discussions and able to provide the right solution. Good work...
                </p>
                <div class="row rate-container">
                  <img
                    src="../assets/star-yellow.svg"
                    alt=""
                    class="icon-start"
                  />
                  <img
                    src="../assets/star-yellow.svg"
                    alt=""
                    class="icon-start"
                  />
                  <img
                    src="../assets/star-yellow.svg"
                    alt=""
                    class="icon-start"
                  />
                  <img
                    src="../assets/star-yellow.svg"
                    alt=""
                    class="icon-start"
                  />
                  <img
                    src="../assets/star-grey.svg"
                    alt=""
                    class="icon-start"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col col-lg-6">
            <div class="card card-item" data-aos="zoom-in-up">
              <div class="card-body">
                <div class="row card-head">
                  <div class="col-3 col-md-3 col-lg-5 text-center">
                    <img src="../assets/user2.svg" alt="" class="image-user" />
                  </div>
                  <div class="col-9 col-md-9 col-lg-7">
                    <h4>Roy Kaswara Rey</h4>
                    <h5>Head of Researcher</h5>
                  </div>
                </div>
                <p class="card-text">
                  The application developed is very up-to-date and very user friendly,
                  responsive and has a more minimalist appearance. Applications can be
                  completed on schedule and always update development progress.
                </p>
                <div class="row rate-container">
                  <img
                    src="../assets/star-yellow.svg"
                    alt=""
                    class="icon-start"
                  />
                  <img
                    src="../assets/star-yellow.svg"
                    alt=""
                    class="icon-start"
                  />
                  <img
                    src="../assets/star-yellow.svg"
                    alt=""
                    class="icon-start"
                  />
                  <img
                    src="../assets/star-yellow.svg"
                    alt=""
                    class="icon-start"
                  />
                  <img
                    src="../assets/star-grey.svg"
                    alt=""
                    class="icon-start"
                  />
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
  name: "Testimoni",
};
</script>
<style scoped>
.container-testimoni {
  margin-bottom: 2rem;
}
.testimoni-head {
  min-width: 10rem;
}
.testimoni-head h2 {
  width: 70%;
  font-weight: bold;
  color: #b9b9b9;
}
.icon-quote-container {
  margin: 0 0 2rem 0;
  width: 100%;
  height: auto;
}
.icon-quote {
  margin-left: 2rem;
  width: 80px;
  height: auto;
}
.line-header {
  width: calc(100% / 2.5);
  height: 0px;
  border: 4px solid #ddd633;
  border-radius: 4px;
  background: #ddd633;
}
.card-item {
  width: 100%;
  height: auto;
  background: #0b0b0a;
  box-shadow: 20px 30px 40px rgba(247, 222, 0, 0.02);
  backdrop-filter: blur(10px);
  border-radius: 10px;
}
.card-head {
  margin: 0 0 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card-head h4 {
  font-weight: bold;
  color: #afaa30;
}
.card-head h5 {
  color: #ebebeb;
}
.image-user {
  width: 100%;
  height: auto;
  border-radius: 50%;
}
.rate-container {
  margin-left: 0.2rem;
}
.icon-start {
  margin-right: 0.3rem;
}

@media screen and (min-width: 300px) {
  .testimoni-row {
    margin: 4rem 0 2rem;
  }
  .card-item {
    margin: 1rem 0 1rem 0;
  }
}
@media screen and (min-width: 576px) {
}
@media screen and (min-width: 768px) {
}
@media screen and (max-width: 992px) {
}
</style>
