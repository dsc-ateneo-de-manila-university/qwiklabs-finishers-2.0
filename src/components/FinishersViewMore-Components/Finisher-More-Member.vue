<template>
  <div>
    <!-- START: FINISHER GROUP BODY -->
    <div class="finisher-more-group-body">
      <div
        class="finisher-member"
        v-for="finisher in finisherGroup.finisherGroupMembers"
        v-bind:key="finisher.finisherId"
      >
        <div>
          <img
            :src="require('@/assets/images/' + finisher.finisherImage + '')"
            alt="finishermage"
          />
          <h5>{{ finisher.finisherName }}</h5>
          <p>{{ finisher.finisherDate }}</p>
        </div>
      </div>
    </div>
    <!-- END: FINISHER GROUP BODY -->
  </div>
</template>

<script>
export default {
  name: "FinisherGroup",
  props: ["finisherGroup"],
};
</script>

<style >
.finisher-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
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
  font-family: "Open Sans", sans-serif;
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
  font-family: "Open Sans", sans-serif;
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