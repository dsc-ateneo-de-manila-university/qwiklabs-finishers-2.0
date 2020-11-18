<template>
  <nav>
    <div class="text-container">
      <div class="navigation-primary">
        <router-link tag="a" to="/">
          <img src="../assets/images/logo1.png" alt = "Qwiklabs logo"/>
          <span> FINISHERS</span>
          <img src="../assets/images/logo2.png" alt = "PH Icon"/>
        </router-link>
      </div>

      <div class="navigation-secondary">
        <router-link tag="a" to="/">Home</router-link>
        <router-link tag="a" to="/quests">Quests</router-link>
        <router-link tag="a" to="/finishers">Finishers</router-link>
        <router-link tag="a" to="/register">
          <button id="regBtn">Register</button>
        </router-link>
      </div>

      <div class="burger_button" @click="showMenu">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    showMenu: function() {
      const navSecondary = document.querySelector(".navigation-secondary");
      const burgerBtn = document.querySelector(".burger_button");
      window.addEventListener("resize", () => {
          if(window.innerWidth > 850){
              navSecondary.style.display = "inline-block";
          } else {
              navSecondary.style.display = "none";
          }
      })

      if(navSecondary.style.display !== "flex"){
          navSecondary.style.display = "flex";
          burgerBtn.classList.add("open");
      } else {
          navSecondary.style.display = "none";
          burgerBtn.classList.remove("open");
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

nav {
  position: fixed;
  top: 0;
  width: 100vw;
  height: 72px;
  background-color: white;
  padding: 20px 0;
  z-index: 1000;
  -webkit-box-shadow: 0 4px 6px -6px #222;
  -moz-box-shadow: 0 4px 6px -6px #222;
  box-shadow: 0 4px 6px -6px #222;
  box-sizing: border-box;
}

nav img {
  vertical-align: middle;
  margin-top: -2px;
}

nav a {
  text-decoration: none;
  display: inline-block;
  margin-right: auto;
}

nav span {
  font-family: Circular Std, sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 18.5px;
  line-height: 23px;
  letter-spacing: 0.02em;
  color: #222222;
}

.text-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.navigation-primary,
.navigation-secondary {
  display: inline-block;
}

.navigation-primary {
  margin-left: 25px;
}

.navigation-primary a:hover {
  text-decoration: none;
}

.navigation-secondary a,
.navigation-secondary div {
  font-family: "Google Sans", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  /* identical to box height */
  letter-spacing: 0.02em;
  color: #151522;
  margin-left: 20px;
  margin-right: 20px;
}

.navigation-secondary a:hover {
  text-decoration: underline;
}

.navigation-secondary button {
  display: inline-block;
  border: 1.5px solid #222222;
  box-sizing: border-box;
  padding: 7px 14px;
  background-color: white;
}


.burger_button {
  display: none;
  position: absolute;
  top: 25px;
  right: 25px;
  cursor: pointer;
  margin: 0 16px;
  -webkit-transition: .5s ease-in-out;
  -moz-transition: .5s ease-in-out;
  -o-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
}

#regBtn:hover, #regBtn2:hover {
  background-color: #333; 
  color: #fff;
  cursor: pointer;
}; 

.burger_button div {
  width: 25px;
  height: 3px;
  margin: 3px 0;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  background-color: #333;
  -webkit-transition: .25s ease-in-out;
  -moz-transition: .25s ease-in-out;
  -o-transition: .25s ease-in-out;
  transition: .25s ease-in-out;
}

.burger_button div:nth-child(1) {
  top: 0px;
  /*won't inherit from .burger_button div*/
  width: 25px;
  height: 3px;
  margin: 3px 0;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  background-color: #333;
  -webkit-transition: .25s ease-in-out;
  -moz-transition: .25s ease-in-out;
  -o-transition: .25s ease-in-out;
  transition: .25s ease-in-out;
}
  
.burger_button div:nth-child(2),.burger_button div:nth-child(3) {
  top: 1px;
  /*won't inherit from .burger_button div*/
  width: 25px;
  height: 3px;
  margin: 3px 0;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  background-color: #333;
  -webkit-transition: .25s ease-in-out;
  -moz-transition: .25s ease-in-out;
  -o-transition: .25s ease-in-out;
  transition: .25s ease-in-out;
}
  
.burger_button.open div:nth-child(1) {
  top: 3px;
  width: 0%;
  left: 50%;
}
  
.burger_button.open div:nth-child(2) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}
  
.burger_button.open div:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: translateY(-6px) rotate(-45deg);
}

#quest-title, #completionDate {
  cursor: pointer;
}

@media screen and (max-width: 850px) {

  .text-container{
    display: flex;
    align-items: center;
    margin-top: 5px;
  }

  .navigation-primary{
    position: relative;
    left: auto;
    right: auto;
  }

  nav img {
    width: 124px;
    height: 20px;
  }

  img[alt = "PH Icon"]{
    height: 20px;
    width: 20px;
  }

  nav span{
    font-size: 0.8em;
  }

  .navigation-secondary{
    display: none;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    top: 72px;
    left: 0;
    width: 100%;
    height: 200px;
    background-color: white;
    -webkit-box-shadow: 0 4px 6px -6px #222;
    -moz-box-shadow: 0 4px 6px -6px #222;
    box-shadow: 0 4px 6px -6px #222;
  }

  .burger_button{
    display: block;
  }

  #regBtn {
    border: none;
  }
}

@media screen and (max-width: 320px) {

  .navigation-primary{
    margin-left: 25px;
  }

  nav img {
    width: 100px;
    height: 18px;
  }

  img[alt = "PH Icon"]{
    height: 16px;
    width: 16px;
  }
}

</style>
