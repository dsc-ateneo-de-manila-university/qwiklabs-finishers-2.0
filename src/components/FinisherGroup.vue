<template>
  <div class="finisher-group">
    <!-- START: FINISHER GROUP HEADER -->
    <div class="finisher-group-header">
      <div class="finisher-group-header-title">
        <img
          :src="finisherGroup[0].questImage"
          :alt="finisherGroup[0].quest"
          style="width: 50px"
        />
        <h3>{{ finisherGroup[0].quest }}</h3>
      </div>
      <div class="finisher-group-header-upperbtn">
        <router-link
          :to="{
            name: 'FinishersViewMore',
            params: { index: finisherGroup[0].index },
          }"
          ><button class="finisher-btn-1">View more</button></router-link
        >
        <router-link
          :to="{
            name: 'QuestsViewMore',
            params: { index: finisherGroup[0].index },
          }"
          ><button class="finisher-btn-2">Check quest</button></router-link
        >
      </div>
    </div>
    <!-- END: FINISHER GROUP HEADER -->

    <!-- START: FINISHER GROUP BODY -->
    <div class="finisher-group-body">
      <div
        class="finisher-member"
        v-for="finisher in finisherGroup"
        v-bind:key="finisher.id"
      >
        <FinisherVertical v-bind:finisher="finisher"></FinisherVertical>
      </div>
    </div>
    <!-- END: FINISHER GROUP BODY -->

    <div class="finisher-group-header-lowerbtn">
      <router-link
        :to="{
          name: 'QuestsViewMore',
          params: { index: finisherGroup[0].index },
        }"
        ><a class="finisher-btn-1"
          >Learn More {{ finisherGroup[0].index }}</a
        ></router-link
      >
      <router-link
        ><a class="finisher-btn-2" target="_blank" href="#"
          >Check Quest</a
        ></router-link
      >
    </div>
  </div>
</template>

<script>
import FinisherVertical from "./FinisherVertical.vue";
export default {
  name: "FinisherGroup",
  components: {
    FinisherVertical,
  },
  props: ["finisherGroup"],
};
</script>

<style scoped>
.finisher-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  background-color: white;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
}

.finisher-group-header {
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  box-sizing: border-box;
}

.finisher-group-header-title img {
  width: 89px;
  margin: 0 20px;
}

.finisher-group-header-title {
  width: 80%;
  display: flex;
  align-items: center;
}

.finisher-group-header-title h3 {
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  letter-spacing: 0.02em;
  color: #222222;
}

.finisher-group-header-upperbtn {
  display: flex;
  justify-content: center;
  align-items: center;
}

.finisher-group-header-lowerbtn {
  display: none;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 20px;
}

.finisher-btn-1 {
  background-color: #ffffff;
  background: #222222;
  border: 1.5px solid #222222;
  box-sizing: border-box;
  padding: 11px 20px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.02em;
  color: #ffffff;
  text-align: center;
  text-decoration: none;
  margin-right: 10px;
  width: 130px;
}

.finisher-btn-1:hover {
  background-color: #ffffff;
  color: #222222;
}

.finisher-btn-2 {
  width: 130px;
  background: white;
  border: 1.5px solid #222222;
  box-sizing: border-box;
  padding: 11px 20px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.02em;
  color: #222222;
  text-align: center;
  text-decoration: none;
  margin-right: 20px;
}

.finisher-btn-2:hover {
  background-color: #222222;
  color: #ffffff;
}

.finisher-group-body {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 20px 0;
}

.finisher-member {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 18%;
  margin: 0 1% 20px;
  padding: 5%;
}

@media screen and (max-width: 850px) {
  .finisher-group-header-upperbtn {
    display: none;
  }

  .finisher-group-header-lowerbtn {
    display: flex;
  }
  .header-container {
    padding-top: 10%;
  }
}

@media screen and (max-width: 620px) {
  .finisher-group-header {
    padding-bottom: 0;
  }

  .finisher-group-header h3 {
    font-size: 20px;
  }

  .finisher-group-header img {
    width: 40px;
    margin: 10px;
  }
}

@media screen and (max-width: 350px) {
  .finisher-group-header-lowerbtn {
    display: flex;
    justify-content: center;
  }

  .finisher-btn-2 {
    margin-right: 0;
  }
}
</style>