<template>
  <footer>
    <div class="footer-container">
      <div>
        <router-link tag="a" to="/">
          <img src="../assets/images/logo1.png" alt="Qwiklabs logo" />
          <span>FINISHERS</span>
        </router-link>
      </div>
      <div class="footer-secondary">
        <router-link tag="a" to="/">Home</router-link>
        <router-link tag="a" to="/quests">Quests</router-link>
        <router-link tag="a" to="/finishers">Finishers</router-link>
        <div class="reg-mobile">
          <h1>
            Showcase your <br />
            accomplishments
          </h1>
          <router-link tag="a" to="/register"
            ><button>Register</button></router-link
          >
        </div>
      </div>
    </div>
    <div class="footer-container-lower">
      <div>
        <a
          href="https://dscadmu.org"
          target="_blank"
          description="DSC Loyola Website"
        >
          <p>Made by Developer Student Clubs - Loyola</p>
        </a>
        <p>Copyright © 2020 All rights reserved</p>
      </div>
      <div class="login-container">
        <div v-if="!isLoggedIn">
          <a href="#" id="admin-login" @click="openLoginModal">Admin Log in</a>
        </div>
        <div v-if="isLoggedIn">
          <a href="#" id="admin-login" @click="logout">Admin Log out</a>
          <!-- <a href="#" id="admin-login" @click="openLogoutModal"
            >Admin Log out</a
          > -->
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import firebase from "firebase";
import { bus } from "../main";
export default {
  name: "Footer",
  data() {
    return {
      isLoggedIn: false,
      currentUser: false,
    };
  },

  created() {
    if (firebase.auth().currentUser) {
      this.isLoggedIn = true;
      this.currentUser = firebase.auth().currentUser.email;
    }
  },

  methods: {
    openLoginModal() {
      bus.$emit("openLoginModal");
    },

    openLogoutModal() {
      bus.$emit("openLogouModal");
    },

    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          alert(`You are now logged out`);
          this.$router.go({ path: this.$router.path });
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer {
  background: #222222;
  height: 400px;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 3% 5%;
  bottom: 0 !important;
}

footer .footer-container {
  width: 90vw;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}

footer span {
  font-weight: 900;
  font-size: 18.5px;
  line-height: 23px;
  color: #ffffff;
}
footer a {
  text-decoration: none;
}

footer a:visited {
  color: #c4c4c4;
}

.footer-secondary a:hover {
  color: #fff;
  text-decoration: underline;
}
.footer-container-lower a:hover {
  color: #fff;
}
footer a:active,
.footer-container-lower a:active {
  color: #666;
}

footer img {
  vertical-align: middle;
  margin-top: -5px;
}

footer #footer-finisher {
  font-weight: 900;
  font-size: 18.5px;
  line-height: 23px;
  color: #ffffff;
}

.footer-secondary {
  display: flex;
  justify-content: flex-end;
}

.footer-secondary a {
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  text-decoration: none;
  margin-left: 64px;
}

.reg-mobile {
  display: none;
  padding: 10px 0;
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
  color: #ffffff;
  margin: 10px 0;
}

.reg-mobile h1 {
  font-weight: bold;
  font-size: 21px;
  line-height: 23px;
  color: #ffffff;
}

.reg-mobile button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 40px;
  border: 2px solid white;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;
  background-color: transparent;
}

.footer-container-lower {
  width: 90%;
  margin: 0 auto;
  font-size: 12.8px;
  line-height: 16px;
  color: #c4c4c4;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  left: 5%;
  padding-bottom: 64px;
}

.footer-container-lower div {
  width: auto;
}

.footer-container-lower .login-container {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}

.footer-container-lower .login-container #admin-login {
  font-weight: normal;
  font-size: 12.8px;
  line-height: 16px;
  text-align: right;
  color: #8e8e8e;
  text-decoration: underline;
}

@media screen and (min-width: 750px) {
  footer {
    height: 300px;
  }
}

@media screen and (max-width: 700px) {
  .footer-container {
    flex-direction: column;
    padding-top: 34px;
    padding-left: 10px;
  }

  footer span {
    font-size: 16.5px;
  }

  footer #footer-finisher {
    font-size: 18.5px;
  }

  .footer-secondary {
    flex-direction: column;
  }

  .footer-secondary a {
    margin: 15px 0 0 0;
    font-size: 14px;
  }

  .footer-secondary a:nth-child(4) {
    display: none;
  }

  .reg-mobile {
    display: block;
    font-size: 16px;
  }

  .reg-mobile h1 {
    font-size: 19px;
  }

  .reg-mobile button {
    font-size: 12px;
  }

  .footer-container-lower {
    left: 0;
    width: 100%;
    font-size: 10.8px;
  }

  .footer-container-lower div:first-child {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    font-size: 2vw;
    background-color: #111111;
  }

  .footer-container-lower p:first-child {
    margin-right: 2px;
  }

  .footer-container-lower .login-container {
    display: none;
  }

  .footer-container-lower .login-container #admin-login {
    font-size: 10.8px;
  }
}

@media screen and (max-width: 420px) {
  .footer-container {
    width: 100vw;
  }
}
</style>