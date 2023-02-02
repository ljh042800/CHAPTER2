

import { createWebHistory, createRouter } from "vue-router";
import List from './components/List.vue';
import Home from './components/Home.vue';
import Detail from './components/Detail.vue';
import Author from './components/Author.vue';
import Comment from './components/Comment.vue';


const routes = [
  {
    // 누군가가 /list로 접속하면 <list>를 보여주자
    path: "/list",
    component: List,
  },
  {
    // 누군가가 /list로 접속하면 <list>를 보여주자
    path: "/",
    component: Home,
  },
  {
    ///detail/X로 접속하면 X번 게시물 보여주기
    path: "/detail/:id",
    component: Detail,
    // 페이지를 또 나누기
    children: [
        {
            path:"author",
            component: Author,
        },
        {
            path: "comment",
            component: Comment,
        },
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 