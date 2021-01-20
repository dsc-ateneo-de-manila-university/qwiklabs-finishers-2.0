<template>
  <section id="register">
    <div class="register-container">
      <div class="register-form" id="register-form">
        <form method="POST" id="registrationform" @submit="login" >
          <h1>Register</h1>
          <div class="alert">Message Sent</div>
          <p>
            Fill in the required information for you to be showcased on our
            website.
          </p>
          <br />
          <div class="item">
            <p>First Name</p>
            <input
              type="text"
              id="fullName"
              placeholder="ex. Juan"
              value=""
              v-model="firstName"
            />
          </div>
          <div class="item">
            <p>Last Name</p>
            <input
              type="text"
              id="fullName"
              placeholder="ex. Dela Cruz"
              value=""
              v-model="lastName"
            />
          </div>
          <div class="item">
            <p>Quest Title</p>
            <select
              id="quest-title"
              name="quest-name"
              v-bind:questTitles="questTitles"
              v-model="questTitle"
            >
              <option disabled selected hidden>Select a quest</option>
              <option
                v-for="questTitle in questTitles"
                v-bind:key="questTitle.id"
              >
                {{ questTitle.title }}
              </option>
            </select>
          </div>
          <div class="item">
            <p>Date of Completion</p>
            <input
              type="date"
              id="date"
              placeholder="Select the date of completion"
              value=""
              v-model="dateOfCompletion"
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
              :disabled="!isFormComplete"
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
    return {
      firstName: "",
      lastName: "",
      questTitle: "",
      dateOfCompletion: "",
      questTitles: [
        { id: 1, title: "Baseline Data,ML,AI" },
        { id: 2, title: "Baseline Infrastructure" },
        { id: 3, title: "BigQuery Basics for Data Analysts" },
        { id: 4, title: "Cloud Engineering" },
        { id: 5, title: "DevOps Essentials" },
        { id: 6, title: "GCP Essentials" },
        { id: 7, title: "Google Developer Essentials" },
        { id: 8, title: "OK Google: Build Interactive Apps with Google Assistant" },
      ],
    };
  },

  computed: {
    isFormComplete() {
      return this.firstName && this.lastName && this.questTitle && this.dateOfCompletion;
    },
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

<style scoped>
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
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 10px;
  background: #48d08f;
  border-width: 0px;

  font-size: large;
  color: #fff;
  line-height: 1.2;
  letter-spacing: 1px;
}

.register-photo {
  width: 60%;
  background-image: "@/assets/images/register.jpg";
  height: auto;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  display: inline-flex;
  flex-direction: row;
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
    padding: 10 20px;
    background: #48d08f;
    border-width: 0px;
    cursor: pointer;
    font-size: small;
    color: #fff;
    margin-top: 10px;
  }
}
</style>
