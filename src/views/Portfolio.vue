<template>
  <div class="portfolio">
    <div class="container p-5">
      <div
        class="row align-items-center row-cols-1 row-cols-sm-1 row-cols-md-2 mb-5"
      >
        <div class="col col-md-7 column-illustration">
          <img
            src="../assets/portfolio-illustration.svg"
            alt=""
            class="portfolio-illustration"
            data-aos="zoom-in-down"
          />
        </div>
        <div class="col col-md-5 head-portfolio" data-aos="zoom-in-down">
          <h1>My Creative Works</h1>
          <p>
            Making your hobby a passion in your work is the key to keep your
            passion for creating creative works. Here are some of the projects
            I've worked on.
          </p>
        </div>
      </div>
      <div
        class="row align-items-center row-cols-1 row-cols-sm-1 row-cols-md-2 mb-3"
      >
        <div class="col col-md-12 col-lg-6 text-left" data-aos="fade-right">
          <div class="row label">
            <div class="col-2 col-md-2">
              <div class="card circle-icon">
                <img src="../assets/android.svg" alt="" class="img-icon-dev" />
              </div>
            </div>
            <div class="col-10 col-md-10">
              <h2 class="text-left title">Android Developer</h2>
            </div>
          </div>
          <p class="text-left mt-2">
            This is an application that was built and developed to monitor the profile and sales
            of energy in the electrical energy company named Picup. Picup was developed using a 
            database from the Firebase Realtime database. Some of the features provided such as 
            displaying sales charts, graphs of monthly customer electricity bills. In addition, 
            Picup can display complete company or customer profile data, update data with data input 
            forms.
          </p>
          <!-- <a href="#" class="btn btn-view mb-3" role="button"
            ><span>View App</span></a
          > -->
        </div>
        <div class="col col-md-12 col-lg-6" data-aos="fade-left">
          <div id="carousel-design" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li
                data-target="#carousel-design"
                data-slide-to="0"
                class="active"
              ></li>
              <li data-target="#carousel-design" data-slide-to="1"></li>
              <li data-target="#carousel-design" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="../assets/picup1.png"
                  class="d-block w-100 img-carousel"
                  alt=""
                />
              </div>
              <div class="carousel-item">
                <img
                  src="../assets/picup2.png"
                  class="d-block w-100 img-carousel"
                  alt=""
                />
              </div>
              <div class="carousel-item">
                <img
                  src="../assets/picup3.png"
                  class="d-block w-100 img-carousel"
                  alt=""
                />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carousel-design"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carousel-design"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
      <div class="line mb-5 mt-5"></div>
      <div
        class="row align-items-center row-cols-1 row-cols-sm-1 row-cols-md-2 mb-3"
      >
        <div class="col col-md-12 col-lg-6" data-aos="fade-right">
          <div
            id="carousel-android"
            class="carousel slide"
            data-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-target="#carousel-design"
                data-slide-to="0"
                class="active"
              ></li>
              <li data-target="#carousel-android" data-slide-to="1"></li>
              <li data-target="#carousel-android" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="../assets/portfolio_ui1.png"
                  class="d-block w-100 img-carousel"
                  alt=""
                />
              </div>
              <div class="carousel-item">
                <img
                  src="../assets/portfolio_ui2.png"
                  class="d-block w-100 img-carousel"
                  alt=""
                />
              </div>
              <div class="carousel-item">
                <img
                  src="../assets/portfolio_ui3.png"
                  class="d-block w-100 img-carousel"
                  alt=""
                />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carousel-android"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carousel-android"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div class="col col-md-12 col-lg-6" data-aos="fade-left">
          <div class="row label">
            <div class="col-2 col-md-2">
              <div class="card circle-icon">
                <img src="../assets/design.svg" alt="" class="img-icon-dev" />
              </div>
            </div>
            <div class="col-10 col-md-10">
              <h2 class="text-left title">UI UX Design</h2>
            </div>
          </div>
          <p class="text-left mt-2">
            One of the UI UX designs that I made for my personal/portfolio web development. 
            This design was made in Figma with a dark theme which is the theme I like because 
            the display helps the eyes not get tired too quickly if they are in front of the 
            computer for too long. Some of the icon materials used are still standard, obtained 
            from Google's Material Icons.
          </p>
        </div>
      </div>
      <div class="line mb-5 mt-5"></div>
      <div
        class="row align-items-center row-cols-1 row-cols-sm-1 row-cols-md-2 mb-3"
      >
        <div class="col col-md-12 col-lg-6 text-left mb-3" data-aos="fade-right">
          <div class="row label">
            <div class="col-2 col-md-2">
              <div class="card circle-icon">
                <img src="../assets/web.svg" alt="" class="img-icon-dev" />
              </div>
            </div>
            <div class="col-10 col-md-10">
              <h2 class="text-left title">Front End Web Developer</h2>
            </div>
          </div>
          <p class="text-left mt-2">
            This is my portfolio website which was developed using the Vue Javascript framework. 
            For CSS using Boostrap which can help implement responsive websites with various 
            desktop screen sizes and smartphone displays.
          </p>
          <!-- <a href="#" class="btn btn-view" role="button"
            ><span>View Site</span></a
          > -->
        </div>
        <div class="col col-md-12 col-lg-6" data-aos="fade-left">
          <div id="carousel-web" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li
                data-target="#carousel-web"
                data-slide-to="0"
                class="active"
              ></li>
              <li data-target="#carousel-web" data-slide-to="1"></li>
              <li data-target="#carousel-web" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="../assets/demo_portfolio1.png"
                  class="d-block w-100 img-carousel"
                  alt=""
                />
              </div>
              <div class="carousel-item">
                <img
                  src="../assets/demo_portfolio2.png"
                  class="d-block w-100 img-carousel"
                  alt=""
                />
              </div>
              <div class="carousel-item">
                <img
                  src="../assets/demo_portfolio3.png"
                  class="d-block w-100 img-carousel"
                  alt=""
                />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carousel-web"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carousel-web"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Portfolio",
};
</script>
<style scoped>
.portfolio {
  background-image: url("../assets/wave-portfolio.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  background-position-y: 0rem;
}
.column-illustration,
.head-portfolio {
  text-align: left;
  margin: 1rem 0 1rem 0;
}
.head-portfolio h1 {
  font-weight: bold;
  color: #afaa30;
}
.portfolio-illustration {
  width: 100%;
  height: auto;
}
.head-portfolio p {
  font-size: 20px;
  color: #b9b9b9;
}
.label {
  padding: 15px;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
}
.circle-icon {
  flex-basis: 70px;
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
.title {
  flex-basis: auto;
  margin: 0rem;
  padding: 0 0 0 1rem;
  font-weight: bold;
  color: #afaa30;
}
.img-icon-dev {
  width: 35px;
  height: auto;
}

.img-carousel {
  width: 100%;
  height: auto;
  border-radius: 20px;
}
.btn-view {
  background: #cdc72f;
  border-radius: 30px;
  margin-top: 1rem;
  font-weight: 500;
  font-size: 18px;
  padding: 0.5rem 2rem 0.5rem 2rem;
}
.carousel-indicators {
  z-index: 1;
}
.line {
  background-color: #afaa30;
  width: 100%;
  height: 3px;
}
</style>
