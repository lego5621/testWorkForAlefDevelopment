export const state = () => ({
  children: [],
  initials: {
    name: "",
    age: '',
  },
});

export const mutations = {
  saveChildren(state, payload) {
    state.children = payload;
  },
  saveInitials(state, payload) {
    state.initials = payload;
  },
};

export const getters = {
  getChildren: (state) => {
    return state.children;
  },
};
