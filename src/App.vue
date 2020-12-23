<template>
  <div id="app">
    <Navbar />
    <router-view />
    <AdminLogin />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import AdminLogin from './components/AdminLogin'
import { bus } from './main'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    AdminLogin,
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
