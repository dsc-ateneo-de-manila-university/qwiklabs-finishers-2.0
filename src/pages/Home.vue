<template>
  <main>
    <!-- Hero Section -->
    <section class="home-hero-container">
      <div class="text-content-group">
        <div>
          <h1>Showcase your accomplishments</h1>
          <p>
            Now is your opportunity to show the world the variety of quests you
            have finished with Qwiklabs.
          </p>
          <a href="register.html" class="link-holder">
            <button class="btn">Register</button>
          </a>
        </div>
      </div>
    </section>

    <!-- Home Quest Section -->
    <section class="home-quest">
      <h1>What are the latest quests?</h1>
      <p>Check out what’s new with Qwiklabs.</p>
      <div class="cards">
        <div
          v-bind:quests="quests"
          v-for="quest in quests"
          v-bind:key="quest.id"
        >
          <Card v-bind:quest="quest" />
        </div>
      </div>

      <a href="quests.html" class="linkBtn">View more</a>
    </section>

    <!-- Latest Finishers -->
    <section class="home-finishers-container">
      <div class="header-groupings">
        <h1>Featured Finishers</h1>
        <p class="finisher-par">
          Check out tech enthusiasts who were able to finish various Qwiklabs
          quests.
        </p>
      </div>
      <div class="people-collection">
        <div
          v-bind:finishers="finishers"
          v-for="finisher in finishers"
          v-bind:key="finisher.id"
        >
          <Finisher v-bind:finisher="finisher" />
        </div>
      </div>
      <a href="#" class="linkBtn view-more-link">View more</a>
    </section>
  </main>
</template>

<script>
// START: IMPORTS
// START: IMPORT COMPONENTS
import Card from "../components/Card";
import Finisher from "../components/Finisher";
// END: IMPORT COMPONENTS

// START: OTHER IMPORTS
import firebase from "firebase";
import moment from "moment";
import db from "../../public/scripts/firebaseInit.js";
// END: OTHER IMPORTS
// END: IMPORTS

export default {
  components: {
    Card,
    Finisher,
  },
  data() {
    return {
      quests: [],
      finishers: [],
    };
  },

  created() {
    // START OF QUEST
    db.collection("quests")
      .orderBy("name")
      .limitToLast(4)
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
};
</script>


<style scoped>
p {
  line-height: 25.44px;
}

.button-link {
  text-decoration: none;
  color: black;
  font-weight: 700;
}

/* Hero */
.home-hero-container {
  background: url(../assets/images/bg-home-hero.png) 0 0 / cover no-repeat;
  height: 100vh;
  display: flex;
  align-items: flex-end;
}

.text-content-group {
  display: flex;
  align-items: center;
  padding: 50px;
  margin: 0 0 90px 90px;
  opacity: 0.95;
  max-width: 55vw;
  background: #ffffff;
}

.text-content-group h1 {
  margin: 0;
  font-weight: 700;
}

.text-content-group p {
  width: 80%;
  margin: 13px 0;
}

/* Home quests */
.home-quest {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 64px 25px;
}

.home-quest h1 {
  text-align: center;
  margin-bottom: 8px;
}

.home-quest p {
  text-align: center;
}

.cards {
  width: 90%;
}

/*FOR HOME FINSIHERS*/
.home-finishers-container {
  background: #ffd457;
  padding: 64px 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.finisher-par {
  width: 80%;
  margin: auto;
  text-align: center;
}

.home-finishers-container .header-groupings h1 {
  text-align: center;
  margin-bottom: 8px;
}

.home-hero-container .text-content-group .link-holder {
  margin: 8px auto;
  color: #222222;
}

.people-collection {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  width: 90%;
  margin: 20px 0;
}

.home-finishers-container .link-holder {
  margin: 20px auto 0 auto;
}

.home-hero-container .text-content-group .link-holder button {
  display: inline-block;
  border: 3px solid #222222;
  padding: 10px 20px;
  font-weight: bold;
}

.view-more-link {
  color: #222222;
  background: #ffd457;
}

.view-more-link:hover {
  color: #ffd457;
  background-color: #222222;
}

@media screen and (max-width: 1050px) {
  .home-finishers-container .header-groupings h1 {
    font-size: 26px;
  }

  .home-finishers-container .header-groupings h2 {
    font-size: 17px;
  }

  .home-quest h1 {
    font-size: 26px;
    line-height: 28px;
  }

  .home-quest p {
    font-size: 17px;
    line-height: 19px;
  }
}

@media screen and (max-width: 850px) {
  .text-content-group {
    max-width: 70vw;
    margin: 0 auto 10%;
  }

  .text-content-group h1 {
    font-size: 1.5rem;
  }
  .text-content-group p {
    font-size: 0.9rem;
  }
}

@media screen and (max-width: 680px) {
  .text-content-group p {
    width: 100%;
  }
}

@media screen and (max-width: 600px) {
  .home-finishers-container {
    width: 100%;
    padding-right: 10px;
    padding-left: 10px;
  }
}

@media screen and (max-width: 450px) {
  .text-content-group {
    padding: 20px;
  }

  .text-content-group p {
    width: 100%;
    margin: 13px 0;
  }

  .text-content-group {
    max-width: 80vw;
  }
}

@media screen and (max-width: 350px) {
  .people-collection {
    width: 100%;
  }

  .home-quest {
    padding: 64px 13px;
  }
}
</style>