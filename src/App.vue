<template>
  <HeaderApp />
  <router-view />
  <FooterApp />
</template>

<script setup>
import HeaderApp from "./components/HeaderApp.vue";
import FooterApp from "./components/FooterApp.vue";
import { defineComponent } from "vue";
defineComponent({
  components: {
    HeaderApp,
    FooterApp,
  },
});
</script>

<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic);
#app {
  font-family: "Montserrat", Helvetica, Arial, sans-serif;
  color: #2c3e50;
  max-width: 1366px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
