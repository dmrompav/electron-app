import { createApp } from 'vue';
import App from './Vue/App.vue';

/**
 * === IMPORTANT ===
 */
import router from '@plugins/router';
import store from '@plugins/vuex';

/**
 * === ADDITIONAL ===
 */
// ...

/**
 * === STYLES ===
 */
import '@styles/sass/main';

/**
 * === CREATE APP ===
 */
const app = createApp(App);

app.use(router);
app.use(store);

app.mount('#app');
