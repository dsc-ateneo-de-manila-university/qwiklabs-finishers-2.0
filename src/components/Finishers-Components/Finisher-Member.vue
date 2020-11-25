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
  name: "FinisherMember",
  props: ["finisher"],
};
</script>