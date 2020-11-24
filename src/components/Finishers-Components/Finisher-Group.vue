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
      <div class="finisher-member" v-for="finisher in finisherGroup.finisherGroupMembers" v-bind:key="finisher.finisherId">
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

<style >
.finisher-group{
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    background-color: white;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
}

.finisher-group-header{
    display: flex;
    justify-content: space-between;
    padding: 15px 0;
    box-sizing: border-box;
}

.finisher-group-header-title img{
    width: 89px;
    margin: 0 20px;
}

.finisher-group-header-title{
    width: 80%;
    display: flex;
    align-items: center;
}

.finisher-group-header-title h3{
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    letter-spacing: 0.02em;
    color: #222222;
}

.finisher-group-header-upperbtn{
    display: flex;
    justify-content: center;
    align-items: center;
}

.finisher-group-header-lowerbtn{
    display: none;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 20px;
}

.finisher-btn-1{
    display: none;
    background: #222222;
    border: 1.5px solid #222222;
    box-sizing: border-box;
    padding: 11px 20px;
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 0.02em;
    color: #FFFFFF;
    text-align: center;
    text-decoration: none;
    margin-right: 10px;
}

.finisher-btn-1:hover{
    background-color: #FFFFFF;
    color: #222222;
}

.finisher-btn-2{
    background: white;
    border: 1.5px solid #222222;
    box-sizing: border-box;
    padding: 11px 20px;
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 0.02em;
    color: #222222;
    text-align: center;
    text-decoration: none;
    margin-right: 20px;
}

.finisher-btn-2:hover{
    background-color: #222222;
    color: #FFFFFF;
}

.finisher-group-body{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: 20px 0;
}

.finisher-member{
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 18%;
    margin: 0 1% 20px;
    padding: 5%;
}

.finisher-member img{
    width: 100px;
    height: 100px;
    border-radius: 100%;
    overflow: hidden;
}

.finisher-member h5{
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

.finisher-member p{
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    letter-spacing: 0.02em;
    color: #222222;
}


@media screen and (max-width: 850px) {
  
    .finisher-member{
        width: 23%
    }

    .finisher-group-header-upperbtn{
        display: none;
    }

    .finisher-group-header-lowerbtn{
        display: flex;
    }
    .header-container {
        padding-top:10%;
    }
}

@media screen and (max-width: 730px) {

    .finisher-member{
        width: 30%
    }

}

@media screen and (max-width: 620px) {

    .finisher-group-header{
        padding-bottom: 0;
    }

    .finisher-group-header h3{
        font-size: 20px;
    }

    .finisher-group-header img{
        width: 40px;
        margin: 10px;
    }

    .finisher-member{
        width: 48%
    }

}

@media screen and (max-width: 350px) {

    .finisher-group-header-lowerbtn{
        display: flex;
        justify-content: center;
    }

    .finisher-btn-2{
        margin-right: 0;
    }

}
</style>