import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  socialImages: [
    {
      name:'fb social image',
      url: 'https://www.facebook.com/kswieca', 
      src: '/fb.svg'
    },
    {
      name:'git social image',
      url: 'https://github.com/khazarr',
      src: '/git.svg'
    },
    {
      name:'linkedIn social image',
      url: 'https://www.linkedin.com/in/karol-%C5%9Bwieca-3b02a6130/  ',
      src: '/linked.svg'
    }
  ]
}

const mutations = {
  INCREMENT (state) {
    state.count++
  },
  DECREMENT (state) {
    state.count--
  }
}

const actions = {
  incrementAsync ({ commit }) {
    setTimeout(() => {
      commit('INCREMENT')
    }, 200)
  }
}
const getters = {
  getSocialImages (state) {
    return state.socialImages
  }
}
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store
