<template>
  <div class="input">
    <label class="input-label">{{ label }}</label>
    <input
      :value="value"
      :type="type"
      class="input-input"
      v-model="value"
      @input="$emit('updateValue', value)"
    />
  </div>
</template>

<script setup>
import { defineComponent, defineProps, ref } from "vue";
defineComponent({
  name: "InputApp",
});
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "text",
  },
  value: {
    
  },
});

const value = ref(props.value);
</script>

<style scoped lang="scss">
.input {
  height: 56px;
  position: relative;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  &-label {
    position: absolute;
    top: 8px;
    left: 16px;
    z-index: 66;
    font-size: 13px;
    color: rgba(17, 17, 17, 0.48);
    font-weight: 400;
    line-height: normal;
  }
  &-input {
    width: 100%;
    min-width: 200px;
    position: absolute;
    top: 0;
    left: 0;
    padding: 26px 16px 6px;
    border-radius: 4px;
    border: 1px solid #f1f1f1;
    z-index: 65;
    font-size: 14px;
    line-height: 24px;
    color: #111;
  }
}
</style>
