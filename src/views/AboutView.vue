<template>
  <div class="about">
    <div v-if="person.name">
      <div class="about__person">
        <h3 class="about__person-title">Персональные данные</h3>
        <div class="about__person-info">
          {{ `${person.name}${aged(person.age)}` }}
        </div>
      </div>
      <div v-if="childrens.length > 0">
        <h3 class="about__person-title">Дети</h3>
        <div class="about__childrens">
          <div
            class="about__childrens-info"
            v-for="(children, i) in childrens"
            :key="i"
          >
            {{ `${children.name}${aged(children.age)}` }}
          </div>
        </div>
      </div>
    </div>
    <h2 v-else>Заполните информациюю в форме</h2>
  </div>
</template>

<script setup>
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

defineComponent({
  name: "AboutView",
});

const store = useStore();

const person = computed(() => {
  if (localStorage.person) {
    return JSON.parse(localStorage.person);
  }
  return store.getters.getPerson;
});

const childrens = computed(() => {
  if (localStorage.childrens) {
    return JSON.parse(localStorage.childrens);
  }
  return store.getters.getChildrens;
});

const aged = (age) => {
  if (age) {
    let txt,
      count = age % 100;
    count >= 5 && count <= 20 ? (txt = "лет") : (count = count % 10),
      count == 1
        ? (txt = "год")
        : count >= 2 && count <= 4
        ? (txt = "года")
        : (txt = "лет");
    return `, ${age} ${txt}`;
  }
  return "";
};
</script>

<style lang="scss">
.about {
  width: 616px;
  margin: 0 auto;
  flex-grow: 1;
  color: #111;
  &__person {
    margin-bottom: 60px;
    &-title {
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      margin-bottom: 20px;
    }
    &-info {
      font-size: 16px;
      font-weight: 700;
      line-height: 24px;
    }
  }
  &__childrens {
    display: flex;
    flex-direction: column;
    align-items: start;
    &-info {
      padding: 10px 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
      background: #f1f1f1;
      font-size: 16px;
      font-weight: 700;
      line-height: 24px;
      &:not(:last-child) {
        margin-bottom: 20px;
      }
    }
  }
}
</style>
