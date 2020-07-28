import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

/**
 * 核心概念
 * state
 * getters
 * mutations
 * actions
 */
const store = new Vuex.Store({
    state: {
        msg: "123123",
        b: [],
        title: '开课吧',
        content: 'javascript 高级工程师',
        name: ""
    },
    getters: {
        newTitle(state) {
            return state.title + "大圣嫁到！"
        }
    },
    mutations: {
        setTitle(state, data) {
            setTimeout(() => {
                state.title = data;
            }, 1000)
        },
        setName(state, data) {
            state.title = data;
        }
    },
    actions: {
        setName(store, data) {

            return new Promise(resolve => {
                setTimeout(() => {
                    store.commit("setName", data)
                    resolve()
                }, 1000)
            })
        }
    }

});



export default store;
