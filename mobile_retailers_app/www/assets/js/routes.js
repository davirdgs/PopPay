
app.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  
  .state('login', {
    url: "/login",
    title: 'Login',
    templateUrl: "templates/login.html",
    controller: 'authCtrl',
    resolve: {
      pag: function(){return 'login';}
    }
  })

  .state('logout', {
    url: "/logout",
    title: 'Login',
    templateUrl: "templates/login.html",
    controller: 'authCtrl',
    resolve: {
      pag: function(){return 'logout';}
    }
  })

  .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/menu.html"
  })

  .state('tab.create', {
    url: '/create',
    views: {
      'menuContent': {
        templateUrl: 'templates/create.html',
        controller: 'mainCtrl',
        resolve: {
            pag: function(){return 'create';}
        }
      }
    }
  })

  .state('tab.main', {
    url: '/main',
    title: 'Main Screen',
    views: {
      'menuContent': {
        templateUrl: 'templates/main.html',
        controller: 'mainCtrl',
        resolve: {
            pag: function(){return 'main';}
        }
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('login');

});
