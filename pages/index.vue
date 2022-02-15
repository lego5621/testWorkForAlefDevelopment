<template>
  <div>
    <div class="pb-8">
      <p class="py-5 text-base font-medium leading-6">Персональные данные</p>
      <div class="w-full">
        <div class="mb-5">
          <Input type="text" placeholder="Имя" label="Имя" v-model="name" />
        </div>
        <div class="mb-5">
          <Input
            type="number"
            placeholder="Возраст"
            label="Возраст"
            v-model="age"
          />
        </div>
      </div>
    </div>
    <div>
      <div class="flex justify-between items-center pb-3">
        <p class="text-base font-medium leading-6">Дети (макс. 5)</p>
        <button
          class="btn-add-child rounded-3xl py-2.5 px-5 text-sm"
          v-show="this.childrenArr.length < 5"
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
          <div class="grow">
            <Input
              type="text"
              placeholder="Имя"
              label="Имя"
              v-model="item.name"
            />
          </div>
          <div class="mx-4 grow">
            <Input
              type="number"
              placeholder="Возраст"
              label="Возраст"
              v-model="item.age"
            />
          </div>
          <button
            class="flex items-center text-sm btn-remove"
            v-on:click="removeChildren(index)"
          >
            Удалить
          </button>
        </div>
      </div>
      <button
        class="mt-8 mb-2 rounded-3xl btn-save py-2.5 px-5 text-white text-sm"
        v-show="this.childrenArr.length > 0"
        @click="saveInStore"
      >
        Сохранить
      </button>
    </div>
  </div>
</template>

<script>
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

    saveInStore() {
      this.$store.commit("saveChildren", [...this.childrenArr]);
      this.$store.commit("saveInitials", {
        name: this.name,
        age: this.age,
      });
    },
  },

  mounted() {
    this.childrenArr = JSON.parse(JSON.stringify(this.$store.state.children));
    this.name = JSON.parse(JSON.stringify(this.$store.state.initials.name));
    this.age = JSON.parse(JSON.stringify(this.$store.state.initials.age));
  },
};
</script>

<style>
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
