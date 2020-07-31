import Vue from 'vue'
import axios from 'axios'

//axios.defaults.baseURL = 'https://curso-vuejs-6605c.firebaseio.com/'

Vue.use({
    install(Vue) {
        //Vue.prototype.$http = axios
        Vue.prototype.$http = axios.create({
            baseURL: 'https://eyevisiondashboard2.firebaseio.com/'
        })
    }
})