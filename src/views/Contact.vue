/* eslint-disable vue/valid-v-model */ /* eslint-disable vue/valid-v-model */
<template>
  <div class="contact">
    <div class="container fill-height p-5">
      <transition name="fade" mode="out-in">
        <div
          class="alert"
          v-bind:class="{ 'alert-send': send }"
          role="alert"
          v-if="send"
        >
          <span class="closebtn" v-on:click="hideAlert">&times;</span>
          <p>
            <strong>{{ messageNotif }}</strong>
          </p>
        </div>
      </transition>
      <div
        class="row align-items-center row-cols-1 row-cols-sm-1 row-cols-md-2 mb-5"
      >
        <div class="col col-md-7 column-illustration">
          <img
            src="../assets/contact-illustration.svg"
            alt=""
            class="contact-illustration"
            data-aos="zoom-in-up"
          />
        </div>
        <div
          class="col col-md-5 head-contact"
          data-aos="zoom-in-up"
          data-aos-delay="100"
        >
          <h1>Contact Me</h1>
          <p>
            Do you have any questions? Don't hesitate to contact me by filling
            in the following form.
          </p>
        </div>
      </div>
      <div class="row row-cols-1 row-contact">
        <div
          class="container-item-contact p-2 mb-5"
          data-aos="zoom-in-up"
          data-aos-delay="200"
        >
          <div class="item-contact">
            <img
              class="img_contact_icon"
              src="../assets/telephone.svg"
              alt=""
            />
            <a href="#"><span> +6285255455424</span></a>
          </div>
          <div class="item-contact">
            <img class="img_contact_icon" src="../assets/whatsapp.svg" alt="" />
            <a href="#"><span> +6285255455424</span></a>
          </div>
          <div class="item-contact">
            <img class="img_contact_icon" src="../assets/telegram.svg" alt="" />
            <a href="#"><span> +6285255455424</span></a>
          </div>
          <div class="item-contact">
            <img class="img_contact_icon" src="../assets/email.svg" alt="" />
            <a href="#"><span> irpansyamsuddin@gmail.com</span></a>
          </div>
        </div>
      </div>
      <form @submit.prevent="sendEmail" class="form-contact">
        <div
          class="row row-cols-1 align-items-center row-cols-sm-1 row-cols-md-2"
        >
          <div class="col col-md-6" data-aos="fade-right" data-aos-delay="300">
            <div class="form-group text-left">
              <label for="inputName">Name</label>
              <input
                type="text"
                v-model="name"
                name="name"
                id="inputName"
                class="form-control"
                placeholder="ex: Irpan"
                required
              />
            </div>
          </div>
          <div class="col col-md-6" data-aos="fade-left" data-aos-delay="400">
            <div class="form-group text-left">
              <label for="inputEmail">Email</label>
              <input
                type="email"
                name="email"
                v-model="email"
                id="inputEmail"
                class="form-control"
                placeholder="ex: abc.abc@mail.com"
                required
              />
            </div>
          </div>
        </div>
        <div
          class="row row-cols-1 align-items-center row-cols-sm-1 row-cols-md-2 mb-2"
        >
          <div class="col col-md-6" data-aos="fade-right" data-aos-delay="500">
            <div class="form-group text-left">
              <label for="inputAddress">Address</label>
              <input
                type="text"
                v-model="address"
                name="address"
                id="inputAddress"
                class="form-control"
                placeholder="ex: Jl.Soekarno Hatta etc."
                required
              />
            </div>
          </div>
          <div class="col col-md-6" data-aos="fade-left" data-aos-delay="600">
            <div class="form-group text-left">
              <label for="selectService">What do you need help with ?</label>
              <select
                id="selectService"
                class="form-control"
                v-model="subject"
                name="subject"
                required
              >
                <option>Mobile & Web Design UI/UX</option>
                <option>Android Developer</option>
                <option>Front End Web Developer</option>
                <option>Full Stack Web Developer</option>
              </select>
            </div>
          </div>
        </div>
        <div
          class="form-group text-left"
          data-aos="zoom-in-up"
          data-aos-delay="700"
        >
          <label for="inputDetail">Details</label>
          <textarea
            class="form-control"
            id="inputDetail"
            v-model="details"
            name="details"
            rows="3"
            placeholder="Any more details on the project..."
            required
          ></textarea>
        </div>
        <button
          class="btn btn-template"
          type="submit"
          data-aos="zoom-in-up"
          data-aos-delay="800"
        >
          <font-awesome-icon icon="paper-plane"></font-awesome-icon> SEND
        </button>
      </form>
    </div>
  </div>
</template>
<script>
import emailjs from "emailjs-com";

export default {
  name: "Contact",
  data() {
    return {
      send: false,
      name: "",
      email: "",
      address: "",
      subject: "",
      details: "",
      messageNotif: "",
    };
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm(
          "service_irpanmailjs",
          "template_h6qxdoe",
          e.target,
          "user_ZmqtdcuGPNbVIc2RhkL2L",
          {
            name: this.name,
            email: this.email,
            address: this.address,
            subject: this.subject,
            details: this.details,
          }
        );
        this.send = true;
        this.messageNotif = `Thanks for contacting me, i will get back to you shortly...`;
      } catch (error) {
        console.log({ error });
        this.messageNotif = `Oppss.... something wrong, please try again later`;
      }
      this.name = "";
      this.email = "";
      this.address = "";
      this.subject = "";
      this.details = "";
    },
    hideAlert() {
      this.send = false;
    },
  },
};
</script>
<style scoped>
.fill-height {
  min-height: 100%;
  height: auto !important;
  height: 100vh;
}
.column-illustration,
.head-contact {
  text-align: left;
  margin: 1rem 0 1rem 0;
}
.head-contact h1 {
  font-weight: bold;
  color: #afaa30;
}
.contact-illustration {
  width: 100%;
  height: auto;
}
.head-contact p {
  font-size: 20px;
  color: #b9b9b9;
}
.form-control {
  background: #24241c;
  box-shadow: 5px 10px 30px rgba(0, 0, 0, 0.92);
  border-radius: 5px;
  border: 0;
  color: #b9b9b9;
}
.form-group label {
  color: #afaa30;
  font-size: 1.25rem;
}
.btn-template {
  padding: 0.5rem 4rem;
}
.alert-send {
  color: #79796d;
  background-color: #242306;
  border-color: #24241c;
}
.alert p {
  margin: 0 !important;
}
.closebtn {
  margin-left: 15px;
  color: white;
  font-weight: bold;
  float: right;
  font-size: 22px;
  line-height: 20px;
  cursor: pointer;
  transition: 0.3s;
}
.closebtn:hover {
  color: rgb(110, 112, 5);
}
.row-contact {
  justify-content: center;
}
.img_contact_icon {
  width: 45px;
  height: 45px;
}
.item-contact {
  margin: 0.5rem 0 0.5rem 0;
}
.container-item-contact {
  max-width: 330px;
  height: auto;
  text-align: left;
}
.item-contact a span {
  color: #b9b9b9;
  text-decoration: none;
  padding: 0 0 0 1em;
}
@media screen and (max-width: 768px) {
  .img_contact_icon {
    width: 35px;
    height: 35px;
  }
  .item-contact {
    margin: 0.5rem 0 0.5rem 0;
  }
}
</style>
