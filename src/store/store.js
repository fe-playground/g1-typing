import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import * as util from '../utils/util'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    data: null,
    user: '',
    time: 0,
    myTimer: null,
    rank: [],
    isSuccess: true
  },
  getters: {
    getData(state) {
      return state.data;
    },
    getUser(state) {
      return state.user;
    },
    getSuccess(state) {
      return state.isSuccess;
    }
  },
  actions: {
    getTextData(context) {
      return axios.get('/data.json')
        .then(res => {
          context.commit('setTextData', res.data);
        })
    },
    startTyping(context, payload) {
      context.commit('setUser', payload);
      context.commit('insertRank');
    }
  },
  mutations: {
    setTextData(state, payload) {
      state.data = payload;
    },
    setUser(state, user) {
      state.user = user;
      state.isSuccess = false;
    },
    insertRank(state) {
      let newRank = [
        ...state.rank,
        {
          user: state.user,
          time: state.time
        }
      ];
      state.rank = util.sortRank(newRank);
    },
    startTimer(state) {
      state.myTimer = setInterval( () => {
        state.time++;
        store.commit('updateRank');
      }, 1000);
    },
    updateRank(state) {
      let newRank = state.rank.map(user => user.user === this.user ? { ...user, time: this.time } : user);
      state.rank = util.sortRank(newRank);
    },
    stopTimer(state) {
      clearInterval(state.myTimer);
    },
    resetTyping(state) {
      state.isSuccess = true;
    }
  }
});