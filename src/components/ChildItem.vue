<template>
  <div class="form__item">
    <InputApp
      :label="'Имя'"
      @updateValue="$emit('updateTargetName', $event)"
      :value="valueName"
    />
    <InputApp
      :value="valueAge"
      :label="'Возраст'"
      :type="'number'"
      @updateValue="$emit('updateTargetAge', $event)"
    />
    <button class="form__item-btn" @click.prevent="$emit('deleteChild')">
      Удалить
    </button>
  </div>
</template>

<script setup>
import { defineComponent, defineProps } from "vue";
import InputApp from "./InputApp.vue";
defineComponent({
  name: "ChildItem",
  components: {
    InputApp,
  },
});
defineProps({
  valueName: {
    type: String || Number,
  },
  valueAge: {

  },
});
</script>

<style scoped lang="scss">
.form__item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  &-btn {
    color:  #01a7fd;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    border: none;
    background: #ffffff;
    cursor: pointer;
    transition: 0.3s ease;
    &:hover {
      opacity: 0.7;
    }
  }
}
</style>
