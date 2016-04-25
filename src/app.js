var Vue = require('vue');
var Router = require('vue-router');

require('font-awesome-loader');
require('bootstrap-loader');

require('admin-lte');
require("!style!css!admin-lte/dist/css/skins/_all-skins.css");
require("!style!css!admin-lte/dist/css/AdminLTE.css");

var App = require('./components/container.vue');

//图片路径转换
Vue.filter('imgPath', function (value) {
  return 'http://192.168.2.16:3002'+value;
});
          
// install router
Vue.use(Router);

// routing
var router = new Router();

router.map({
  '*' : {
    component: require('./components/not-found.vue')
  },
  '/': {
    component: require('./components/dashboard.vue')
  },
  '/tasks': {
    component: require('./components/tasks/index.vue')
  },
  '/data': {
    component: require('./components/data/index.vue')
  },
  '/users': {
    component: require('./components/users/index.vue')
  },
  '/user/new': {
    component: require('./components/users/new.vue')
  }
});

router.start(App, '#app');
