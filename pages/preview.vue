<template>
  <div>
    <div>
      <p class="mt-8 text-base font-medium">Персональные данные</p>
      <p class="mt-5 font-bold text-base">Василий, 30 лет</p>
    </div>
    <div class="mt-16">
      <p class="font-medium">Дети</p>
      <div>
        <div
          class="mt-5"
          v-for="(child, index) in getChildren"
          v-bind:key="index"
        >
          <!-- индекс используется как ключ потому что дети могут быть одного и того же возраста и имени, для простых действий а-ля для вывода небольшого списка думаю это нормально -->
          <p class="child-box font-bold">
            {{ child.name }}, {{ child.age }} лет
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getChildren"]),
  },
};
</script>

<style>
.child-box {
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10px 20px;
  background: #f1f1f1;
  border-radius: 5px;
}
</style>
