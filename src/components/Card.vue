<template>
  <div class="home-cards-item">
    <div class="home-card">
      <header class="home-card-topbar"></header>
      <div class="home-card-image">
        <img :src="quest.image" alt="quest_image" />
      </div>
      <div class="home-card-content">
        <div class="home-card-title">{{ quest.name }}</div>
        <table class="home-card-text">
          <tr>
            <td>
              <img
                class="home-card-icon"
                src="../assets/images/vectors/level.png"
              /><span>{{ quest.level }}</span>
            </td>

            <td>
              <img
                class="home-card-icon"
                src="../assets/images/vectors/hours.png"
              /><span>{{ quest.hours }}</span
              ><span> hours</span>
            </td>
          </tr>
          <tr>
            <td>
              <img
                class="home-card-icon"
                src="../assets/images/vectors/credits.png"
              /><span>{{ quest.credits }}</span
              ><span> credits</span>
            </td>
            <td>
              <img
                class="home-card-icon"
                src="../assets/images/vectors/steps.png"
              /><span>{{ quest.steps }}</span
              ><span> steps</span>
            </td>
          </tr>
        </table>
        <div class="home-card-btn-holder">
          <router-link
            :to="{
              name: 'QuestsViewMore',
              params: { index: quest.index },
            }"
            ><a class="btn">Learn More</a></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
  props: ["quest", "search"],
};
</script>

<style scoped>
.home-card-topbar {
  justify-content: flex-start;
  width: inherit;
  height: 12px;
  background: #222222;
}

.home-card {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 350px;
  background-color: white;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.home-card-content {
  display: flex;
  justify-content: space-between;
  flex: 1 1 auto;
  flex-direction: column;
  padding: 25px;
}

.home-card-image {
  display: block;
  margin-top: 20px;
  margin-bottom: 0;
}

.home-card-image img {
  width: 89px;
  margin: 0 20px;
}

.home-card-title {
  margin-top: 0;
  font-weight: 700;
  font-size: 20px;
}

.home-card-icon {
  vertical-align: text-bottom;
  margin-right: 5px;
}

.home-card-text {
  margin-bottom: 20px;
  color: #222222;
  border-spacing: 0 10px;
}

.home-card__btn-holder {
  justify-content: flex-start;
}

.home-card-viewmore {
  font-size: 20px;
  line-height: 25px;
  color: #222222;
  text-decoration: none;
  border: 4px solid #222222;
  padding: 14px 28px;
}

.home-card-viewmore:hover {
  color: white;
  background-color: #222222;
}

.btn {
  font-size: 13px;
  border: 2px solid #222222;
}

@media screen and (max-width: 320px) {
  .home-cards {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .home-card-btn {
    width: 70%;
  }
}
</style>