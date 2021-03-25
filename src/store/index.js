import Vue from 'vue'
import Vuex from 'vuex'

// import example from './module-example'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default new Vuex.Store({
  state () {
    return {
      language: 'pt-br',
      flags: {
        'us-en': 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_the_United_Kingdom_%282-3%29.svg',
        'pt-br': 'https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg'
      }
    }
  },
  getters: {
    content: state => require(`../static/languages/${state.language}.json`),
    language: state => state.language,
    flag: state => state.flags[
      state.language === 'pt-br'
        ? 'us-en'
        : 'pt-br'
    ]
  },
  mutations: {
    setLanguage: (state, language = 'pt-br') => { state.language = language }
  },

  // enable strict mode (adds overhead!)
  // for dev mode and --debug builds only
  strict: process.env.DEBUGGING
})
