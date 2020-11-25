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
        <div
          v-bind:finisherGroups="finisherGroups"
          v-for="finisherGroup in finisherGroups"
          v-bind:key="finisherGroup.finisherGroupId"
        >
          <FinisherGroup v-bind:finisherGroup="finisherGroup"></FinisherGroup>
        </div>
      </div>
      <!--END: Finisher More Content -->
    </div>
  </main>
</template>

<script>
import FinisherGroup from "../components/FinishersViewMore-Components/Finisher-More-Member.vue";
export default {
  name: "Finishers",
  components: {
    FinisherGroup,
  },
  data() {
    return {
      finisherGroups: [
        {
          finisherGroupId: 1,
          finisherGroupImage: "logo1.png",
          finisherGroupName: "Baseline Infrastructure",
          finisherGroupMembers: [
            {
              finisherId: 1,
              finisherImage: "Renzo.png",
              finisherName: "Name1",
              finisherDate: "date1",
            },
            {
              finisherId: 2,
              finisherImage: "logo1.png",
              finisherName: "Name2",
              finisherDate: "date2",
            },
            {
              finisherId: 3,
              finisherImage: "Renzo.png",
              finisherName: "Name3",
              finisherDate: "date3",
            },
            {
              finisherId: 4,
              finisherImage: "logo2.png",
              finisherName: "Name4",
              finisherDate: "date4",
            },
            {
              finisherId: 5,
              finisherImage: "Renzo.png",
              finisherName: "Name5",
              finisherDate: "date5",
            },
            {
              finisherId: 6,
              finisherImage: "Renzo.png",
              finisherName: "Name6",
              finisherDate: "date6",
            },
          ],
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
  font-family: "Open Sans", sans-serif;
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
  font-family: "Open Sans", sans-serif;
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
    align-items: start;
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
</style>