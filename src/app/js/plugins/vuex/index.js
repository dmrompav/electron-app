import { createStore } from 'vuex';
import Modules from './modules/_all';

const store = createStore({
	modules: {
		...Modules
	}
});

export default store;
