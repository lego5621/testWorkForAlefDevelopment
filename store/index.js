export const state = () => ({
  children: [],
});

export const mutations = {
  saveChildren(state, payload) {
    state.children = payload;
  },
};

export const getters = {
  getChildren: (state) => {
    return state.children;
  },
};
