<template>
  <div>
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

</style>