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
        <Card title="Stackdriver Logging" level="Fundamental" :hours="5" :credits="23" :steps="5"/>
        <Card title="Stackdriver Logging" level="Fundamental" :hours="5" :credits="23" :steps="5"/>
        <Card title="Stackdriver Logging" level="Fundamental" :hours="5" :credits="23" :steps="5"/>
        <Card title="Stackdriver Logging" level="Fundamental" :hours="5" :credits="23" :steps="5"/>
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
        <Finisher imageName="Renzo.png" name="Renzo Tan" quest="GCP Essentials" date="Nov 18, 2020"/>
        <Finisher imageName="Renzo.png" name="Renzo Tan" quest="GCP Essentials" date="Nov 18, 2020"/>
        <Finisher imageName="Renzo.png" name="Renzo Tan" quest="GCP Essentials" date="Nov 18, 2020"/>
        <Finisher imageName="Renzo.png" name="Renzo Tan" quest="GCP Essentials" date="Nov 18, 2020"/>
        <Finisher imageName="Renzo.png" name="Renzo Tan" quest="GCP Essentials" date="Nov 18, 2020"/>
        <Finisher imageName="Renzo.png" name="Renzo Tan" quest="GCP Essentials" date="Nov 18, 2020"/>
        <Finisher imageName="Renzo.png" name="Renzo Tan" quest="GCP Essentials" date="Nov 18, 2020"/>
        <Finisher imageName="Renzo.png" name="Renzo Tan" quest="GCP Essentials" date="Nov 18, 2020"/>
        <Finisher imageName="Renzo.png" name="Renzo Tan" quest="GCP Essentials" date="Nov 18, 2020"/>
        <Finisher imageName="Renzo.png" name="Renzo Tan" quest="GCP Essentials" date="Nov 18, 2020"/>
        <Finisher imageName="Renzo.png" name="Renzo Tan" quest="GCP Essentials" date="Nov 18, 2020"/>
        <Finisher imageName="Renzo.png" name="Renzo Tan" quest="GCP Essentials" date="Nov 18, 2020"/>
      </div>
      <a href="#" class="linkBtn view-more-link">View more</a>
  </section>

</main>
</template>

<script>
import Card from '../components/Card';
import Finisher from '../components/Finisher'

export default {
  components: {
    Card,
    Finisher
  }
}
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
    background: #FFFFFF;
}

.text-content-group h1 {
    margin: 0;
    font-weight: 700;
}

.text-content-group p{
    width: 80%;
    margin: 13px 0;
}


/* Home quests */
.home-quest{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 64px 25px;
}

.home-quest h1{
    text-align: center;
    margin-bottom: 8px;
}

.home-quest p{
    text-align: center;
}
   
.cards {
  width: 90%;
}

/*FOR HOME FINSIHERS*/
.home-finishers-container {
    background: #FFD457;
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
    grid-template-columns: repeat(auto-fit, minmax(300px ,1fr));
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
    background: #FFD457;
}

.view-more-link:hover {
    color: #FFD457;
    background-color: #222222;
}


@media screen and (max-width: 1050px) {

    .home-finishers-container .header-groupings h1 {
        font-size: 26px;

    }

    .home-finishers-container .header-groupings h2 {
        font-size: 17px;
    }

    .home-quest h1{
        font-size: 26px;
        line-height: 28px;
    }
    
    .home-quest p{
        font-size: 17px;
        line-height: 19px;
    }
}

@media screen and (max-width: 850px) {
    .text-content-group{
        max-width: 70vw;
        margin: 0 auto 10%;
    }

    .text-content-group h1 {
        font-size: 1.5rem;
    }
    .text-content-group p{
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
    .text-content-group{
        padding: 20px;
    }

    .text-content-group p{
      width: 100%;
      margin: 13px 0;
  }

  .text-content-group{
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