import Vue from "vue";
import Router from "vue-router";
import Layout from "../layout/Layout.vue";

// Pages
import Home from "../components/Home.vue";
import Contact from "../components/Contact.vue";
import Projects from "../components/Projects.vue";
import NotFound from "../components/NotFound.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Layout,
      props(route) {
        const matched = route.matched;
        if (matched.length > 1) {
          return matched[1].meta;
        }
        return {};
      },
      children: [
        {
          path: "",
          name: "home",
          component: Home
        },
        {
          path: "contact",
          name: "contact",
          component: Contact
        },
        {
          path: "projects",
          name: "projects",
          component: Projects
        },
        {
          path: "*",
          name: "not-found",
          component: NotFound
        }
      ]
    }
  ]
});