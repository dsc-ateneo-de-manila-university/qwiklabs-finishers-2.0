<template>
  <main class="container">
    <section class="quests">
      <div class="quests-container">
        <div class="quest-header-container">
          <h1 class="quests-title">Quests</h1>

          <!-- START: SEARCH -->
          <div class="search-box">
            <input
              type="text"
              id="questSearch"
              placeholder="Search for a quest"
              v-model="search"
              required
            />
            <img src="@/assets/images/vectors/search.png" />
          </div>
        </div>
        <!-- END: SEARCH -->

        <!-- START: CARDS -->
        <div class="cards">
          <div v-for="quest in questSearch" v-bind:key="quest.id">
            <CourseCard class="cards-item" :quest="quest" :search="search" />
          </div>
        </div>
        <!-- END: CARDS -->
      </div>
    </section>
  </main>
</template>

<script>
// START: IMPORTS
// START: IMPORT COMPONENTS
import CourseCard from "../components/CourseCard";
// END: IMPORT COMPONENTS

// START: OTHER IMPORTS
import firebase from "firebase";
import db from "../../public/scripts/firebaseInit.js";
// END: OTHER IMPORTS
// END: IMPORTS

export default {
  name: "quests",
  components: {
    CourseCard,
  },
  data() {
    return {
      quests: [],
      search: "",
    };
  },

  created() {
    // START OF QUEST
    db.collection("quests")
      .orderBy("name")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const gsReference = firebase
            .storage()
            .refFromURL("gs://qwiklabs-finishers-ph-e7667.appspot.com/");
          let questRef = gsReference.child(String(doc.data().index) + ".png");

          questRef.getDownloadURL().then((url) => {
            data.image = url;
          });

          const data = {
            id: doc.id,
            index: doc.data().index,
            image: "",
            name: doc.data().name,
            level: doc.data().level,
            hours: doc.data().hours,
            credits: doc.data().credits,
            steps: doc.data().steps,
          };
          this.quests.push(data);
        });
      });
    // END OF QUEST
  },

  computed: {
    questSearch() {
      return this.quests.filter((quest) => {
        return quest.name.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.quest-header-container {
  margin: 80px 0 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.quests-title {
  font-weight: bold;
  font-size: 30px;
  letter-spacing: 0.02em;
  color: #222222;
  margin: 0;
  padding-top: 30px;
}

.search-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  border: 1px solid #c4c4c4;
  margin-top: 30px;
}

.search-box input {
  width: 400px;
  height: 25px;
  border: none;
}

.search-box input:focus {
  outline: none;
}

@media screen and (max-width: 850px) {
  .quest-header-container {
    flex-direction: column;
    align-items: flex-start;
  }

  .search-box {
    width: 100%;
  }
}

@media screen and (max-width: 500px) {
  button.btn {
    width: 100%;
  }
}
</style>