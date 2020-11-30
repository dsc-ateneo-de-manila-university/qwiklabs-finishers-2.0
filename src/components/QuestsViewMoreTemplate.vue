<template>
  <main class="view-more">
    <div class="top-lining"></div>

    <section class="view-more__content">

      <article class="view-more__quest m-top">
        <div class="container">

          <img class="view-more__img" :src="imgSrc">
          <h1>Stackdriver Logging</h1>

          <div class="view-more__level">
            <div class="view-card-icon">
              <img src="../assets/images/vectors/level.png"><span>{{ level }}</span>
            </div>
            <div class="view-card-icon">
              <img src="../assets/images/vectors/steps.png"><span>{{ steps }}</span><span> steps</span>
            </div>
            <div class="view-card-icon">
              <img src="../assets/images/vectors/hours.png"><span>{{ hours }}</span><span> hours</span>
            </div>
            <div class="view-card-icon">
              <img src="../assets/images/vectors/credits.png"><span>{{ credits }}</span><span> credits</span>
            </div>
          </div>

          <p class="view-more__par m-top">{{ paragraph }}</p>

          <div class="view-more__objectives m-top">
            <div class="view-more__obj" v-for="obj in objectives" :key="obj">
              <img src="@/assets/images/vectors/checkmark.png" alt="checkmark">
              <span class="obj-par">{{ obj }}</span>
            </div>
          </div>

          <button class="btn btn-reverse m-top">Enroll Quest</button>
          <p class="view-more__instruction">Clicking ‘Enroll Quest’ will redirect you to the Qwiklabs’ page for this quest.</p>

        </div>
      </article>

      <article class="view-more__finishers">
        <div class="container">
          <h2 class="finisher-header">Who finished this quest?</h2>
          <div class="finisher-list">
                  <Finisher 
                  v-for="finisher in finishers" :key="finisher.id"
                  :imageName="finisher.imageName" 
                  :name="finisher.name" 
                  :quest="finisher.quest"
                  :date="finisher.date" />
          </div>
        </div>
      </article>  

    </section>
  </main>



</template>

<script>
import Finisher from '@/components/Finisher'
export default {
  data() {
    return {
      
    }
  },
  props: {
      imgSrc: String,
      level: String,
      steps: Number,
      hours: Number,
      credits: Number,
      paragraph: String,
      objectives: Array,
      finishers: Array,
  },
  components: {
    Finisher
  }
}
</script>


<style scoped>

.m-top {
  margin-top: 28px;
}

main {
  margin-top: 70px;
}

.top-lining {
  height: 16px;
  background: #FFD457;
}

.view-more__content {
  display: flex;
}

/* First Half */
.view-more__quest {
  width: 50%;
}

.view-card-icon {
  display: inline;
  margin-right: 26px;
}

.view-card-icon img {
  margin-right: 9px
}

.view-more__par {
  line-height: 25px;
}

.view-more__obj {
  margin-top: 12px;
}

.view-more__obj img {
  margin-right: 9px;
}

.obj-par {
  line-height: 25px;
}

.view-more__instruction {
  color: #8e8e8e;
  font-size: 12px;
  margin-top: 15px;
}

/* Second half */
.view-more__finishers {
  padding: 28px 0 100px;
  width: 50%;
  height: 100%;
  background: #FBFBFB;
}

.finisher-header {
  margin-bottom: 24px;
}

.finisher-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.people-collection-child {
  margin: 15px 0;
}

@media screen and (max-width: 1048px) {
  .view-more__content {
    flex-direction: column;
  }

  .view-more__quest, .view-more__finishers {
    width: 100%;
  }

  .view-more__finishers {
    margin-top: 28px;
  }
}

@media screen and (max-width: 540px) {
  .finisher-list {
    grid-template-columns: 1fr;
  }

  .view-more__level {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 10px
  }

  .view-card-icon {
    margin: 0;
  }
}



</style>