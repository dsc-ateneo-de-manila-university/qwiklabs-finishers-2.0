<template>
  <main>
    <div class="finisher-more-page">
        <div class="finisher-more-page-header">
            <h1>Finishers > <span>Stackdriver Logging</span></h1>
            <div class="finisher-more-page-search">
                <input type="text" id="name" name="name" placeholder="Search for a quest or finisher">
                <img src="assets/images/vectors/search.png">
            </div>
        </div>
        <div class="finisher-more-content">
            <div class="finisher-more-group-body">   
              <div v-bind:FinisherMoreMembers="FinisherMoreMembers" v-for="FinisherMoreMember in FinisherMoreMembers" v-bind:key="FinisherMoreMember.id">           
                <div class="finisher-more-member">
                    <FinisherMoreMember v-bind:FinisherMoreMember="FinisherMoreMember"></FinisherMoreMember>
                </div>
              </div>
            </div>
        </div>
    </div>
  </main>
</template>

<script>
import FinisherMoreMember from '../components/FinishersViewMore-Components/Finisher-More-Member.vue';
export default {
  name:'FinisherViewMore',
  components:{
    FinisherMoreMember
  },
  data(){
    return{
      FinisherMoreMembers:[
        {
          id:1, 
          name:'name1',
          date:'date1',
          image:'Renzo.png'
        },
        {
          id:2, 
          name:'name2',
          date:'date2',
          image:'Renzo.png'
        },
        {
          id:3, 
          name:'name3',
          date:'date3',
          image:'Renzo.png'
        },
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
/*FOR FINISHERS LEARN MORE PAGE*/
.finisher-more-page{
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #FBFBFB;
    padding: 64px 96px;
    box-sizing: border-box;
    min-height:100vh;
}

.finisher-more-page-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.finisher-more-page-header h1{
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    letter-spacing: 0.02em;
    color: #222222;
    margin: 20px 0;
    padding-top: 30px;
}

.finisher-more-page-header span{
    font-size: 33px;
    font-weight: bolder;
}

.finisher-more-page-search{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    box-sizing: border-box;
    border: 1px solid #C4C4C4;
    background-color: #FBFBFB;
    margin-top: 30px;
}

.finisher-more-page-search input{
    width: 400px;
    height: 25px;
    font-family: "Open Sans", sans-serif;
    font-size: 16px;
    background-color: #FBFBFB;
    border: none;
}

.finisher-more-content{
    display: flex;
    justify-content: space-between;
}


.finisher-more-group-body{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding-top: 20px;
    margin: 20px 0;
    background-color: white;
}

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

@media screen and (max-width: 1150px) {
    .finisher-more-page-header{
        display: flex;
        flex-direction: column;
        align-items: start;
    }

    .finisher-more-page-search{
        width: 100%;
    }
}

@media screen and (max-width: 1000px) {
    .finisher-more-member{
        width: 20%;
        margin: 0 2.5% 20px;
    }
}

@media screen and (max-width: 800px) {
    .finisher-more-page{
        padding: 64px 57px;
    }
}

@media screen and (max-width: 650px) {

    .finisher-more-page-header h1{
        font-size: 20px;
        margin-bottom: 0;
    }

    .finisher-more-page-header span{
        font-size: 23px;
    }

    .finisher-more-member{
        width: 30%;
        margin: 0 1.5% 20px;
    }
}

@media screen and (max-width: 530px) {

    .finisher-more-page{
        padding: 64px 37px;
    }
    
    .finisher-more-page-header h1{
        font-size: 17px;
    }

    .finisher-more-page-header span{
        font-size: 20px;
    }

    .finisher-more-member{
        width: 48%;
        margin: 0 1% 20px;
    }
}
</style>