export const state = () => ({
  children: [],
  initials: {
    name: "",
    age: "",
  },
});

export const mutations = {
  saveChildren(state, payload) {
    // интересный баг, если не глубокая копия то vuex считает, что данные изменяются, и выкидывает ошибку ...
    state.children = JSON.parse(JSON.stringify(payload));
  },
  saveInitials(state, payload) {
    state.initials = JSON.parse(JSON.stringify(payload));
  },
};

export const getters = {
  getChildren: (state) => {
    return state.children;
  },
};
