<template>
  <div>
    <div>Register Modal</div>
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
      <a href="index.html">Go to Home</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterModal",
  props: [],
};
</script>

<style>
</style>