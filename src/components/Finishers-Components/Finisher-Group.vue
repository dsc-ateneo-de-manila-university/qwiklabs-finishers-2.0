<template>
  <div class="finisher-group">

<!-- START: FINISHER GROUP HEADER -->
    <div class="finisher-group-header">
      <div class="finisher-group-header-title">
        <img :src="require('@/assets/images/' + finisherGroup.finisherGroupImage + '')" alt="finisherGroupImage">
        <h3>{{finisherGroup.finisherGroupName}}</h3>
      </div>
      <div class="finisher-group-header-upperbtn">
          <a class="finisher-btn-1" href="#">View More</a>
          <a class="finisher-btn-2" target="_blank" href="#">Check Quest</a>
        </div>
    </div>
<!-- END: FINISHER GROUP HEADER -->

<!-- START: FINISHER GROUP BODY -->
<div class="finisher-group-body">
      <div v-for="finisher in finisherGroup.finisherGroupMembers" v-bind:key="finisher.finisherId" class="finisher-member">
        <FinisherMember v-bind:finisher="finisher"></FinisherMember>
      </div>
    </div>
<!-- END: FINISHER GROUP BODY -->

    <div class="finisher-group-header-lowerbtn">
      <a class="finisher-btn-1" href="#">View More</a>
      <a class="finisher-btn-2" target="_blank" href="#">Check Quest</a>
    </div>

  </div>
</template>

<script>
import FinisherMember from './Finisher-Member.vue';
export default {
  name:'FinisherGroup',
  components:{
    FinisherMember
  },
  props:['finisherGroup']
}
</script>

<style>

</style>