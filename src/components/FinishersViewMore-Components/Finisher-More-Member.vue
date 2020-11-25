<template>
  <div>
    <img
      :src="require('@/assets/images/' + finisher.image + '')"
      alt="finishermage"
    />
    <h5>{{ finisher.name }}</h5>
    <p>{{ finisher.date }}</p>
  </div>
</template>

<script>
export default {
  name: "FinisherMoreMember",
  props: ["finisher"],
};
</script>

<style scoped>
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