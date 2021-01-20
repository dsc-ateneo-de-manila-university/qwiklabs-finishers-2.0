<template>
  <div id="app">
    <Navbar />
    <router-view />
    <LoginModal />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import LoginModal from './components/LoginModal.vue'
import { bus } from './main'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    LoginModal,
  },
  methods: {
    lockBody() {
      document.querySelector('body').classList.toggle('overflow-hidden');
    }
  },
  created() {
    bus.$on('hideOverflow', this.lockBody);
  }
}
</script>

<style>

@font-face{
  font-family: 'Google Sans';
  src: url('./assets/fonts/GoogleSans-Regular-v1.27.ttf');
}

.overflow-hidden {
  overflow: hidden;
}

</style>
