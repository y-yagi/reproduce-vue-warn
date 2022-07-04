import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as Sentry from "@sentry/browser";
import { BrowserTracing } from "@sentry/tracing";

Vue.config.productionTip = false

Sentry.init({
  dsn: "PLEASE SET THIS",
  environment: "development",
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
});

const vm = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

console.log(vm);