import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import chengpinjianyan from '@/views/modules/chengpinjianyan/list'
    import news from '@/views/modules/news/list'
    import gongzi from '@/views/modules/gongzi/list'
    import yuanliaocangku from '@/views/modules/yuanliaocangku/list'
    import dingdan from '@/views/modules/dingdan/list'
    import chengyichuku from '@/views/modules/chengyichuku/list'
    import renshianpai from '@/views/modules/renshianpai/list'
    import chengyicangku from '@/views/modules/chengyicangku/list'
    import yonghu from '@/views/modules/yonghu/list'
    import yangban from '@/views/modules/yangban/list'
    import kaoqin from '@/views/modules/kaoqin/list'
    import yuanliaoruku from '@/views/modules/yuanliaoruku/list'
    import config from '@/views/modules/config/list'
    import yuanliaochuku from '@/views/modules/yuanliaochuku/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/chengpinjianyan',
        name: '成品检验',
        component: chengpinjianyan
      }
      ,{
	path: '/news',
        name: '系统公告',
        component: news
      }
      ,{
	path: '/gongzi',
        name: '工资',
        component: gongzi
      }
      ,{
	path: '/yuanliaocangku',
        name: '原料仓库',
        component: yuanliaocangku
      }
      ,{
	path: '/dingdan',
        name: '订单',
        component: dingdan
      }
      ,{
	path: '/chengyichuku',
        name: '成衣出库',
        component: chengyichuku
      }
      ,{
	path: '/renshianpai',
        name: '人事安排',
        component: renshianpai
      }
      ,{
	path: '/chengyicangku',
        name: '成衣仓库',
        component: chengyicangku
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/yangban',
        name: '样板',
        component: yangban
      }
      ,{
	path: '/kaoqin',
        name: '考勤',
        component: kaoqin
      }
      ,{
	path: '/yuanliaoruku',
        name: '原料入库',
        component: yuanliaoruku
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/yuanliaochuku',
        name: '原料出库',
        component: yuanliaochuku
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
