import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Courses from '../views/Courses.vue';
import CustomTrainings from '../views/CustomTrainings.vue';
import CaseStudies from '../views/CaseStudies.vue';
import Blog from '../views/Blog.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: (to, from, next) => {
      if (!localStorage.getItem('auth-replicate')) next({ name: 'Login' });
      else next();
    },
  },
  {
    path: '/courses',
    name: 'Courses',
    component: Courses,
    beforeEnter: (to, from, next) => {
      if (!localStorage.getItem('auth-replicate')) next({ name: 'Login' });
      else next();
    },
  },
  {
    path: '/custom-trainings',
    name: 'CustomTrainings',
    component: CustomTrainings,
    beforeEnter: (to, from, next) => {
      if (!localStorage.getItem('auth-replicate')) next({ name: 'Login' });
      else next();
    },
  },
  {
    path: '/case-studies',
    name: 'CaseStudies',
    component: CaseStudies,
    beforeEnter: (to, from, next) => {
      if (!localStorage.getItem('auth-replicate')) next({ name: 'Login' });
      else next();
    },
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
    beforeEnter: (to, from, next) => {
      if (!localStorage.getItem('auth-replicate')) next({ name: 'Login' });
      else next();
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('auth-replicate')) next({ name: 'Home' });
      else next();
    },
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});
export default router;
