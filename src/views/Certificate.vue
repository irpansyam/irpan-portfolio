<template>
  <div class="certificate">
    <div class="container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-transparent">
          <li class="breadcrumb-item">
            <router-link class="router-link" to="/" exact tag="a"
              >Home</router-link
            >
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Certificate
          </li>
        </ol>
      </nav>
      <div class="row row-cols-1 rowcols-sm-1 row-cols-md-2 align-items-center">
        <div class="col col-md-7 column-illustration">
          <img
            src="../assets/certificate-illustration.svg"
            alt="illustration sertificate"
            class="certificate-illustration"
            data-aos="zoom-in-up"
          />
        </div>
        <div class="col col-md-5 head-certificate" data-aos="zoom-in-up">
          <h1>My Certificate</h1>
          <p>
            I have obtained several certificates from a programming training
            institute to improve my skills, especially Android Develover and
            Frontend Developer.
          </p>
        </div>
      </div>
      <div
        class="row row-cols-1 row-cols-sm-1 row-cols-md-2 align-items-center text-left mt-5"
      >
        <div
          class="col col-md-12 col-lg-5 align-items-center"
          data-aos="fade-right"
        >
          <div class="row head-title align-items-center mb-3">
            <div class="col-2 col-md-2">
              <div class="circle-icon">
                <img src="../assets/android.svg" alt="" class="img-icon-dev" />
              </div>
            </div>
            <div class="col-10 col-md-10">
              <h3 class="text-left title">Menjadi Android Developer Expert</h3>
              <h5 class="sub-title mt-2">Dicoding</h5>
            </div>
          </div>
          <p>
            "Menjadi Android Developer Expert" is a class of academy Android
            Expert from dicoding.com which is prepared according to industry
            standards such as Clean Architecture, Reactive Programming using RX
            and Coroutine Flow, Modularization, Continuous Integration,
            Performance, and Security.
          </p>
        </div>
        <div class="col col-md-12 col-lg-7" data-aos="fade-left">
          <a
            href="#"
            id="modal-btn-certificate"
            class="certificate-preview__show-btn"
            data-toggle="modal"
            data-target="#certificate-made-modal"
          >
            <img
              src="../assets/sertifikat_course_made.svg"
              alt="Menjadi Android Developer Expert"
              class="img-certificate"
            />
            <span>Click to display full size</span>
          </a>
        </div>
      </div>
      <div
        class="modal fade"
        id="certificate-made-modal"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-body overflow-auto text-center">
              <div class="certificate-modal__buttons">
                <button
                  type="button"
                  class="btn btn-secondary shadow"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <font-awesome-icon icon="times"></font-awesome-icon>
                </button>
              </div>
              <img
                class="img-certificate-full-size"
                src="../assets/sertifikat_course_made.svg"
                alt="Menjadi Android Developer Expert"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="line-area"></div>

      <div
        class="row row-cols-1 row-cols-sm-1 row-cols-md-2 align-items-center text-left mt-5"
      >
        <div class="col col-md-12 col-lg-7" data-aos="fade-right">
          <a
            href="#"
            id="modal-btn-certificate"
            class="certificate-preview__show-btn"
            data-toggle="modal"
            data-target="#certificate-jetpack-modal"
          >
            <img
              src="../assets/sertifikat_course_jetpack_pro.svg"
              alt="Belajar Android Jepack Pro "
              class="img-certificate"
            />
            <span>Click to display full size</span>
          </a>
        </div>
        <div
          class="col col-md-12 col-lg-5 mt-5 align-items-center"
          data-aos="fade-left"
        >
          <div class="row head-title align-items-center mb-3">
            <div class="col-2 col-md-2">
              <div class="circle-icon">
                <img src="../assets/android.svg" alt="" class="img-icon-dev" />
              </div>
            </div>
            <div class="col-10 col-md-10">
              <h3 class="text-left title">Belajar Android Jetpack Pro</h3>
              <h5 class="sub-title mt-2">Dicoding</h5>
            </div>
          </div>
          <p>
            As a Google Developers Authorized Partner, Dicoding also has classes
            that teach about Android Jetpack Pro and Android Architecture
            Components, which are a collection of libraries and tools to create
            robust and easy-to-maintain applications. What is learned from this
            academy is Testing such as Unit Testing, Instrumentation Testing,
            ViewModel, Android Architecture Component, Repository, Injection,
            LiveData, Retrofit, Idling Resources, Room, Paging and RawQuery.
          </p>
        </div>
      </div>
      <div
        class="modal fade"
        id="certificate-jetpack-modal"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-body overflow-auto text-center">
              <div class="certificate-modal__buttons">
                <button
                  type="button"
                  class="btn btn-secondary shadow"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <font-awesome-icon icon="times"></font-awesome-icon>
                </button>
              </div>
              <img
                class="img-certificate-full-size"
                src="../assets/sertifikat_course_jetpack_pro.svg"
                alt="Belajar Android Jetpack Pro"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="line-area"></div>

      <div
        class="row row-cols-1 row-cols-sm-1 row-cols-md-2 align-items-center text-left mt-5 mb-5"
      >
        <div
          class="col col-md-12 col-lg-5 align-items-center"
          data-aos="fade-right"
        >
          <div class="row head-title align-items-center mb-3">
            <div class="col-2 col-md-2">
              <div class="circle-icon">
                <img src="../assets/web.svg" alt="" class="img-icon-dev" />
              </div>
            </div>
            <div class="col-10 col-md-10">
              <h3 class="text-left title">
                Menjadi Front-End Web Developer Expert
              </h3>
              <h5 class="sub-title mt-2">Dicoding</h5>
            </div>
          </div>
          <p>
            This certificate is intended for Front-End Developers who wish to
            become even more proficient in web development. In this academy
            class, many expert and modern techniques are taught in building
            optimal websites for all devices, especially mobile, accessible,
            maintenable, testable, and high performance devices. Materials are
            based on Google's Mobile Web Specialist curriculum and industry case
            studies.
          </p>
        </div>
        <div class="col col-md-12 col-lg-7" data-aos="fade-left">
          <a
            href="#"
            id="modal-btn-certificate"
            class="certificate-preview__show-btn"
            data-toggle="modal"
            data-target="#certificate-fewde-modal"
          >
            <img
              src="../assets/sertifikat_course_FEWDE.svg"
              alt="Belajar Android Jepack Pro "
              class="img-certificate"
            />
            <span>Click to display full size</span>
          </a>
        </div>
      </div>
      <div
        class="modal fade"
        id="certificate-fewde-modal"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-body overflow-auto text-center">
              <div class="certificate-modal__buttons">
                <button
                  type="button"
                  class="btn btn-secondary shadow"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <font-awesome-icon icon="times"></font-awesome-icon>
                </button>
              </div>
              <img
                class="img-certificate-full-size"
                src="../assets/sertifikat_course_FEWDE.svg"
                alt="Belajar Android Jetpack Pro"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        class="row row-cols-1 row-cols-sm-1 row-cols-md-2 text-center align-items-center"
      >
        <div class="col col-12 col-md-8 text-right">
          <a
            href="https://www.linkedin.com/in/irpan-syamsuddin"
            class="btn btn-border p-2"
            >View all My Cerificate on LinkedIn</a
          >
        </div>
        <div class="col col-12 col-md-4 text-left">
          <router-link
            to="/contact"
            class="btn btn-template p-2 router-link"
            exact
            tag="a"
            >Hire Me</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Certificate",
};
</script>
<style scoped>
.container {
  padding: 0 3rem 3rem;
}
.certificate {
  background-image: url("../assets/wave-moreltd.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  background-position-y: 0rem;
}
.column-illustration,
.head-certificate {
  text-align: left;
  margin: 1rem 0 1rem 0;
}
.head-certificate h1 {
  font-weight: bold;
  color: #afaa30;
}
.head-certificate p {
  font-size: 20px;
  color: #b9b9b9;
}
.certificate-illustration {
  width: 100%;
  height: auto;
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
.sub-title {
  padding: 0 0 0 1rem;
}
.img-icon-dev {
  width: 35px;
  height: auto;
}
.img-certificate {
  width: 100%;
  height: auto;
  border-radius: 10px;
  filter: drop-shadow(5px 10px 30px rgba(95, 97, 16, 0.05));
}
.certificate-preview__show-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
}
.certificate-preview__show-btn:hover {
  opacity: 30%;
  background-color: #2d3e50;
}
.certificate-preview__show-btn span {
  color: black;
  font-size: calc((100vh / 80) + 1em);
  font-weight: 600;
  position: absolute;
  opacity: 0;
}
.certificate-preview__show-btn span:hover {
  opacity: 100%;
}
.modal .modal-dialog {
  max-width: 90%;
  max-height: 90%;
}
.modal-dialog-centered {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  justify-content: center;
}
.modal-dialog-centered::before {
  display: block;
  height: calc(100vh - 1rem);
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  content: "";
}
.modal .modal-content {
  max-height: calc(100vh - 2rem);
  background: #2d3e50 !important;
  border: none;
  max-width: 100%;
  width: 1130px;
}
.modal .modal-body {
  padding: 0;
  background: 0 0;
}
.modal .certificate-modal__buttons {
  position: absolute;
  top: 1rem;
  right: 1rem;
}
.img-certificate-full-size {
  display: inline;
  max-width: 100%;
  height: auto;
  border-radius: 0.25rem;
}
.breadcrumb-item .router-link {
  color: #afaa30;
}
.router-link:hover {
  text-decoration: none;
  font-weight: bold;
}
.btn-template,
.btn-border {
  width: 70%;
}
.btn-template:hover {
  background-color: #605d15;
  box-shadow: 0 0 0 2px;
  color: aliceblue;
}
@media (min-width: 567px) {
  .modal-dialog-centered::before {
    height: calc(100vh - 3.5rem);
    height: -webkit-min-content;
    height: -moz-min-content;
    height: min-content;
  }
  .btn-template,
  .btn-border {
    width: 100%;
    text-align: center;
  }
}
@media screen and (max-width: 567px) {
  .circle-icon {
    width: 50px;
    height: 50px;
  }
  .img-icon-dev {
    width: 35px;
    height: 35px;
  }
  .certificate-preview__show-btn span {
    font-size: 1em;
  }
  .btn-template,
  .btn-border {
    width: 100%;
    text-align: center;
  }
}
@media screen and (max-width: 768px) and (min-width: 567px) {
  .certificate-preview__show-btn span {
    font-size: 1.6em;
  }
}
</style>
