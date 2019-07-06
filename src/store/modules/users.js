import axios from 'axios';

export default {
  state: {
    user: null,
    foo: 'users-foo',
  },
  mutations: {
    updateCurrentUser(state, user) {
      state.user = user;
    },
  },
  getters: {
    // in a non-namedspace module, the getters param is all getters from the store
    // in a namespaced module, getters is only local.
    // state is always namespaced
    // you need to access the third rootState param to get at the root's state
    foo(state, getters, rootState) {
      return `users-getter/${rootState.foo}`;
    },
  },
  actions: {
    // actions have access to rootState as well
    // just needs to be destructured off the context object
    signIn({ commit }) {
      axios
        .post('/api/sign-in')
        .then(result => commit('updateCurrentUser', result.data))
        .catch(console.error);
    },
  },
};
