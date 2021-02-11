<template>
  <section id="register">
    <div class="register-container">
      <div class="register-form" id="register-form">
        <form id="registrationform" @submit.prevent="onRegister">
          <h1>Register</h1>
          <div class="alert">Message Sent</div>
          <p>
            Fill in the required information for you to be showcased on our
            website.
          </p>
          <br />
          <div class="item">
            <p>First Name</p>
            <input
              type="text"
              id="firstName"
              placeholder="ex. Juan"
              value=""
              v-model="firstName"
            />
          </div>
          <div class="item">
            <p>Last Name</p>
            <input
              type="text"
              id="lastName"
              placeholder="ex. Dela Cruz"
              value=""
              v-model="lastName"
            />
          </div>

          <div class="item">
            <p>Quest Title</p>
            <select
              id="quest-title"
              name="quest-name"
              v-bind:quests="quests"
              v-model="selectedQuest"
            >
              <option disabled selected hidden>Select a quest</option>
              <option v-for="quest in quests" v-bind:key="quest.id">
                {{ quest.name }}
              </option>
            </select>
          </div>
          <div class="item">
            <p>Date of Completion</p>
            <input
              type="date"
              id="date"
              placeholder="Select the date of completion"
              value=""
              v-model="completionDate"
            />
          </div>
          <div class="item">
            <p>Display Photo</p>
            <div class="upload">
              <input
                type="file"
                id="finisher-img"
                name="finisher-img"
                accept="image/*"
                @change="onFilePicked"
              />
            </div>
          </div>
          <div>
            <button
              class="submit-btn"
              id="submit-btn"
              type="submit"
              :disabled="!isFormComplete"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div class="register-photo">
        <img :src="require('@/assets/images/register.jpg')" />
      </div>
    </div>

    <RegisterModal></RegisterModal>
  </section>
</template>

<script>
// START: IMPORTS
// START: IMPORT COMPONENTS
import RegisterModal from "../components/RegisterModal.vue";
// END: IMPORT COMPONENTS

// START: OTHER IMPORTS
import firebase from "firebase";
import db from "../../public/scripts/firebaseInit.js";
// END: OTHER IMPORTS
// END: IMPORTS

export default {
  name: "Register",
  components: {
    RegisterModal,
  },

  data() {
    return {
      firstName: null,
      lastName: null,
      quests: [],
      selectedQuest: null,
      selectedQuestIndex: null,
      completionDate: null,
      isUploaded: false,
      path: null,
      questsDict: [],
      finishers: [],
    };
  },

  created() {
    // START OF QUEST
    db.collection("quests")
      .orderBy("name")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const data = {
            id: doc.id,
            index: doc.data().index,
            name: doc.data().name,
          };
          this.questsDict[data.name] = data.index;
          this.quests.push(data);
        });
      });
    // END OF QUEST

    db.collection("finishers")
      .orderBy("completionDate", "desc")
      .get()
      .then((snapshot) =>
        snapshot.forEach((doc) => {
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

          const data = {
            id: doc.id,
            index: doc.data().index,
            finisherImage: "",
            quest: doc.data().quest,
            firstName: doc.data().firstName,
            lastName: doc.data().lastName,
            isVerified: doc.data().isVerified,
            image: doc.data().image,
          };

          this.finishers.push(data);
        })
      );
  },

  computed: {
    isFormComplete() {
      return (
        this.firstName &&
        this.lastName &&
        this.selectedQuest &&
        this.completionDate
      );
    },

    //START: Check if finisher already existing
    isAlreadyExisting() {
      let answer = false;
      let fullName = this.firstName + " " + this.lastName;

      for (let finisher of this.finishers) {
        let existingFullName = finisher.firstName + " " + finisher.lastName;

        if (fullName.toLowerCase().includes(existingFullName.toLowerCase())) {
          answer = true;
          break;
        }
      }

      return answer;
    },

    pastImage() {
      let answer = null;
      let fullName = this.firstName + " " + this.lastName;

      for (let finisher of this.finishers) {
        let existingFullName = finisher.firstName + " " + finisher.lastName;

        if (fullName.toLowerCase().includes(existingFullName.toLowerCase())) {
          answer = finisher.image;
          break;
        }
      }

      return answer;
    },
    //END: Check if finisher already existing
  },

  methods: {
    onFilePicked(event) {
      this.isUploaded = true;

      const storageRef = firebase.storage().ref();
      const storeRef = storageRef.child("finishers_imgs/");
      let imgRef = storeRef.child(this.firstName + " " + this.lastName);

      const firstFile = event.target.files[0];
      let uploadTask = imgRef.put(firstFile);
      uploadTask.on("state_changed", function progress(snapshot) {
        console.log(snapshot.totalBytesTransferred);
      });
    },

    onRegister(e) {
      e.preventDefault();
      if (confirm("Confirm?")) {
        const storageRef = firebase.storage().ref();
        const storeRef = storageRef.child("finishers_imgs/");
        let imgRef = storeRef.child(this.firstName + " " + this.lastName);

        const modal = document.querySelector(".modal");
        const registerContainer = document.querySelector(".register-container");
        modal.style.display = "flex";
        registerContainer.style.filter = "brightness(70%)";

        if (this.isAlreadyExisting) {
          //IF ALREADY EXISTING
          if (this.isUploaded) {
            console.log(
              "Already Existing, but uploaded new: " + imgRef.fullPath
            );
            this.path = imgRef.fullPath; // if not existing and does upload, get the path.

            this.isUploaded = false;
          } else {
            console.log(
              "Already Existing, but not uploaded: " + this.pastImage
            );
            this.path = this.pastImage;
          }
        } else {
          //IF NEW
          if (this.isUploaded) {
            console.log("New Finisher, but uploaded new: " + imgRef.fullPath);
            this.path = imgRef.fullPath; // if not existing and does upload, get the path.
          } else {
            console.log(
              "New Finisher, but not uploaded: " +
                "finishers-imgs/Waving_GREEN.png"
            );
            this.path = "finishers-imgs/Waving_GREEN.png"; // if not existing and doesnt upload, get android

            this.isUploaded = false;
          }
        }

        db.collection("finishers")
          .add({
            firstName: this.firstName,
            lastName: this.lastName,
            quest: this.selectedQuest,
            index: this.questsDict[this.selectedQuest],
            completionDate: this.completionDate,
            image: this.path,
            isVerified: false,
          })
          .then(() => {
            console.log("Document successfully written!");
          })
          .catch((error) => console.error("Error writing document: ", error));
      }
    },
  },
};
</script>

