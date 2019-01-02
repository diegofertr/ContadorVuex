import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    /* Son los datos de nuestra aplicacion */
    counter: 0,
    appName: 'Contador'
  },
  mutations: {
    /* Sirve para alterar el estado de un dato */
    increment (state, valor) {
      state.counter += valor
    },
    decrement (state, valor) {
      state.counter -= valor
    }
  },
  actions: {
    /* Sirve normalmente para hacer peticiones asincronas a servicios */
  }
})
