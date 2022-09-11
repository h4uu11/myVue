import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import List from '../views/board/List.vue';
import Detail from '../views/board/Detail.vue';
import Create from '../views/board/Create.vue';
import Edit from '../views/board/Edit.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/views/board/List',
      name: 'BoardList',
      component: List,
    },
    {
      path: '/views/board/Detail/:id',
      name: 'BoardDetail',
      component: Detail,
    },
    {
      path: '/views/board/Create',
      name: 'BoardCreate',
      component: Create,
    },
    {
      path: '/views/board/Edit/:id',
      name: 'BoardEdit',
      component: Edit,
    },
  ],
});

export default router;
