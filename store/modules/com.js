import api from '../../fetch/modules/com'
import * as types from '../types'

const state = {
  loading: false,
  menu: {
    left: []
  },
  activeMenu: {}
}

const getters = {
  'com_get_left_menu': state => state.menu.left,
  'com_get_active_menu': state => state.activeMenu
}

const mutations = {
  COM_SET_LOADING (state, loading) {
    state.loading = loading
  },
  [types.COM_SET_LEFT_MENU] (state, menu) {
    state.menu.left = menu
  },
  [types.COM_SET_ACTIVE_MENU] (state, activeMenu) {
    state.activeMenu = activeMenu
  }
}

const actions = {
  com_set_loading ({commit}, param) {
    commit('COM_SET_LOADING', param)
  },
  com_get_img_token ({commit}, param) {
    return new Promise((resolve, reject) => {
      api.getSignature(param).then(res => {
        if (parseInt(res.result) === 0) {
          resolve(res.data)
        } else {
          reject(res)
        }
      }).catch(err => {
        reject(err)
      })
    })
  },
  com_get_left_menu ({commit}, param) {
    return new Promise((resolve, reject) => {
      api.comGetLeftMenu(param)
        .then(res => {
          commit(types.COM_SET_LEFT_MENU, res.body)
          resolve && resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  com_set_active_menu ({commit}, param) {
    commit(types.COM_SET_ACTIVE_MENU, param)
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
