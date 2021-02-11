<template>
  <main>
    <div
      class="backdrop"
      @click="toggleModal"
      :class="{ 'd-none': isHidden }"
    ></div>
    <div class="admin-modal" :class="{ 'd-none': isHidden }">
      <div class="admin-modal__content">
        <form action="">
          <h1>Admin Login</h1>
          <div class="form-input">
            <p>Email</p>
            <input
              type="text"
              placeholder="Enter your email address"
              v-model="email"
            />
          </div>
          <div class="form-input">
            <p>Password</p>
            <input
              type="password"
              placeholder="Enter your password"
              v-model="password"
            />
          </div>
          <button class="btn btn-reverse admin-submit" @click="login">
            Log In
          </button>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
import firebase from "firebase";
import { bus } from "../main";
export default {
  data() {
    return {
      email: "",
      password: "",
      isHidden: true,
    };
  },
  methods: {
    toggleModal() {
      this.isHidden = !this.isHidden;
      bus.$emit("hideOverflow");
    },

    login(e) {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          () => {
            this.isHidden = !this.isHidden;
            bus.$emit("hideOverflow");
            alert("Login Successful");

            this.$router.go({ path: this.$router.path });
          },
          (err) => alert(err.message)
        );
      e.preventDefault();
    },
  },

  created() {
    bus.$on("openLoginModal", this.toggleModal);
  },
};
</script>

<style scoped>
.d-none {
  display: none; /* Hidden by default */
  opacity: 0;
}

.backdrop {
  position: fixed;
  opacity: 1;
  top: 0;
  left: 0;
  z-index: 10000;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
}

.admin-modal {
  position: fixed;
  opacity: 1;
  top: 20%;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 50%;
  background: white;
  padding: 4rem 3rem 5rem;
  z-index: 10001;
}

.admin-modal__content {
  width: 80%;
  margin: 0 auto;
}

.form-input {
  margin-bottom: 1.5rem;
}

.form-input p {
  margin-bottom: 5px;
}

.form-input input {
  width: 100%;
  height: 40px;
  border: 1px solid #c4c4c4;
  padding: 15px;
}

.form-input input:focus {
  outline: none;
}

.admin-submit {
  margin-top: 20px;
  width: 100%;
}

@media screen and (max-width: 700px) {
  .admin-modal {
    width: 90%;
    padding: 2rem;
  }
}

@media screen and (max-width: 320px) {
  .admin-modal {
    padding: 2rem 1rem;
  }
}

@media screen and (orientation: landscape) and (max-width: 850px) and (max-height: 500px) {
  .admin-modal {
    top: 0px;
    padding: 20px !important;
    width: 50% !important;
  }
}

@media screen and (max-width: 568px) and (max-height: 320px) {
  .admin-submit {
    margin-top: 0;
  }
}
</style>