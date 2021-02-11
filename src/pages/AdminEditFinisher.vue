<template>
  <main>
    <div class="container admin-course__content">
      <h4>
        <router-link style="text-decoration: none" to="/admin"
          >Admin</router-link
        >
        > <strong><router-link to="/admin">Courses</router-link></strong> >
        <strong
          ><router-link :to="`/admin/${index}`">{{
            quest
          }}</router-link></strong
        >
        >
        <strong>{{ firstName }} {{ lastName }}</strong>
      </h4>

      <section class="finisher-information">
        <article class="view-more__quest m-top">
          <div class="container">
            <form @submit.prevent="updateFinisher">
              <img
                class="view-more__img"
                :src="image"
                :alt="`${firstName} ${lastName}`"
              />

              <h1>{{ firstName }} {{ lastName }}</h1>

              <div class="view-more__level">
                <div class="view-card-icon">
                  <span>{{ quest }}</span>
                </div>

                <div class="view-card-icon">
                  <!-- <span>Date: {{ formattedCompletionDate }}</span> -->
                  <input type="date" v-model="completionDate" />
                </div>
                <div class="view-card-icon">
                  <span v-if="isVerified" style="color: green">Verified</span>
                  <span v-else style="color: red">Unverified</span>
                  <input
                    style="margin-left: 5px"
                    v-model="isVerified"
                    type="checkbox"
                  />
                </div>
              </div>

              <button type="submit" class="btn btn-reverse m-top">
                Update Finisher
              </button>
            </form>
          </div>
        </article>
      </section>
    </div>
  </main>
</template>

<script>
// START: IMPORTS

// START: OTHER IMPORTS
import firebase from "firebase";
import db from "../../public/scripts/firebaseInit.js";
import moment from "moment";
// END: OTHER IMPORTS
// END: IMPORTS

export default {
  name: "AdminEditFinisher",
  data() {
    return {
      id: null,
      firstName: null,
      lastName: null,
      completionDate: null,
      isVerified: null,
      image: null,
      imageURL: null,
      quest: null,
      index: null,
    };
  },

  computed: {
    formattedCompletionDate() {
      return moment(this.completionDate).format("MMM D, YYYY");
    },
  },

  beforeRouteEnter(to, from, next) {
    db.collection("finishers")
      .where(firebase.firestore.FieldPath.documentId(), "==", to.params.id)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          next((vm) => {
            const gsReference = firebase
              .storage()
              .refFromURL(
                "gs://qwiklabs-finishers-ph-e7667.appspot.com/finishers_imgs/"
              );

            let finisherRef = gsReference.child("Waving_GREEN.png");

            if (doc.data().image !== "finishers-imgs/Waving_GREEN.png") {
              finisherRef = gsReference.child(
                `${doc.data().firstName} ${doc.data().lastName}`
              );
            } else {
              finisherRef = gsReference.child("Waving_GREEN.png");
            }
            finisherRef.getDownloadURL().then((url) => {
              vm.image = url;
            });

            vm.id = doc.id;
            vm.firstName = doc.data().firstName;
            vm.lastName = doc.data().lastName;
            vm.completionDate = doc.data().completionDate;
            vm.isVerified = doc.data().isVerified;
            vm.quest = doc.data().quest;
            vm.index = doc.data().index;
            vm.imageURL = doc.data().image;

            // console.log("Before Route Enter: " + vm.imageURL);
          });
        });
      });
  },

  watch: {
    $route: "fetchData",
  },

  methods: {
    fetchData() {
      db.collection("finishers")
        .where(
          firebase.firestore.FieldPath.documentId(),
          "==",
          this.$route.params.id
        )
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            const gsReference = firebase
              .storage()
              .refFromURL(
                "gs://qwiklabs-finishers-ph-e7667.appspot.com/finishers_imgs/"
              );

            let finisherRef = gsReference.child("Waving_GREEN.png");

            if (doc.data().image !== "finishers-imgs/Waving_GREEN.png") {
              finisherRef = gsReference.child(
                `${doc.data().firstName} ${doc.data().lastName}`
              );
            } else {
              finisherRef = gsReference.child("Waving_GREEN.png");
            }

            finisherRef.getDownloadURL().then((url) => {
              this.image = url;
            });

            this.id = doc.id;
            this.firstName = doc.data().firstName;
            this.lastName = doc.data().lastName;
            this.completionDate = doc.data().completionDate;
            this.isVerified = doc.data().isVerified;
            this.quest = doc.data().quest;
            this.index = doc.data().index;
            this.imageURL = doc.data().image;

            // console.log("Fetch Data: " + this.imageURL);
          });
        });
    },

    updateFinisher() {
      if (confirm("Confirm?")) {
        db.collection("finishers")
          .where(
            firebase.firestore.FieldPath.documentId(),
            "==",
            this.$route.params.id
          )
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              doc.ref
                .update({
                  firstName: this.firstName,
                  lastName: this.lastName,
                  completionDate: this.completionDate,
                  isVerified: this.isVerified,
                  index: this.index,
                  image: this.imageURL,
                })
                .then(() =>
                  this.$router.push({
                    path: `/admin/${this.index}`,
                  })
                );
            });
          });
        // console.log("Update Finisher: " + this.imageURL);
      }
    },
  },
};
</script>

<style scoped>
a {
  color: #000000;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

h4 {
  margin-bottom: 15px;
}

.finisher-information {
  padding: 40px 20px;
  background-color: white;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
}

.admin-course__content {
  padding: 30px 0 50px;
}

.m-top {
  margin-top: 28px;
}

main {
  margin-top: 76px;
  min-height: 100vh;
}
.top-lining {
  height: 16px;
  background: #ffd457;
}

.view-more {
  min-height: 100vh;
}

.view-more__content {
  display: flex;
}

/* First Half */
.view-more__quest {
  width: 100%;
}

.view-more__img {
  width: 88.72px;
}

.view-card-icon {
  display: inline;
  margin-right: 26px;
}

.view-card-icon img {
  margin-right: 9px;
}

.view-more__par {
  line-height: 25px;
}

.view-more__obj {
  margin-top: 12px;
}

.view-more__obj img {
  margin-right: 9px;
}

.obj-par {
  line-height: 25px;
}

.view-more__instruction {
  color: #8e8e8e;
  font-size: 12px;
  margin-top: 15px;
  padding-bottom: 50px;
}

/* Second half */
.view-more__finishers {
  padding: 28px 0 100px;
  width: 50%;
  height: 100%;
  background: #fbfbfb;
}

.finisher-header {
  margin-bottom: 24px;
}

.finisher-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.people-collection-child {
  justify-content: flex-start;
  align-items: center;
  margin-left: 20px;
}

.people-collection-child {
  margin: 15px 0;
}

@media screen and (max-width: 1048px) {
  .view-more__content {
    flex-direction: column;
  }

  .view-more__quest,
  .view-more__finishers {
    width: 100%;
  }

  .view-more__finishers {
    margin-top: 28px;
  }
}

@media screen and (max-width: 540px) {
  .finisher-list {
    grid-template-columns: 1fr;
  }

  .view-more__level {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 10px;
  }

  .view-card-icon {
    margin: 0;
  }
}
</style>
