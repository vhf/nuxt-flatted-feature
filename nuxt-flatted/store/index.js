import Bar from '@/libs/bar'

export const state = () => ({
  foo: null,
  serializedFoo: ''
})

export const mutations = {
  setFoo (state, foo) {
    state.foo = foo
    state.serializedFoo = foo.serialize()
  }
}

export const actions = {
  async nuxtServerInit ({ commit }, { req, res }) {
    commit('setFoo', new Bar())
  },
  async nuxtClientInit ({ dispatch }) {
    await dispatch('deserializeFoo')
  },
  async deserializeFoo ({ commit, state }) {
    const deserialized = Bar.deserialize(state.serializedFoo)
    commit('setFoo', deserialized)
  }
}
