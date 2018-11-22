import axios from 'axios'
import * as api from '@/api'

const actions = {
    login({ commit }, { email, password }) {
        return api.auth.login(email, password)
        .then(({ accessToken }) => commit('login', accessToken))
    },
    getTextData(context) {
        return axios.get('/data.json')
            .then(res => {
                context.commit('setTextData', res.data);
            })
    },
}

export default actions