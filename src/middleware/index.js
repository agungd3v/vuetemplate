import store from '../store'

export const auth = (to, from, next) => {
  if (!store.getters.user) return next({
    name: 'SignIn'
  })
  return next()
}

export const hasauth = (to, from, next) => {
  if (store.getters.user) return next({
    name: 'Home'
  })
  return next()
}