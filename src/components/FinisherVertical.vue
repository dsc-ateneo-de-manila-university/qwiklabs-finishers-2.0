<template>
  <div class="finisher-member">
    <img :src="finisher.finisherImage" :alt="finisher.name" />
    <router-link
      class="routerLink"
      :to="{
        name: 'AdminEditFinisher',
        params: { id: finisher.id },
      }"
      v-if="isLoggedIn"
      ><h5>{{ finisher.firstName }} {{ finisher.lastName }}</h5></router-link
    >

    <h5 v-else>{{ finisher.firstName }} {{ finisher.lastName }}</h5>

    <p>{{ finisher.completionDate }}</p>
    <br />
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "FinisherMember",
  props: ["finisher"],
  data() {
    return {
      isLoggedIn: false,
    };
  },

  created() {
    if (firebase.auth().currentUser) {
      this.isLoggedIn = true;
    }
  },
};
</script>

<style scoped>
.routerLink {
  text-decoration: none;
  color: #222222;
}
.routerLink:hover {
  text-decoration: underline;
}

.finisher-member {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: calc(100% / 5);
  margin: 0 0 20px;
  box-sizing: border-box;
}

.finisher-member img {
  width: 100px;
  height: 100px;
  border-radius: 100%;
  overflow: hidden;
}

.finisher-member h5 {
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.02em;
  color: #222222;
  margin-top: 7px;
}

.finisher-member p {
  font-style: normal;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.02em;
  color: #222222;
}

@media screen and (max-width: 850px) {
  .finisher-member {
    width: 23%;
  }
}

@media screen and (max-width: 730px) {
  .finisher-member {
    width: 30%;
  }
}

@media screen and (max-width: 620px) {
  .finisher-member {
    width: 48%;
  }
}
</style>