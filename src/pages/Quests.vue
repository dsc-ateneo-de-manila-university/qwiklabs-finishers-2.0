<template>
  <main>
    <section class="quests">
      <div class="quests-container">
        
        <div class="quest-header-container">
            <h1 class="quests-title">Quests</h1>
            <div class="search-box">
              <input type="text" id="questSearch" placeholder="Search for a quest" onkeyup="questSearch()" required>
              <img src="@/assets/images/vectors/search.png">
            </div>
        </div>
        <div class="cards">
          <Card title="Stackdriver Logging" level="Fundamental" :hours="5" :credits="23" :steps="5"/>
          <Card title="Stackdriver Logging" level="Fundamental" :hours="5" :credits="23" :steps="5"/>
          <Card title="Stackdriver Logging" level="Fundamental" :hours="5" :credits="23" :steps="5"/>
          <Card title="Stackdriver Logging" level="Fundamental" :hours="5" :credits="23" :steps="5"/>
          <Card title="Stackdriver Logging" level="Fundamental" :hours="5" :credits="23" :steps="5"/>
          <Card title="Stackdriver Logging" level="Fundamental" :hours="5" :credits="23" :steps="5"/>
          <Card title="Stackdriver Logging" level="Fundamental" :hours="5" :credits="23" :steps="5"/>
          <Card title="Stackdriver Logging" level="Fundamental" :hours="5" :credits="23" :steps="5"/>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Card from '../components/Card';

export default {
  components: {
    Card
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

main {
  width: 90%;
  margin: 0 auto;
}

.quest-header-container {
  margin: 80px 0 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.quests-title {
    font-weight: bold;
    font-size: 30px;
    letter-spacing: 0.02em;
    color: #222222;
    margin: 0;
    padding-top: 30px;
}

.search-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    border: 1px solid #C4C4C4;
    margin-top: 30px;
}

.search-box input{
    width: 400px;
    height: 25px;
    border: none;
}

.search-box input:focus {
  outline: none;
}



@media screen and (max-width: 850px) {

    .quest-header-container{
        flex-direction: column;
        align-items: flex-start;
    }

    .search-box{
        width: 100%;
    }

}

@media screen and (max-width: 500px) {
  button.btn {
    width: 100%;
  }
}
   

</style>