<style scoped>
/*REGISTER*/
.register-container {
  display: flex;
  flex-direction: row;
  position: relative;
  margin-top: 2%;
  min-height: 70vh;
}

.register-form {
  background: #fff;
  padding: 5% 10%;
  display: inline-block;
  flex-direction: row;
  width: 80%;
}

.register-form h1 {
  margin-top: 5%;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 45px;
  text-align: left;
  letter-spacing: 0.02em;
  color: #222222;
  padding-top: 2vh;
}

.alert {
  text-align: center;
  padding: 10px;
  background: rgb(168, 240, 177);
  color: green;
  margin-bottom: 10px;
  display: none;
}

.register-form p {
  text-align: left;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 25px;
  text-align: left;
  letter-spacing: 0.02em;
  color: #222222;
}

.item {
  position: relative;
  margin: 10px 0;
}

.name-items {
  display: flex;
}

.name-item-1,
.name-item-2 {
  width: 50%;
  position: relative;
}

.name-item-1 {
  padding-right: 50px;
}

.item input,
.item select,
.name-items input {
  display: block;
  background: transparent;
  font-size: 14px;
  line-height: 1.2;
  padding: 10px;
  width: 100%;
}

input {
  border: 1px solid #d2d2d2;
}

::placeholder {
  color: #d2d2d2;
  opacity: 1;
}

.upload {
  border-style: dashed;
  border-width: 1px;
  width: 100%;
  height: 40px;
  color: #d2d2d2;
  display: flex;
  align-items: center;
  background: transparent;
  font-size: 14px;
}

.upload a {
  color: #48d08f;
  text-decoration: none;
}

.submit-btn {
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 10px;
  background: #48d08f;
  border: 2px solid #48d08f;

  font-size: large;
  color: #fff;
  line-height: 1.2;
  letter-spacing: 1px;
}

.submit-btn:hover {
  background-color: white;
  color: #48d08f;
}

.register-photo {
  width: 60%;
  background-image: "@/assets/images/register.jpg";
  height: auto;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  display: inline-flex;
  flex-direction: row;
}

@media screen and (max-width: 1050px) {
  .register-container {
    min-height: 77vh;
  }
  .register-form {
    width: 40%;
    min-width: 480px;
  }
  .register-photo {
    width: 60%;
  }
}

@media screen and (max-width: 768px) {
  .register-container {
    min-height: 70vh;
  }
  .register-form {
    width: 100%;
  }

  .register-photo {
    display: none !important;
  }
}

@media screen and (max-width: 480px) {
  .register-container {
    width: 100%;
    padding-top: 40px;
  }

  .register-form {
    min-width: 0;
    width: 100vw;
    padding: 5% 5%;
  }

  .register-form form {
    max-width: 100vw;
  }

  .register-photo {
    display: none !important;
  }

  .register-form h1 {
    font-size: x-large;
  }
  .register-form p {
    font-style: normal;
    font-weight: normal;
    font-size: small;
    line-height: 20px;
  }
  .submit-btn {
    padding: 10 20px;
    background: #48d08f;
    border-width: 0px;
    cursor: pointer;
    font-size: small;
    color: #fff;
    margin-top: 10px;
  }
}
</style>
