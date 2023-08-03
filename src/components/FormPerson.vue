<template>
  <form class="form" action="#">
    <h2 class="form__title">Персональные данные</h2>
    <InputApp :label="'Имя'" :value="name" @updateValue="updateValueName" />
    <InputApp
      :label="'Возраст'"
      :value="age"
      :type="'number'"
      @updateValue="updateValueAge"
    />
  </form>
</template>

<script setup>
import { defineComponent, defineProps, watch, ref } from "vue";
import { useStore } from "vuex";
import InputApp from "./InputApp.vue";
defineComponent({
  name: "FormPerson",
  components: {
    InputApp,
  },
});
const props = defineProps({
  isSave: {
    type: Boolean,
    required: true,
  },
});

const store = useStore();
const name = ref("");
const age = ref("");

if (Object.keys(store.getters.getPerson).length > 0) {
  name.value = store.getters.getPerson.name;
  age.value = store.getters.getPerson.age;
}

if (localStorage.person) {
  const person = JSON.parse(localStorage.person);
  name.value = person.name;
  age.value = person.age;
}
const updateValueName = (value) => {
  name.value = value;
};
const updateValueAge = (value) => {
  age.value = value;
};

watch(
  () => props.isSave,
  // eslint-disable-next-line
  (first, second) => {
    store.dispatch("changePersonInfo", { age: age.value, name: name.value });
    localStorage.person = JSON.stringify({ age: age.value, name: name.value });
  }
);
</script>

<style scoped lang="scss">
.form__title {
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 20px;
}
</style>
