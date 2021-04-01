import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {registerMicroApps, start} from "qiankun";
Vue.config.productionTip = false;
registerMicroApps([
    {
        name: "app-react", // 微应用1名称
        entry: `http://${location.hostname}:8036`, // 微应用入口
        container: "#container", //微应用容器节点的选择器
        activeRule: "/app-react" // 微应用激活规则
    },
    {
        name: "app_1", // 微应用2名称
        entry: `http://${location.hostname}:8037`, // 微应用入口
        container: "#container", //微应用容器节点的选择器
        activeRule: "/app_1" // 微应用激活规则
    }
]);
start();
new Vue({
    router,
    store,
    render: function (h) {
        return h(App);
    }
}).$mount("#app");
