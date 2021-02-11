<template>
  <main>
    <div class="finisher-more-page">
      <!-- START: HEADER -->
      <div class="finisher-more-page-header">
        <h1>
          <router-link
            style="text-decoration: none; color: #222222"
            to="/finishers"
            >Finishers</router-link
          >
          > <strong>{{ name }}</strong>
        </h1>

        <div class="finisher-more-page-search">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Search for a finisher"
            v-model="searchFinisher"
          />
          <img src="../assets/images/vectors/search.png" />
        </div>
      </div>
      <!-- END: HEADER -->

      <!-- START: Finisher More Content -->
      <div class="finisher-more-content finisher-group">
        <div class="finisher-more-group-body">
          <!-- START: FINISHER MORE MEMBERS -->
          <FinisherVertical
            v-for="finisher in filteredFinishers"
            :key="finisher.id"
            :finisher="finisher"
          />
          <!-- END: FINISHER MORE MEMBERS -->
        </div>
      </div>
      <!--END: Finisher More Content -->
    </div>
  </main>
</template>

<script>
// START: IMPORTS
// START: IMPORT COMPONENTS
import FinisherVertical from "../components/FinisherVertical.vue";
// END: IMPORT COMPONENTS

// START: OTHER IMPORTS
import firebase from "firebase";
import db from "../../public/scripts/firebaseInit.js";
import moment from "moment";
// END: OTHER IMPORTS
// END: IMPORTS

export default {
  name: "FinishersViewMore",
  components: {
    FinisherVertical,
  },
  data() {
    return {
      index: null,
      name: "",
      searchFinisher: "",
      finishers: [],
    };
  },

  computed: {
    filteredFinishersByVerification() {
      return this.finishers.filter((finisher) => {
        if (finisher.isVerified) {
          return finisher;
        }
      });
    },

    filteredFinishersByQuest() {
      return this.filteredFinishersByVerification.filter((finisher) => {
        return finisher.quest.toLowerCase().includes(this.name.toLowerCase());
      });
    },

    // START: Search Filter Feature
    filteredFinishers() {
      return this.filteredFinishersByQuest.filter((finisher) => {
        if (this.searchFinisher) {
          return (
            finisher.lastName
              .toLowerCase()
              .includes(this.searchFinisher.toLowerCase()) ||
            finisher.firstName
              .toLowerCase()
              .includes(this.searchFinisher.toLowerCase())
          );
        } else {
          return finisher;
        }
      });
    },
    // END: Search Filter Feature
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
            finisherRef = gsReference.child(
              `${doc.data().firstName} ${doc.data().lastName}`
            );
          } else {
            finisherRef = gsReference.child("Waving_GREEN.png");
          }

          this.name = doc.data().quest;

          const data = {
            id: doc.id,
            index: doc.data().index,
            finisherImage: "",
            quest: doc.data().quest,
            firstName: doc.data().firstName,
            lastName: doc.data().lastName,
            completionDate: moment(doc.data().completionDate).format(
              "MMM D, YYYY"
            ),
            isVerified: doc.data().isVerified,
          };

          let that = this;
          finisherRef.getDownloadURL().then(function (url) {
            data.finisherImage = url;
            that.finishers.push(data);
          });
        });
      });
    // END OF FINISHERS
  },

  beforeRouteEnter(to, from, next) {
    db.collection("quests")
      .where("index", "==", to.params.id)
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
            vm.firstName = doc.data().firstName;
            vm.lastName = doc.data().lastName;
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
        .limitToLast(12)
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
            this.firstName = doc.data().firstName;
            this.lastName = doc.data().lastName;
          });
        });
    },
  },
};
</script>


<style scoped>
/*FOR FINISHERS LEARN MORE PAGE*/
.finisher-more-page {
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #fbfbfb;
  padding: 64px 96px;
  box-sizing: border-box;
  min-height: 100vh;
}

.finisher-more-page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.finisher-more-page-header h1 {
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  letter-spacing: 0.02em;
  color: #222222;
  margin: 20px 0;
  padding-top: 30px;
}
.finisher-more-page-header span {
  font-size: 33px;
  font-weight: bolder;
}
.finisher-more-page-search {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  box-sizing: border-box;
  border: 1px solid #c4c4c4;
  background-color: #fbfbfb;
  margin-top: 30px;
}
.finisher-more-page-search input {
  width: 400px;
  height: 25px;
  font-size: 16px;
  background-color: #fbfbfb;
  border: none;
}
.finisher-more-content {
  display: flex;
  justify-content: space-between;
}

@media screen and (max-width: 1150px) {
  .finisher-more-page-header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .finisher-more-page-search {
    width: 100%;
  }
}
@media screen and (max-width: 800px) {
  .finisher-more-page {
    padding: 64px 57px;
  }
}
@media screen and (max-width: 650px) {
  .finisher-more-page-header h1 {
    font-size: 20px;
    margin-bottom: 0;
  }
  .finisher-more-page-header span {
    font-size: 23px;
  }
}
@media screen and (max-width: 530px) {
  .finisher-more-page {
    padding: 64px 37px;
  }

  .finisher-more-page-header h1 {
    font-size: 17px;
  }
  .finisher-more-page-header span {
    font-size: 20px;
  }
}

/* Styles */
.finisher-group {
  display: flex;
  flex-direction: column;
  margin: 20px 0px;
  background-color: white;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
}

.finisher-more-group-body {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 20px;
  margin: 20px 0;
  background-color: white;
}
/* 
.finisher-member {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 18%;
  margin: 0 1% 20px;
  padding: 5%;
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
} */
</style>