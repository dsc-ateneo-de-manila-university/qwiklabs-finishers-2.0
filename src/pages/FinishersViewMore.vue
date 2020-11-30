<template>
  <main>
    <div class="finisher-more-page">
      <!-- START: HEADER -->
      <div class="finisher-more-page-header">
        <h1>Finishers > <span>Stackdriver Logging</span></h1>
        <div class="finisher-more-page-search">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Search for a quest or finisher"
          />
          <img src="../assets/images/vectors/search.png" />
        </div>
      </div>
      <!-- END: HEADER -->

      <!-- START: Finisher More Content -->
      <div class="finisher-more-content finisher-group">
        <div class="finisher-more-group-body">
          <!-- START: FINISHER MORE MEMBERS -->
          <div
            class="finisher-member"
            v-bind:finishers="finishers"
            v-for="finisher in finishers"
            v-bind:key="finisher.id"
          >
            <FinisherMoreMember v-bind:finisher="finisher"></FinisherMoreMember>
          </div>
          <!-- END: FINISHER MORE MEMBERS -->
        </div>
      </div>
      <!--END: Finisher More Content -->
    </div>
  </main>
</template>

<script>
import FinisherMoreMember from "../components/FinishersViewMore-Components/Finisher-More-Member.vue";
export default {
  name: "FinishersViewMore",
  components: {
    FinisherMoreMember,
  },
  data() {
    return {
      finishers: [
        {
          id: 1,
          image: "Renzo.png",
          name: "Name1",
          date: "date1",
        },
        {
          id: 2,
          image: "logo1.png",
          name: "Name2",
          date: "date2",
        },
        {
          id: 3,
          image: "Renzo.png",
          name: "Name3",
          date: "date3",
        },
        {
          id: 4,
          image: "logo2.png",
          name: "Name4",
          date: "date4",
        },
        {
          id: 5,
          image: "Renzo.png",
          name: "Name5",
          date: "date5",
        },
        {
          id: 6,
          image: "logo2.png",
          name: "Name6",
          date: "date6",
        },
      ],
    };
  },
};
</script>

<style scoped>
/*FOR FINISHERS LEARN MORE PAGE*/
.finisher-more-page {
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #fbfbfb;
  padding: 64px 96px;
  box-sizing: border-box;
  min-height: 100vh;
}

.finisher-more-page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.finisher-more-page-header h1 {
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  letter-spacing: 0.02em;
  color: #222222;
  margin: 20px 0;
  padding-top: 30px;
}
.finisher-more-page-header span {
  font-size: 33px;
  font-weight: bolder;
}
.finisher-more-page-search {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  box-sizing: border-box;
  border: 1px solid #c4c4c4;
  background-color: #fbfbfb;
  margin-top: 30px;
}
.finisher-more-page-search input {
  width: 400px;
  height: 25px;
  font-size: 16px;
  background-color: #fbfbfb;
  border: none;
}
.finisher-more-content {
  display: flex;
  justify-content: space-between;
}

@media screen and (max-width: 1150px) {
  .finisher-more-page-header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .finisher-more-page-search {
    width: 100%;
  }
}
@media screen and (max-width: 800px) {
  .finisher-more-page {
    padding: 64px 57px;
  }
}
@media screen and (max-width: 650px) {
  .finisher-more-page-header h1 {
    font-size: 20px;
    margin-bottom: 0;
  }
  .finisher-more-page-header span {
    font-size: 23px;
  }
}
@media screen and (max-width: 530px) {
  .finisher-more-page {
    padding: 64px 37px;
  }

  .finisher-more-page-header h1 {
    font-size: 17px;
  }
  .finisher-more-page-header span {
    font-size: 20px;
  }
}

/* Styles */
.finisher-group {
  display: flex;
  flex-direction: column;
  margin: 20px 0px;
  background-color: white;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
}

.finisher-more-group-body {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 20px;
  margin: 20px 0;
  background-color: white;
}

.finisher-member {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 18%;
  margin: 0 1% 20px;
  padding: 5%;
}
.finisher-member img {
  width: 100px;
  height: 100px;
  border-radius: 100%;
  overflow: hidden;
}
.finisher-member h5 {
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.02em;
  color: #222222;
  margin-top: 7px;
}
.finisher-member p {
  font-style: normal;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.02em;
  color: #222222;
}
@media screen and (max-width: 850px) {
  .finisher-member {
    width: 23%;
  }
}
@media screen and (max-width: 730px) {
  .finisher-member {
    width: 30%;
  }
}
@media screen and (max-width: 620px) {
  .finisher-member {
    width: 48%;
  }
}
</style>