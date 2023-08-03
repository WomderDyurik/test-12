<template>
  <div class="home">
    <FormPerson :isSave="isSave" />
    <FormChild :isSave="isSave" />
    <button class="home__btn" @click.prevent="savePersonInfo">Сохранить</button>
  </div>
</template>

<script setup>
import FormPerson from "@/components/FormPerson.vue";
import FormChild from "@/components/FormChild.vue";

import { defineComponent, ref } from "vue";

defineComponent({
  name: "HomeView",
  components: {
    FormPerson,
    FormChild,
  },
});

const isSave = ref(false);

const savePersonInfo = () => {
  isSave.value = true;
};
</script>

<style lang="scss">
.home {
  width: 616px;
  margin: 0 auto;
  flex-grow: 1;
  &__btn {
    margin: 20px 0 0 0;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    background:  #01a7fd;
    border: 1px solid #01a7fd;
    color: #ffffff;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    transition: .3s ease;
    cursor: pointer;
    &:hover {
      opacity: .7;
    }
  }
}
</style>
