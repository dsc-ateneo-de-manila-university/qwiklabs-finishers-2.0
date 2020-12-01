<template>
  <div class="modal">
    <img
      :src="require('@/assets/images/vectors/reg-confirm.png')"
      alt="green check icon"
    />

    <h1>Thank you for registering</h1>
    <p>
      Our team will review the information you’ve submitted. You’ll receive a
      notification once your submission has been verified.
    </p>
    <router-link class="modal-btn" to="/">Go to Home</router-link>
  </div>
</template>

<script>
export default {
  name: "RegisterModal",
  props: [],
};
</script>

<style scoped>
.modal {
  display: none;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 20vh;
  left: 17.5vw;
  width: 65%;
  padding: 50px 0;
  background-color: white;
  border-top: 16px solid #48d08f;
  z-index: 500;
}

.modal h1 {
  font-style: normal;
  font-weight: bold;
  font-size: 35px;
  text-align: center;
  letter-spacing: 0.02em;
  color: #222222;
  margin: 20px 0;
}

.modal p {
  width: 60%;
  margin-bottom: 40px;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  text-align: center;
  letter-spacing: 0.02em;
  color: #222222;
}

.modal-btn {
  text-decoration: none;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 2.5vw;
  letter-spacing: 0.02em;
  color: #222222;
  padding: 10px;
  border: 2px solid #222222;
}

.modal-btn:hover {
  color: white;
  background-color: #222222;
}

@media screen and (max-width: 1050px) {
  .modal h1 {
    font-size: 20px;
  }

  .modal p {
    width: 80%;
    font-size: 15px;
  }
}

@media screen and (max-width: 480px) {
  .modal h1 {
    font-size: 15px;
  }

  .modal p {
    font-size: 12px;
    margin-bottom: 20px;
  }
}
</style>