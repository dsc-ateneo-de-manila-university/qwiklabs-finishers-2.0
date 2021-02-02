<template>
  <main>
    <div class="finisher-page">
      <div class="finisher-page-header">
        <h1>Finishers</h1>
        <!-- START: SEARCH -->
        <div class="finisher-page-search">
          <input
            type="text"
            id="mobileSearch"
            name="name"
            v-model="searchFinisher"
            placeholder="Search for a finisher"
          />
          <img src="@/assets/images/vectors/search.png" />
        </div>
        <!-- END: SEARCH -->
      </div>

      <div class="finisher-content">
        <!-- START: Finisher Groups -->

        <div class="finisher-groups">
          <div
            v-for="finisherGroup in finisherGroups"
            v-bind:key="finisherGroup.quest"
          >
            <FinisherGroup v-bind:finisherGroup="finisherGroup"></FinisherGroup>
          </div>
        </div>
        <!--END: Finisher Groups -->

        <div class="finisher-filter">
          <h5>Filtered Search</h5>
          <label for="name">Finisher's Name</label>
          <input
            type="text"
            id="filterSearch"
            name="name"
            placeholder="ex. Juan Dela Cruz"
            v-model="searchFinisher"
          />
          <label for="quest">Quest Title</label>
          <select id="quest-title" name="quest-name" v-model="searchQuest">
            <option disabled hidden value="">Select a quest</option>
            <option>View All</option>

            <option
              v-for="finisherGroup in organisedData"
              v-bind:key="finisherGroup.quest"
            >
              {{ finisherGroup[0].quest }}
            </option>
          </select>

          <label for="date">Date of Completion</label>
          <input
            type="date"
            id="completionDate"
            name="date"
            v-model="searchCompletionDate"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
// START: IMPORTS
// START: IMPORT COMPONENTS
import FinisherGroup from "../components/FinisherGroup.vue";
// END: IMPORT COMPONENTS

// START: OTHER IMPORTS
import firebase from "firebase";
import moment from "moment";
import db from "../../public/scripts/firebaseInit.js";
// END: OTHER IMPORTS
// END: IMPORTS

export default {
  name: "Finishers",
  components: {
    FinisherGroup,
  },
  data() {
    return {
      searchFinisher: "",
      searchCompletionDate: null,
      searchQuest: "",
      finishers: [],
    };
  },
  created() {
    // START OF FINISHERS
    db.collection("finishers")
      .orderBy("quest")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // START: Get Images for Each Finisher
          const gsReferenceFinisher = firebase
            .storage()
            .refFromURL(
              "gs://qwiklabs-finishers-ph-e7667.appspot.com/finishers_imgs/"
            );
          let finisherRef = gsReferenceFinisher.child("Waving_GREEN.png");

          if (doc.data().image !== "finishers-imgs/Waving_GREEN.png") {
            finisherRef = gsReferenceFinisher.child(
              doc.data().firstName + " " + doc.data().lastName
            );
          } else {
            finisherRef = gsReferenceFinisher.child("Waving_GREEN.png");
          }

          finisherRef.getDownloadURL().then(function (url) {
            data.finisherImage = url;
          });
          // END: Get Images for Each Finisher

          // START: Get Images for Each Quest
          const gsReferenceQuest = firebase
            .storage()
            .refFromURL("gs://qwiklabs-finishers-ph-e7667.appspot.com/");
          let questRef = gsReferenceQuest.child(
            String(doc.data().index) + ".png"
          );

          questRef.getDownloadURL().then((url) => {
            data.questImage = url;
          });
          // END: Get Images for Each Quest

          const data = {
            id: doc.id,
            index: doc.data().index,
            finisherImage: "",
            questImage: "",
            quest: doc.data().quest,
            firstName: doc.data().firstName,
            lastName: doc.data().lastName,
            completionDate: moment(doc.data().completionDate).format(
              "MMM D, YYYY"
            ),
            isVerified: doc.data().isVerified,
          };
          console.log(data);
          this.finishers.push(data);
        });
      });
    // END OF FINISHERS
  },

  computed: {
    temporaryData() {
      return this.finishers.filter((finisher) => {
        if (finisher.isVerified) {
          return finisher;
        }
      });
    },
    formattedSearchCompletionDate() {
      return this.searchCompletionDate
        ? moment(this.searchCompletionDate).format("MMM D, YYYY")
        : null;
    },
    // START: Search Filter Feature
    filteredFinishers() {
      return this.temporaryData.filter((finisher) => {
        if (this.searchFinisher) {
          this.Quest = "";
          this.searchCompletionDate = "";
          this.formattedSearchCompletionDate = "";
          return (
            finisher.lastName
              .toLowerCase()
              .includes(this.searchFinisher.toLowerCase()) ||
            finisher.firstName
              .toLowerCase()
              .includes(this.searchFinisher.toLowerCase())
          );
        } else if (this.searchQuest) {
          this.searchFinisher = "";
          this.searchCompletionDate = "";
          this.formattedSearchCompletionDate = "";
          return this.searchQuest !== "View All"
            ? finisher.quest.includes(this.searchQuest)
            : finisher;
        } else if (this.formattedSearchCompletionDate) {
          this.searchFinisher = "";
          this.searchQuest = "";
          return finisher.completionDate.includes(
            this.formattedSearchCompletionDate
          )
            ? finisher
            : finisher.completionDate.includes(this.formattedSearchCompletion);
        } else {
          return finisher;
        }
      });
    },
    // END: Search Filter Feature

    // START: For Rearranging the Data Structure from Database
    finisherGroups() {
      const map = {};
      this.filteredFinishers.forEach((obj) => {
        const { quest } = obj;
        if (map[quest]) {
          map[quest].push(obj);
        } else {
          map[quest] = [obj];
        }
      });
      return map;
    },

    // START: For Rearranging the Data Structure from Database
    organisedData() {
      const map = {};
      this.finishers.forEach((obj) => {
        const { quest } = obj;
        if (map[quest]) {
          map[quest].push(obj);
        } else {
          map[quest] = [obj];
        }
      });
      return map;
    },
    // END: For Rearranging the Data Structure from Database
  },
};
</script>

