<template>
  <main class="view-more">
    <div class="top-lining"></div>

    <section class="view-more__content">
      <article class="view-more__quest m-top">
        <div class="container">
          <img class="view-more__img" :src="image" :alt="name" />
          <h1>{{ name }}</h1>

          <div class="view-more__level">
            <div class="view-card-icon">
              <img src="../assets/images/vectors/level.png" />
              <span>{{ level }}</span>
            </div>
            <div class="view-card-icon">
              <img src="../assets/images/vectors/steps.png" />
              <span>{{ steps }}</span>
              <span> steps</span>
            </div>
            <div class="view-card-icon">
              <img src="../assets/images/vectors/hours.png" /><span>{{
                hours
              }}</span
              ><span> hours</span>
            </div>
            <div class="view-card-icon">
              <img src="../assets/images/vectors/credits.png" /><span>{{
                credits
              }}</span
              ><span> credits</span>
            </div>
          </div>

          <p class="view-more__par m-top">{{ description }}</p>

          <div class="view-more__objectives m-top">
            <div class="view-more__obj" v-for="obj in objectives" :key="obj">
              <img
                src="@/assets/images/vectors/checkmark.png"
                alt="checkmark"
              />
              <span class="obj-par">{{ obj }}</span>
            </div>
          </div>

          <button class="btn btn-reverse m-top">Enroll Quest</button>
          <p class="view-more__instruction">
            Clicking ‘Enroll Quest’ will redirect you to the Qwiklabs’ page for
            this quest.
          </p>
        </div>
      </article>

      <article class="view-more__finishers">
        <div class="container">
          <h2 class="finisher-header">Who finished this quest?</h2>
          <div class="finisher-list">
            <div
              :finishers="finishers"
              v-for="finisher in filteredFinishers"
              :key="finisher.id"
            >
              <Finisher :finisher="finisher" />
            </div>
          </div>
        </div>
      </article>
    </section>
  </main>
</template>

<script>
// START: IMPORTS
// START: IMPORT COMPONENTS
import Finisher from "@/components/Finisher";
// END: IMPORT COMPONENTS

// START: OTHER IMPORTS
import firebase from "firebase";
import db from "../../public/scripts/firebaseInit.js";
import moment from "moment";
// END: OTHER IMPORTS
// END: IMPORTS

export default {
  name: "QuestsViewMore",
  components: {
    Finisher,
  },
  data() {
    return {
      index: null,
      image: null,
      name: null,
      level: null,
      hours: null,
      credits: null,
      steps: null,
      description: null,
      finishers: [],
    };
  },

  computed: {
    filteredFinishers() {
      return this.finishers.filter((finisher) => {
        return finisher.quest.toLowerCase().includes(this.name.toLowerCase());
      });
    },
  },

  created() {
    // START OF FINISHERS
    db.collection("finishers")
      .orderBy("completionDate")
      .limitToLast(12)
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
            finisherRef = gsReference.child(doc.data().name);
          } else {
            finisherRef = gsReference.child("Waving_GREEN.png");
          }

          finisherRef.getDownloadURL().then(function (url) {
            data.image = url;
          });

          const data = {
            id: doc.id,
            index: doc.data().index,
            image: "",
            quest: doc.data().quest,
            name: doc.data().name,
            completionDate: moment(doc.data().completionDate).format(
              "MMM D, YYYY"
            ),
          };
          this.finishers.push(data);
        });
      });
    // END OF FINISHERS
  },

  beforeRouteEnter(to, from, next) {
    db.collection("quests")
      .where("index", "==", to.params.index)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          next((vm) => {
            const gsReference = firebase
              .storage()
              .refFromURL("gs://qwiklabs-finishers-ph-e7667.appspot.com/");

            let questRef = gsReference.child(String(doc.data().index) + ".png");

            questRef.getDownloadURL().then((url) => {
              vm.image = url;
            });

            vm.index = doc.data().index;
            vm.name = doc.data().name;
            vm.level = doc.data().level;
            vm.hours = doc.data().hours;
            vm.credits = doc.data().credits;
            vm.steps = doc.data().steps;
            vm.description = doc.data().description;
          });
        });
      });
  },

  watch: {
    $route: "fetchData",
  },

  methods: {
    fetchData() {
      db.collection("quests")
        .where("index", "==", this.$route.to.params.index)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            const gsReference = firebase
              .storage()
              .refFromURL("gs://qwiklabs-finishers-ph-e7667.appspot.com/");

            let questRef = gsReference.child(String(doc.data().index) + ".png");

            questRef.getDownloadURL().then((url) => {
              this.image = url;
            });

            this.index = doc.data().index;
            this.name = doc.data().name;
            this.level = doc.data().level;
            this.hours = doc.data().hours;
            this.credits = doc.data().credits;
            this.steps = doc.data().steps;
            this.description = doc.data().description;
          });
        });
    },
  },
};
</script>


<style scoped>
.m-top {
  margin-top: 28px;
}

main {
  margin-top: 70px;
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
  width: 50%;
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