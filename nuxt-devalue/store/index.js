import Bar from '@/libs/bar'

export const state = () => ({
  foo: null
})

export const mutations = {
  setFoo (state, foo) {
    state.foo = foo
  }
}

export const actions = {
  async nuxtServerInit ({ commit }, { req, res }) {
    commit('setFoo', new Bar())
  }
}
