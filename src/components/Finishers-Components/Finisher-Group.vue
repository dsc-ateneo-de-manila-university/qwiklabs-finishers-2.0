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

.finisher-filter{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25%;
    height: fit-content;
    background-color: white;
    padding: 25px;
    box-sizing: border-box;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
}

.finisher-filter h5{
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 25px;
    letter-spacing: 0.02em;
    color: #222222;
    margin: 20px 0;
    align-self: start;
}

.finisher-filter label{
    align-self: start;
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.02em;
    color: #222222;
    margin-bottom: 3px;
}

.finisher-filter input, .finisher-filter select, .finisher-filter option{
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    letter-spacing: 0.02em;
    border: 1px solid #C4C4C4;
    color: #222222;
    width: 100%;
    height: 40px;
    margin-bottom: 15px;
    padding: 5px;
}

@media screen and (max-width: 1100px) {

    .finisher-page-search{
        display: flex;
    }

    .finisher-groups{
        width: 100%
    }

    .finisher-filter{
        display: none;
    }
}

@media screen and (max-width: 850px) {

    .finisher-page-header{
        flex-direction: column;
    }

    .finisher-page-header h1{
        align-self: flex-start;
        margin-bottom: 0;
    }

    .finisher-page-search{
        width: 100%;
        margin-bottom: 20px;
    }

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

    .finisher-page{
        padding: 64px 76px;
    }

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

@media screen and (max-width: 450px) {

    .finisher-page{
        padding: 64px 26px;
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