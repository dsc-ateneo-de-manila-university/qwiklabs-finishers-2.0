<template>
  <main>
    <div class="finisher-page">
        <div class="finisher-page-header">
            <h1>Finishers</h1>
            <div class="finisher-page-search">
                <input type="text" id="mobileSearch" name="name" onkeyup="mobileSearch()" placeholder="Search for a finisher">
                <img src="assets/images/vectors/search.png">
            </div>
        </div>
        <div class="finisher-content">
            <!-- START: Finisher Groups -->
            <div class="finisher-groups">
                <div v-bind:finisherGroups="finisherGroups" v-for="finisherGroup in finisherGroups" v-bind:key="finisherGroup.finisherGroupId">
                    <FinisherGroup v-bind:finisherGroup="finisherGroup"></FinisherGroup>
                </div>
            </div>
            <!--END: Finisher Groups -->

            <div class="finisher-filter">
                <h5>Filtered Search</h5>
                <label for="name">Finisher's Name</label>
                <input type="text" id="filterSearch" name="name" onkeyup="finisherSearch()" placeholder="ex. Juan Dela Cruz">
                <label for="quest">Quest Title</label>
                <select id="quest-title" name="quest-name" onchange="questSearch()" >
                    <option disabled selected hidden>Select a quest</option>
                    <option>View All</option>
                </select>
                <label for="date">Date of Completion</label>
                <input type=date id="completionDate" name="date" onchange="dateSearch()" >
            </div>
        </div>
    </div>
  </main>
</template>

<script>
import FinisherGroup from '../components/Finishers-Components/Finisher-Group.vue';
export default {
    name:"Finishers",
    components: {
        FinisherGroup
    },
    data(){
        return{
            finisherGroups:[
                {
                    finisherGroupId:1,
                    finisherGroupImage:'logo1.png',
                    finisherGroupName:'Baseline Infrastructure',
                    finisherGroupMembers:[
                        {
                            finisherId:1,
                            finisherImage:"Renzo.png",
                            finisherName: 'Christian Dominic',
                            finisherDate:'Nov 21, 2019',
                            
                        },
                        {
                            finisherId:2,
                            finisherImage:"logo1.png",
                            finisherName: 'Harvey Sison',
                            finisherDate:'Dec 18, 2019',
                            
                        }
                    ],
                },
                {
                    finisherGroupId:2,
                    finisherGroupImage:'logo2.png',
                    finisherGroupName:'BigQuery Basics for Data Analysts',
                    finisherGroupMembers:[
                        {
                            finisherId:1,
                            finisherImage:"logo2.png",
                            finisherName: 'Harvey Sison',
                            finisherDate:'Oct 27, 2019',
                            
                        },
                        {
                            finisherId:2,
                            finisherImage:"Renzo.png",
                            finisherName: 'Jethro Cullen Sia',
                            finisherDate:'Apr 26, 2020',
                            
                        },
                        {
                            finisherId:3,
                            finisherImage:"logo1.png",
                            finisherName: 'Andy',
                            finisherDate:'Aug 24, 2020',
                            
                        }
                    ],
                },
            ]
        }
    }
}
</script>

<style scoped>
/*FOR FINISHERS PAGE*/
.finisher-page{
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #FBFBFB;
    padding: 64px 96px;
    box-sizing: border-box;
    min-height:100vh;
}

.finisher-page-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.finisher-page-header h1{
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    letter-spacing: 0.02em;
    color: #222222;
    margin: 20px 0;
    padding-top: 30px;
}

.finisher-page-search{
    display: none;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    box-sizing: border-box;
    border: 1px solid #C4C4C4;
    background-color: #FBFBFB;
    margin-top: 30px;
}

.finisher-page-search input{
    width: 400px;
    height: 25px;
    font-family: "Open Sans", sans-serif;
    font-size: 16px;
    background-color: #FBFBFB;
    border: none;
}

.finisher-quest-mobile{
    font-family: "Open Sans", sans-serif;
    font-size: 16px;
    letter-spacing: 0.02em;
    border: 1px solid #C4C4C4;
    background-color: #FBFBFB;
    color: #C4C4C4;
    width: 100%;
    padding: 5px;
    margin-bottom: 20px;
}

.finisher-content{
    display: flex;
    justify-content: space-between;
}

.finisher-groups{
    display: flex;
    flex-direction: column;
    width: 72%;
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


}



@media screen and (max-width: 620px) {

    .finisher-page{
        padding: 64px 76px;
    }
}

@media screen and (max-width: 450px) {

    .finisher-page{
        padding: 64px 26px;
    }

}



</style>