<template>
  <div class="people-collection-child">
    <div>
      <img :src="finisher.image" :alt="finisher.name" />
    </div>
    <div class="person-info">
      <router-link
        class="routerLink"
        :to="{
          name: 'AdminEditFinisher',
          params: { id: finisher.id },
        }"
        v-if="isLoggedIn"
        ><p>{{ finisher.name }}</p></router-link
      >

      <p v-else>{{ finisher.name }}</p>

      <p>{{ finisher.quest }}</p>
      <p>{{ finisher.completionDate }}</p>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "finisher",
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

.people-collection-child {
  display: flex;
  align-items: center;
  width: 25%;
  margin: 32px 0;
  justify-content: center;
  width: 100%;
}

.people-collection-child div img {
  width: 90px;
  height: 90px;
  border-radius: 100%;
}

.person-info p {
  color: #222222;
  margin-left: 12px;
  margin-bottom: 5px;
}

.person-info .person-name {
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #222222;
}

@media screen and (max-width: 600px) {
  .people-collection-child {
    width: 90%;
    margin: 20px auto;
  }

  .people-collection-child div img {
    width: 90px;
    height: 90px;
    margin-right: 5px;
  }

  .person-info p {
    margin-left: 12px;
  }
}
</style>