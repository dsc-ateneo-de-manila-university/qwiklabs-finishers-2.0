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
                            
                        }
                    ],
                },
            ]
        }
    }
}
</script>

<style>
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