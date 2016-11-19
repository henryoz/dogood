import Vue from 'vue'
import Vuex from 'vuex'

import Bristol from '../cities/bristol'
import Cardiff from '../cities/cardiff'

Vue.use(Vuex)

const state = {
  cities: [
    Bristol,
    Cardiff,
  ],
}

const mutations = {}

const actions = {}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
