<template>
  <form class="form" action="#">
    <div class="form__header">
      <h2 class="form__header-title">Дети (макс. 5)</h2>
      <button
        class="form__header-btn"
        v-if="childrens.length <= 4"
        @click.prevent="addChild"
      >
        Добавить ребенка
      </button>
    </div>
    <ChildItem
      v-for="(children, i) in childrens"
      :key="i"
      @updateTargetAge="updateAge(i, $event)"
      @updateTargetName="updateName(i, $event)"
      @deleteChild="deleteChild1(i)"
      :valueName="children.name"
      :valueAge="children.age"
    />
  </form>
</template>

<script setup>
import { defineComponent, ref, defineProps, watch } from "vue";
import { useStore } from "vuex";
import ChildItem from "./ChildItem.vue";

defineComponent({
  name: "FormChild",
  components: {
    ChildItem,
  },
});

const props = defineProps({
  isSave: {
    type: Boolean,
    required: true,
  },
});

const store = useStore();
const childrens = ref([]);
const countInputs = 2;

if (localStorage.childrens) {
  childrens.value = JSON.parse(localStorage.childrens);
}

if (store.getters.getChildrens.length >= 1) {
  childrens.value = store.getters.getChildrens;
}

// eslint-disable-next-line
watch(
  () => props.isSave,
  // eslint-disable-next-line
  (first, second) => {
    childrens.value.forEach((el) => {
      if (Object.keys(el).length == countInputs) {
        store.dispatch("addChildren", { age: el.age, name: el.name });
      }
    });
    localStorage.childrens = JSON.stringify(childrens.value);
  }
);

const addChild = () => {
  childrens.value.push({});
};
const deleteChild1 = (i) => {
  childrens.value.splice(i, 1);
};
const updateAge = (i, event) => {
  childrens.value[i].age = event;
};
const updateName = (i, event) => {
  childrens.value[i].name = event;
};
</script>

<style scoped lang="scss">
.form {
  margin: 23px 0 0;
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 20px;
    &-title {
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      margin-bottom: 20px;
    }
    &-btn {
      border-radius: 100px;
      border: 2px solid #01a7fd;
      display: flex;
      padding: 10px 20px 5px;
      flex-wrap: nowrap;
      background-color: #ffffff;
      color: #01a7fd;
      font-size: 14px;
      line-height: 24px;
      cursor: pointer;
      transition: 0.3s ease;
      &:hover {
        opacity: 0.7;
      }
      &::before {
        content: url("../assets/plus.svg");
      }
    }
  }
}
</style>
