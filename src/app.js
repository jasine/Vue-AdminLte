var Vue = require('vue');
var Router = require('vue-router');
var App = require('./components/container.vue');

//require('jquery');
// install router
require('font-awesome-loader');

require('bootstrap-loader');
require('admin-lte')
require("!style!css!admin-lte/dist/css/AdminLTE.css")
require("!style!css!admin-lte/dist/css/skins/skin-blue-light.css")

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
  '/users': {
    component: require('./components/users/index.vue')
  },
  '/user/new': {
    component: require('./components/users/new.vue')
  }
});

router.start(App, '#app');