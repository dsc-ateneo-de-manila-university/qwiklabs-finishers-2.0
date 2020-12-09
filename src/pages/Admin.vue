<template>
  <main>
    <div class="admin__content container">
      <h1>Admin > <strong>Courses</strong></h1>
      <div class="courses">
        <AdminCourse v-for="course in courses" :key="course.id" :imgSrc="course.imgSrc" :title="course.title"/>
      </div>
    </div>
  </main>
</template>

<script>
import AdminCourse from "../components/Admin-Components/AdminCourse.vue"
export default {
  data() {
    return {
      courses: [
      {id: 1, imgSrc:"https://firebasestorage.googleapis.com/v0/b/qwiklabs-finishers-ph-e7667.appspot.com/o/34.png?alt=media&amp;token=e505b745-798e-4e5f-ab5e-5f57548b1e00", title: "Stackdriver Logging"},
      {id: 2, imgSrc:"https://firebasestorage.googleapis.com/v0/b/qwiklabs-finishers-ph-e7667.appspot.com/o/34.png?alt=media&amp;token=e505b745-798e-4e5f-ab5e-5f57548b1e00", title: "Stackdriver Logging"},
      {id: 3, imgSrc:"https://firebasestorage.googleapis.com/v0/b/qwiklabs-finishers-ph-e7667.appspot.com/o/34.png?alt=media&amp;token=e505b745-798e-4e5f-ab5e-5f57548b1e00", title: "Stackdriver Logging"},
      {id: 4, imgSrc:"https://firebasestorage.googleapis.com/v0/b/qwiklabs-finishers-ph-e7667.appspot.com/o/34.png?alt=media&amp;token=e505b745-798e-4e5f-ab5e-5f57548b1e00", title: "Stackdriver Logging"},
      {id: 5, imgSrc:"https://firebasestorage.googleapis.com/v0/b/qwiklabs-finishers-ph-e7667.appspot.com/o/34.png?alt=media&amp;token=e505b745-798e-4e5f-ab5e-5f57548b1e00", title: "Stackdriver Logging"},
      {id: 6, imgSrc:"https://firebasestorage.googleapis.com/v0/b/qwiklabs-finishers-ph-e7667.appspot.com/o/34.png?alt=media&amp;token=e505b745-798e-4e5f-ab5e-5f57548b1e00", title: "Stackdriver Logging"},
      {id: 7, imgSrc:"https://firebasestorage.googleapis.com/v0/b/qwiklabs-finishers-ph-e7667.appspot.com/o/34.png?alt=media&amp;token=e505b745-798e-4e5f-ab5e-5f57548b1e00", title: "Stackdriver Logging"},
      {id: 8, imgSrc:"https://firebasestorage.googleapis.com/v0/b/qwiklabs-finishers-ph-e7667.appspot.com/o/34.png?alt=media&amp;token=e505b745-798e-4e5f-ab5e-5f57548b1e00", title: "Stackdriver Logging"},
      ]
    }
  },
  components: {
    AdminCourse
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
main {
  margin-top: 76px;
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