<style scoped>
/*FOR FINISHERS PAGE*/
.finisher-page {
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #fbfbfb;
  padding: 0px 60px;
  box-sizing: border-box;
  min-height: 100vh;
}

.finisher-page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.finisher-page-header h1 {
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  letter-spacing: 0.02em;
  color: #222222;
  margin: 20px 0;
  padding-top: 30px;
}

.finisher-page-search {
  display: none;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  box-sizing: border-box;
  border: 1px solid #c4c4c4;
  background-color: #fbfbfb;
  margin-top: 30px;
}

.finisher-page-search input {
  width: 400px;
  height: 25px;
  font-size: 16px;
  background-color: #fbfbfb;
  border: none;
}

.finisher-quest-mobile {
  font-size: 16px;
  letter-spacing: 0.02em;
  border: 1px solid #c4c4c4;
  background-color: #fbfbfb;
  color: #c4c4c4;
  width: 100%;
  padding: 5px;
  margin-bottom: 20px;
}

.finisher-content {
  display: flex;
  justify-content: space-between;
}

.finisher-groups {
  display: flex;
  flex-direction: column;
  width: 72%;
}

.finisher-filter {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  height: fit-content;
  background-color: white;
  padding: 25px;
  box-sizing: border-box;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
}

.finisher-filter h5 {
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 25px;
  letter-spacing: 0.02em;
  color: #222222;
  margin: 20px 0;
  align-self: start;
}

.finisher-filter label {
  align-self: start;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.02em;
  color: #222222;
  margin-bottom: 3px;
}

.finisher-filter input,
.finisher-filter select,
.finisher-filter option {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  letter-spacing: 0.02em;
  border: 1px solid #c4c4c4;
  color: #222222;
  width: 100%;
  height: 40px;
  margin-bottom: 15px;
  padding: 5px;
}

@media screen and (max-width: 1100px) {
  .finisher-page-search {
    display: flex;
  }

  .finisher-groups {
    width: 100%;
  }

  .finisher-filter {
    display: none;
  }
}

@media screen and (max-width: 850px) {
  .finisher-page-header {
    flex-direction: column;
  }

  .finisher-page-header h1 {
    align-self: flex-start;
    margin-bottom: 0;
  }

  .finisher-page-search {
    width: 100%;
    margin-bottom: 20px;
  }
}

@media screen and (max-width: 620px) {
  .finisher-page {
    padding: 64px 76px;
  }
}

@media screen and (max-width: 450px) {
  .finisher-page {
    padding: 64px 26px;
  }
}
</style>