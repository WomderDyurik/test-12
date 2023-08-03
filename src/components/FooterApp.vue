<template>
  <footer class="footer">
    <h3 class="footer__text">all rights reserved</h3>
  </footer>
</template>

<script setup>
import { defineComponent } from "vue";

defineComponent({
  name: "FooterApp",
});
</script>

<style lang="scss" scoped>
.footer {
  flex-shrink: 0;
  height: 76px;
  display: flex;
  align-items: center;
  justify-content: center;
  &__text {
    font-size: 13px;
    font-weight: 400;
  }
}
</style>
