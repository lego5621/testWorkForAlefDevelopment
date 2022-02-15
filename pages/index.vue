<template>
  <div>
    <div class="pb-8">
      <p class="py-5 text-base font-medium leading-6">Персональные данные</p>
      <div class="w-full">
        <div class="floating-input mb-5 relative">
          <input
            type="text"
            id="name"
            class="border border-gray-200 focus:outline-none rounded-md focus:shadow-sm w-full px-4 pb-1.5 h-14 text-sm"
            placeholder="Имя"
            v-model="name"
          />

          <label
            for="name"
            class="absolute top-0 left-0 px-4 py-4 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
            >Имя</label
          >
        </div>
        <div class="floating-input mb-5 relative">
          <input
            type="text"
            id="age"
            class="border border-gray-200 focus:outline-none rounded-md focus:shadow-sm w-full px-4 pb-1.5 h-14 text-sm"
            placeholder="Возраст"
            autocomplete="off"
            v-model="age"
          />

          <label
            for="age"
            class="absolute top-0 left-0 px-4 py-4 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
          >
            Возраст
          </label>
        </div>
      </div>
    </div>
    <div>
      <div class="flex justify-between items-center pb-3">
        <p class="text-base font-medium leading-6">Дети (макс. 5)</p>
        <button
          class="btn-add-child rounded-3xl py-2.5 px-5 text-sm"
          v-if="this.childrenArr.length < 5"
          @click="addChildren"
        >
          <i></i> Добавить ребенка
        </button>
      </div>
      <div>
        <div
          class="w-full flex mb-2.5"
          v-for="(item, index) in childrenArr"
          v-bind:key="index"
        >
          <div class="floating-input relative grow">
            <input
              type="text"
              id="name"
              class="border border-gray-200 focus:outline-none rounded-md focus:shadow-sm w-full px-4 pb-1.5 h-14 text-sm"
              placeholder="Имя"
              autocomplete="off"
              v-model="item.name"
            />

            <label
              for="name"
              class="absolute top-0 left-0 px-4 py-4 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
            >
              Имя
            </label>
          </div>
          <div class="floating-input relative mx-4 grow">
            <input
              type="number"
              id="age"
              class="border border-gray-200 focus:outline-none rounded-md focus:shadow-sm w-full px-4 pb-1.5 h-14 text-sm"
              placeholder="Возраст"
              autocomplete="off"
              v-model="item.age"
              v-int
            />

            <label
              for="age"
              class="absolute top-0 left-0 px-4 py-4 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
            >
              Возраст
            </label>
          </div>
          <button class="flex items-center text-sm btn-remove">
            <span v-on:click="removeChildren(index)"> Удалить </span>
          </button>
        </div>
      </div>
      <button
        class="mt-8 mb-2 rounded-3xl btn-save py-2.5 px-5 text-white text-sm"
        v-if="this.childrenArr.length > 0"
        @click="saveInStore"
      >
        Сохранить
      </button>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      name: "",
      age: "",
      childrenArr: [],
    };
  },

  methods: {
    addChildren() {
      this.childrenArr.push({});
    },

    removeChildren(start) {
      this.childrenArr.splice(start, 1);
    },

    changeChildren(item) {
      Vue.set(this.childrenArr, item.index, {
        name: item.name,
        age: item.age,
      });
    },

    saveInStore() {
      this.$store.commit("saveChildren", [...this.childrenArr]);
      this.$store.commit("saveInitials", {
        name: this.name,
        age: this.age,
      });
    },
  },

  mounted() {
    this.childrenArr = [...this.$store.state.children];
  },
};
</script>

<style>
.floating-input label {
  color: rgba(17, 17, 17, 0.48);
}

.floating-input > input::placeholder {
  color: transparent;
}

.floating-input > input:focus,
.floating-input > input:not(:placeholder-shown) {
  @apply pt-8;
}

.floating-input > input:focus ~ label,
.floating-input > input:not(:placeholder-shown) ~ label {
  @apply opacity-75 scale-75 -translate-y-3 translate-x-1;
}

.btn-add-child {
  border: 2px solid #01a7fd;
  box-sizing: border-box;
  color: #01a7fd;
}

.btn-add-child i::before {
  content: "\002B ";
  font-size: 20px;
  margin: -20px 0;
}

.btn-save {
  background: #01a7fd;
}
</style>
