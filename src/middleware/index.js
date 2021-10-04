import store from '../store'

export const init = store.commit('initializeapp')

export const auth = (to, from, next) => {
  if (!store.getters.user) next({ name: 'SignIn' })
  else next()
}

export const hasauth = (to, from, next) => {
  if (store.getters.user) next({ name: 'Home' })
  else next()
}