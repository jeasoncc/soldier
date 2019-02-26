import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      children: [
        {
          name: "任务中心",
          path: "zone",
          component: () => import("./views/task/zone.vue")
        },
        {
          name: "荣誉中心",
          path: "honour",
          component: () => import("./views/honour/honour.vue")
        },
        {
          name: "荣誉子菜单容器页面",
          path: "honourchildrenwrap",
          component: () => import("./views/honour/honourchildrenwrap.vue"),
          children: [
            {
              name: "荣誉点",
              path: "fame",
              component: () => import("./views/honour/fame.vue")
            },
            {
              name: "荣誉勋章",
              path: "medal",
              component: () => import("./views/honour/medal.vue")
            },
            {
              name: "荣誉商城",
              path: "honourshopping",
              component: () => import("./views/honour/honourshopping.vue")
            },
            {
              name: "荣誉记录",
              path: "honourecord",
              component: () => import("./views/honour/honourecord.vue")
            },
            {
              name: "修改个人资料",
              path: "modifiedata",
              component: () => import("./views/personalCenter/modifiedata.vue")
            }
          ]
        },
        {
          name: "个人中心",
          path: "personalCenter",
          component: () => import("./views/personalCenter/personalCenter.vue")
        },
        {
          name: "我的任务",
          path: "mtask",
          component: () => import("./views/personalCenter/mtask/mtask.vue"),
          children: [
            {
              name: "全部",
              path: "allmask",
              component: () => import("./views/personalCenter/mtask/allmask.vue")
            },
            {
              name: "进行中",
              path: "underway",
              component: () => import("./views/personalCenter/mtask/underway.vue")
            },
            {
              name: "待支付",
              path: "unpaid",
              component: () => import("./views/personalCenter/mtask/unpaid.vue")
            },
            {
              name: "已完成",
              path: "completed",
              component: () => import("./views/personalCenter/mtask/completed.vue")
            }
          ]
        }
      ]
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./views/About.vue")
    },
    {
      path: "/backindex",
      name: "后台",
      component: () => import("@/backsrc/views/index.vue"),
      children: [
        {
          path: "home",
          name: "后台主页",
          components: {
            navigation: () => import("@/backsrc/views/navigation/navigation.vue"),
            toolbar: () => import("@/backsrc/views/toolbar/toolbar.vue"),
            container: () => import("@/backsrc/views/container/home.vue")
          }
        }
      ]
    },
    {
      path: "/lander",
      name: "登陆注册",
      component: () => import("./views/lander/lander.vue"),
      children: [
        {
          path: "login",
          name: "登陆",
          component: () => import("./views/lander/login.vue")
        },
        {
          path: "register",
          name: "注册",
          component: () => import("./views/lander/register.vue")
        },
        {
          path: "forgetpassword",
          name: "忘记密码",
          component: () => import("./views/lander/forgetpassword.vue")
        }
      ]
    }
  ]
});
