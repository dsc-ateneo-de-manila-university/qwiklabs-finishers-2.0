<template>
  <main>
    <div class="container admin__content">
      <h1>Admin > <strong>Courses</strong></h1>
      <div class="courses">
        <AdminCourseCard
          v-for="course in courses"
          :key="course.id"
          :imgSrc="course.imgSrc"
          :title="course.title"
          :index="course.index"
        />
      </div>
    </div>
  </main>
</template>

<script>
// Internal Imports
import AdminCourseCard from "../components/AdminCourseCard";

// Other imports
import firebase from "firebase";
import db from "../../public/scripts/firebaseInit.js";

export default {
  name: "Admin",
  data() {
    return {
      courses: [],
    };
  },
  created() {
    db.collection("quests")
      .orderBy("name")
      .get()
      .then((snapshot) =>
        snapshot.forEach((doc) => {
          const gsReference = firebase
            .storage()
            .refFromURL("gs://qwiklabs-finishers-ph-e7667.appspot.com/");
          let questRef = gsReference.child(String(doc.data().index) + ".png");

          questRef.getDownloadURL().then((url) => {
            data.imgSrc = url;
          });

          const data = {
            id: doc.id,
            title: doc.data().name,
            index: doc.data().index,
            imgSrc: "",
          };

          this.courses.push(data);
        })
      );
  },

  components: {
    AdminCourseCard,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
main {
  margin-top: 76px;
  min-height: 100vh;
}

.admin__content {
  padding: 30px 0 50px;
}

.courses {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}

@media screen and (max-width: 320px) {
  .courses {
    grid-template-columns: none;
  }
}
</style>