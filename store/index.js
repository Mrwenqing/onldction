import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

const store= new Vuex.Store({
	state:{
		token:''
	},
	getters:{
		hasLogin(state){
			return !!state.token
		}
	},
	mutations:{},
	actions:{},
	modules:{}
})

export default store