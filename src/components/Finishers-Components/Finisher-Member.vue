<template>
  <div>
    <img :src="require('@/assets/images/' + finisher.finisherImage + '')" alt="finishermage">
    <h5>{{finisher.finisherName}}</h5>
    <p>{{finisher.finisherDate}}</p>
  </div>
</template>

<script>
export default {
  name:'FinisherMember',
  props:['finisher']
}
</script>