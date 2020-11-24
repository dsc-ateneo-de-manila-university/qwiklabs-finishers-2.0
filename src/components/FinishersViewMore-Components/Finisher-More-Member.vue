<template>
  <div class="finisher-more-member">
    <img :src="require('@/assets/images/' + FinisherMoreMember.image + '')" alt="member">
    <h5>{{FinisherMoreMember.name}}</h5>
    <p>{{FinisherMoreMember.date}}</p>
  </div>
</template>

<script>
export default {
  name: 'FinisherMoreMember',
  props:['FinisherMoreMember']
}
</script>

<style scoped>
.finisher-more-member{
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 14%;
    margin: 0 1% 20px;
}

.finisher-more-member img{
    width: 100px;
}

.finisher-more-member h5{
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

.finisher-more-member p{
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    letter-spacing: 0.02em;
    color: #222222;
}

@media screen and (max-width: 1000px) {
    .finisher-more-member{
        width: 20%;
        margin: 0 2.5% 20px;
    }
}

@media screen and (max-width: 530px) {

    .finisher-more-member{
        width: 48%;
        margin: 0 1% 20px;
    }
}


</style>