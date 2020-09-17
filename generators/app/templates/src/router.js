import Vue from "vue";
import Router from "vue-router";
import HelloWorldPage from "@/pages/HelloWorldPage";


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "hello-world",
      component: HelloWorldPage
    }
  ]
});
