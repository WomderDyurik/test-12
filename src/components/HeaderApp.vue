<template>
  <header class="header">
    <div class="header__logo">
      <img src="/image/logo.svg" alt="" />
    </div>
    <nav class="header__nav">
      <router-link class="header__link" to="/" @click.prevent="activeTab = 0"
        >Форма</router-link
      >
      <router-link
        class="header__link"
        to="/about"
        @click.prevent="activeTab = 1"
        >Превью</router-link
      >
    </nav>
  </header>
</template>

<script setup>
import { defineComponent, ref } from "vue";
defineComponent({
  name: "HeaderApp",
});
const activeTab = ref(0);
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  height: 76px;
  padding: 22px 51px;
  position: relative;
  &__logo {
    padding: 0 41px;
  }
  &__nav {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
  }
  &__link {
    color: rgba(17, 17, 17, 0.48);
    text-decoration: none;
    font-size: 14px;
    line-height: 24px;
    transition: 0.3s ease;
    &:hover {
      color: rgba(17, 17, 17, 1);
    }
    &:not(:last-child) {
      margin-right: 24px;
    }
  }
}
</style>
