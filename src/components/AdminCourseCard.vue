<template>
<router-link :to="{ path: `admin/${index}`}">
  <div class="course-card">
      <img :src="imgSrc" alt="">
      <p>{{ title }}</p>
  </div>
</router-link>
</template>

<script>
export default {
    props: {
        imgSrc: String,
        title: String,
        index: String,
    }
}
</script>

<style>
    a {
        color: black;
        text-decoration: none;
    }

    .course-card {
        height: 100px;
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        background: #ffffff;
        padding: 1rem;
        filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.1));
    }

    .course-card img {
        width: 64px;
        margin-right: 20px;
    }

</style>