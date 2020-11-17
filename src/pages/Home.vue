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
          <button class="regBtn2">Register</button>
        </a>
      </div>
    </div>
  </section>

  <!-- Home Quest Section -->
  <section class="home-quest">
    <h1>What are the latest quests?</h1>
    <p>Check out what’s new with Qwiklabs.</p>
    <ul class="home-cards">
      <!-- quests from Firestore -->
    </ul>
    <a href="quests.html" class="linkBtn">View more</a>
  </section>

  <!-- Latest Finishers -->
  <section class="home-finishers-container">
      <div class="header-groupings">
        <h1>Featured Finishers</h1>
        <p>
          Check out tech enthusiasts who were able to finish various Qwiklabs
          quests.
        </p>
      </div>
      <div class="people-collection">
        <div>
          <div class="people-collection-child">
            <div>
              <img src="" alt=""/>
            </div>
            <div class="person-info">
              <p class="person-name"></p>
              <p id="quest"></p>
              <p id="completionDate"></p>
            </div>
          </div>
        </div>
      </div>
      <a href="#" class="linkBtn view-more-link">View more</a>
  </section>

</main>

</template>

<script>
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
    margin-bottom: 44px;
}


.home-card-topbar {
    justify-content: flex-start;
    width: inherit;
    height: 12px;
    background: #222222;
  }
   
.home-cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(295px, 2fr));
    list-style: none;
    width: 100%;
    margin: 0;
    padding: 25px;
  }
  
.home-cards-item {
    padding: 1rem;
  }
  
.home-card {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 350px;
    background-color: white;
    box-shadow: 0 0 5px rgba(0,0,0,0.1);
  }
  
.home-card-content {
    display: flex;
    justify-content: space-between;
    flex: 1 1 auto;
    flex-direction: column;
    padding: 25px;
    padding-left: 25px;
  }
  
.home-card-image {
    display: block;
    margin-top: 20px;
    margin-left: 25px;
    margin-bottom: 0;
  }

.home-card-image img {
    width: 89px;
    margin: 0 20px;
}
  
.home-card-title {
    margin-top: 0;
    margin-bottom: 12px;
  }
  
.home-card-icon {
    vertical-align: text-bottom;
    margin-right: 5px;
    font-size: medium !important;
  }
  
.home-card-text {
    margin-bottom: 20px;
    color: #222222;
  }
  
.home-card__btn-holder {
      justify-content: flex-start;
    }
  
.home-card-btn {
    padding: 10px;
    width: 50%;
    background-color: white;
  }
  
.home-card-btn:hover{
    background-color: #222222;
    border-color: #222222;
    color: white;
  }

.home-card-viewmore{
    font-size: 20px;
    line-height: 25px;
    color: #222222;
    text-decoration: none;
    border: 4px solid #222222;
    padding: 14px 28px;
}

.home-card-viewmore:hover{
    color:white;
    background-color: #222222;
}

@media screen and (max-width: 1050px) {

    .home-quest h1{
        font-size: 26px;
        line-height: 28px;
    }
    
    .home-quest p{
        font-size: 17px;
        line-height: 19px;
    }
}


@media screen and (max-width: 320px) {
    .home-cards {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .home-card-btn{
        width: 70%;
    }

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

.home-finishers-container .header-groupings h1 {
    text-align: center;
    margin-bottom: 8px;
}

.home-hero-container .text-content-group .link-holder {
    margin: 8px auto;
    color: #222222;
}

.people-collection {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    padding: 0 25px;
}

.people-collection-child {
    display: flex;
    align-items: center;
    width: 25%;
    margin: 32px 0;
    justify-content: start;
}

.people-collection-child div img{
    width: 90px;
    height: 90px;
    border-radius: 100%;
}

.person-info p {
    font-size: 16px;
    line-height: 20px;
    color: #222222;
    margin-left: 12px;

}

.person-info .person-name {
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    color: #222222;
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
    .people-collection-child {
        width: 50%;

    }

    .home-finishers-container .header-groupings h1 {
        font-size: 26px;

    }

    .home-finishers-container .header-groupings h2 {
        font-size: 17px;
    }
}

@media screen and (max-width: 600px) {
    .home-finishers-container {
        width: 100%;
        padding-right: 10px;
        padding-left: 10px;
    }

    .people-collection-child {
        width: 90%;
        margin: 20px auto;
    }
    
    .people-collection-child div img {
        width: 90px;
        height: 90px;
        margin-right: 5px;
    }

    .person-info p {
        margin-left: 12px;
    }
}

</style>