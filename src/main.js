import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueTextareaAutosize from "vue-textarea-autosize";
import firebase from "firebase/app";
import "firebase/firestore";

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false;

firebase.initializeApp({
    apiKey: "AIzaSyA4VJdj8Sl3Y8e8LqQnChcKOmJXTptGn_8",
    authDomain: "vue-calendar-595c3.firebaseapp.com",
    databaseURL: "https://vue-calendar-595c3.firebaseio.com",
    projectId: "vue-calendar-595c3",
    storageBucket: "vue-calendar-595c3.appspot.com",
    messagingSenderId: "98412903040",
    appId: "1:98412903040:web:244efac301ad40f02f8465"
});

export const db = firebase.firestore();

new Vue({
    vuetify,
    render: h => h(App)
}).$mount("#app");
