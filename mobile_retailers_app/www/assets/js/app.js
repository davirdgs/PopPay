// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js

var app =  angular.module('starter', ['ionic', 'starter.controllers', 'starter.services','ngCookies','firebase']);


app.config(function($ionicConfigProvider) {
  $ionicConfigProvider.views.maxCache(0);

  // note that you can also chain configs
  // $ionicConfigProvider.backButton.text('Go Back').icon('ion-chevron-left');
});


app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
});




appc = angular.module('starter.controllers', ['ionic']);

appc
.controller('MainCtrl', function($scope, $ionicSideMenuDelegate) {
  
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
  console.log(" toggle menu ")
})








// var app = angular.module('app', ['myroutes', 'ngAnimate', 'toaster','ngCookies','angularUtils.directives.dirPagination']);
// console.log("Criou o Angular App.");
app.run([    '$rootScope', '$state', '$stateParams', '$location','$cookieStore', 'Data',
    function ($rootScope,   $state,   $stateParams, $location, $cookieStore, Data) 
    {


        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            // $rootScope.authenticated = false;
            console.log("RootScope Token: "+$rootScope.token);
            console.log("cookieStore Token: "+$cookieStore.get('token'));
            console.log("localStorage Token: "+window.localStorage.getItem('token'));
              
            valid = false;

            // if you requested login page;
            if (toState.name == 'login') 
                valid = true;

            if ($rootScope.token != undefined)
                valid = true;

            if (window.localStorage.getItem('token') != undefined)
                valid = true;


            if ($rootScope.token == undefined)
            {
                // validar o token no else
                if ($cookieStore.get('token') != undefined)
                { // tem registro no cookieStore
                    $rootScope.id_user = $cookieStore.get('id_user');
                    $rootScope.user = $cookieStore.get('user');
                    $rootScope.token = $cookieStore.get('token');
                    valid = true;
                }

                if (window.localStorage.getItem('token') != undefined)
                {  //tem registro no localStorage
                    $rootScope.id_user = window.localStorage.getItem('id_user');
                    $rootScope.user = window.localStorage.getItem('user');
                    $rootScope.token = window.localStorage.getItem('token');
                    valid = true;
                }

            }   
  
            // otherwise, if is not valid, send to login page;
            if (!valid){
                $state.go('login');
                event.preventDefault();
            }
          
        });
      }]);


// var tab;
// app.run(['$rootScope','$route','$location', function($rootScope,$route,$location) {

//         $rootScope.$on("$locationChangeStart", function(event, next, current) 
//         {
//             console.info("location changing from: "+current+" to:" + next + " with hash: "+$location.hash());
//             tab = $location.hash();
//         });

//         $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
//             if (toState.title != undefined)
//                 document.title = toState.title;
//         });

//     console.info('..Starting AngularJs !...');
// }]);


app.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
        // $httpProvider.defaults.headers.common['Accept'] = 'application/json';
        // $httpProvider.defaults.withCredentials = false;
        console.log("configurou crossdomain");
    }
    
]);
