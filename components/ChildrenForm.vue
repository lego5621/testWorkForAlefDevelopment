<template>
  <div class="w-full flex mb-2.5">
    <div class="floating-input relative grow">
      <input
        type="text"
        id="name"
        class="border border-gray-200 focus:outline-none rounded-md focus:shadow-sm w-full px-4 pb-1.5 h-14 text-sm"
        placeholder="Имя"
        autocomplete="off"
        v-model="name"
        @change="change()"
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
        v-model="age"
        @change="change()"
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
      <span v-on:click="remove"> Удалить </span>
    </button>
  </div>
</template>

<script>
export default {
  props: ["removeChildren", "index", "changeChildren"],
  data: function () {
    return {
      name: "",
      age: "",
    };
  },
  methods: {
    remove() {
      this.$emit("removeChildren", {
        index: this.index,
      });
    },

    change() {
      this.$emit("changeChildren", {
        index: this.index,
        name: this.name,
        age: this.age,
      });
    },
  },
};
</script>

<style>
.btn-remove {
  color: #01a7fd;
}
</style>
