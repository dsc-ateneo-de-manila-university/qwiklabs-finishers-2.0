<template>
  <section class="home-hero-container">
    <div class="text-content-group">
      <div>
        <h1>Showcase your accomplishments</h1>
        <p>
          Now is your opportunity to show the world the variety of quests you
          have finished with Qwiklabs.
        </p>
        <a href="register.html" class="link-holder">
          <button class="regBtn2">Register</button>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

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
    background: #FFFFFF;
}

.text-content-group h1 {
    margin: 0;
    font-weight: 700;
}

.text-content-group p{
    width: 70%;
    margin: 10px 0;
    line-height: 25.44px;
}

@media screen and (max-width: 850px) {
    .home-hero-container{
        height : 75vh;
    }
    .text-content-group{
        max-width: 70vw;
        margin: 0 auto 10%;
    }

    .text-content-group h1 {
        font-size: 1.5rem;
    }
    .text-content-group p{
        font-size: 1rem;
    }
}

@media screen and (max-width: 450px) {
    .text-content-group{
        padding: 20px;
    }
    .text-content-group h1 {
        font-size: 1.2rem;
    }
    .text-content-group p{
        font-size: 0.8rem;
    }
}


</style>