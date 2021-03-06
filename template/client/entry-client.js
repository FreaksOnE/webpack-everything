import 'es6-promise/auto'
import createApp from './app'

const {app, store, router} = createApp()

// prime the store with server-initialized state.
// the state is determined during SSR and inlined in the page markup.
if (window.__INITIAL_STATE__) {
    store.replaceState(window.__INITIAL_STATE__)
}

router.push(store.state.url)

// wait until router has resolved all async before hooks
// and async components...
router.onReady(()=> {
    // actually mount to DOM
    app.$mount('#app')
})

// service worker
if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
}
