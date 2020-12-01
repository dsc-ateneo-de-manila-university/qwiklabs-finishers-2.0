<template>
  <section id="register">
    <div class="register-container">
      <div class="register-form" id="register-form">
        <form method="POST" id="registrationform">
          <h1>Register</h1>
          <div class="alert">Message Sent</div>
          <p>
            Fill in the required information for you to be showcased on our
            website.
          </p>
          <br />
          <div class="item">
            <p>Full Name</p>
            <input type="text" id="fullName" placeholder="ex. Juan" value="" />
          </div>
          <div class="item">
            <p>Quest Title</p>
            <select id="quest-title" name="quest-name">
              <option disabled selected hidden>Select a quest</option>
            </select>
          </div>
          <div class="item">
            <p>Date of Completion</p>
            <input
              type="date"
              id="date"
              placeholder="Select the date of completion"
              value=""
            />
          </div>
          <div class="item">
            <p>Display Photo</p>
            <div class="upload">
              <input
                type="file"
                id="finisher-img"
                name="finisher-img"
                accept="image/*"
              />
            </div>
          </div>
          <div>
            <button
              class="submit-btn"
              id="submit-btn"
              type="submit"
              v-on:click="login"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div class="register-photo">
        <img :src="require('@/assets/images/register.jpg')" />
      </div>
    </div>

    <RegisterModal></RegisterModal>
  </section>
</template>

<script>
import RegisterModal from "../components/Register-Components/RegisterModal.vue";

export default {
  name: "Register",
  components: {
    RegisterModal,
  },

  data() {
    return {};
  },

  methods: {
    login(e) {
      e.preventDefault();
      const modal = document.querySelector(".modal");
      const registerContainer = document.querySelector(".register-container");
      if (confirm("Confirm?")) {
        modal.style.display = "flex";
        registerContainer.style.filter = "brightness(70%)";
      }
    },
  },
};
</script>

<style>
/*REGISTER*/

.register-container {
  display: flex;
  flex-direction: row;
  position: relative;
  margin-top: 2%;
  min-height: 70vh;
}

.register-form {
  background: #fff;
  padding: 5% 10%;
  display: inline-block;
  flex-direction: row;
  width: 80%;
}

.register-form h1 {
  margin-top: 5%;
  font-family: Google Sans, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 45px;
  text-align: left;
  letter-spacing: 0.02em;
  color: #222222;
  padding-top: 2vh;
}

.alert {
  text-align: center;
  padding: 10px;
  background: rgb(168, 240, 177);
  color: green;
  margin-bottom: 10px;
  display: none;
}

.register-form p {
  text-align: left;
  font-family: Google Sans, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 25px;
  text-align: left;
  letter-spacing: 0.02em;
  color: #222222;
}

.item {
  position: relative;
  margin: 10px 0;
}

.name-items {
  display: flex;
}

.name-item-1,
.name-item-2 {
  width: 50%;
  position: relative;
}

.name-item-1 {
  padding-right: 50px;
}

.item input,
.item select,
.name-items input {
  display: block;
  background: transparent;
  font-size: 14px;
  line-height: 1.2;
  padding: 10px;
  width: 100%;
}

input {
  border: 1px solid #d2d2d2;
}

::placeholder {
  color: #d2d2d2;
  opacity: 1;
}

.upload {
  border-style: dashed;
  border-width: 1px;
  width: 100%;
  height: 40px;
  color: #d2d2d2;
  display: flex;
  align-items: center;
  background: transparent;
  font-size: 14px;
}

.upload a {
  color: #48d08f;
  text-decoration: none;
}

.submit-btn {
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  height: 50px;
  background: #48d08f;
  border-width: 0px;

  font-size: large;
  color: #fff;
  line-height: 1.2;
  letter-spacing: 1px;
}

.register-photo {
  width: 60%;
  background-image: "../assets/images/register.jpg";
  height: auto;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  display: inline-flex;
  flex-direction: row;
}

.modal {
  display: none;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 20vh;
  left: 17.5vw;
  width: 65%;
  padding: 50px 0;
  background-color: white;
  border-top: 16px solid #48d08f;
  z-index: 500;
}

.modal h1 {
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 35px;
  text-align: center;
  letter-spacing: 0.02em;
  color: #222222;
  margin: 20px 0;
}

.modal p {
  width: 60%;
  margin-bottom: 40px;
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  text-align: center;
  letter-spacing: 0.02em;
  color: #222222;
}

.modal-btn {
  text-decoration: none;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 2.5vw;
  letter-spacing: 0.02em;
  color: #222222;
  padding: 10px;
  border: 2px solid #222222;
}

.modal-btn:hover {
  color: white;
  background-color: #222222;
}

@media screen and (max-width: 1050px) {
  .register-container {
    min-height: 77vh;
  }
  .register-form {
    width: 40%;
    min-width: 480px;
  }
  .register-photo {
    width: 60%;
  }

  .modal h1 {
    font-size: 20px;
  }

  .modal p {
    width: 80%;
    font-size: 15px;
  }
}

@media screen and (max-width: 768px) {
  .register-container {
    min-height: 70vh;
  }
  .register-form {
    width: 100%;
  }

  .register-photo {
    display: none !important;
  }
}

@media screen and (max-width: 480px) {
  .register-container {
    width: 100%;
    padding-top: 40px;
  }

  .register-form {
    min-width: 0;
    width: 100vw;
    padding: 5% 5%;
  }

  .register-form form {
    max-width: 100vw;
  }

  .register-photo {
    display: none !important;
  }

  .register-form h1 {
    font-size: x-large;
  }
  .register-form p {
    font-style: normal;
    font-weight: normal;
    font-size: small;
    line-height: 20px;
  }
  .submit-btn {
    padding: 0 20px;
    height: small;
    background: #48d08f;
    border-width: 0px;

    font-size: small;
    color: #fff;
  }

  .modal h1 {
    font-size: 15px;
  }

  .modal p {
    font-size: 12px;
    margin-bottom: 20px;
  }
}

@media screen and (max-width: 411px) {
}
</style>