
appc.controller('authCtrl', 
    function  ($scope, $rootScope, $stateParams, $state, Data,    pag, $ionicSideMenuDelegate, $ionicPopup, Auth) {

    // $scope.login = function(authMethod = "facebook") {
    //     Auth.$authWithOAuthPopup(authMethod).then(function(authData) {
    //     }).catch(function(error) {
    //       if (error.code === 'TRANSPORT_UNAVAILABLE') {
    //         Auth.$authWithOAuthRedirect(authMethod).then(function(authData) {
    //         });  
    //       } else {
    //         console.log(error);
    //       }
    //     });
    //   };

    // Auth.$onAuth(function(authData) {
    //     if (authData === null) {
    //       console.log('Not logged in yet');
    //     } else {
    //       console.log('Logged in as', authData.uid);
    //     }
    //     // This will display the user's name in our view
    //     $scope.authData = authData;
    //   });


    $scope.loginfb = function() {
       // login with Facebook
        Auth.$authWithOAuthPopup("facebook").then(function(authData) {
        // Auth.$authWithOAuthPopup("facebook").then(function(authData) {
            console.log("Logged in as:", authData.uid);
            $scope.authData = authData; 
                console.log(authData);
                $rootScope.name = authData.facebook.displayName;
                $rootScope.photo = authData.facebook.profileImageURL;
                $rootScope.token = authData.token;
                $rootScope.email = "francisco.a.cabelo@gmail.com"
                $rootScope.facebook_id = authData.facebook.id;
                $rootScope.wallet_info = 12112;

                $state.go("tab.main");

        }).catch(function(error) {
          if (error.code === "TRANSPORT_UNAVAILABLE") {
            Auth.$authWithOAuthRedirect("facebook").then(function(authData) {
              // User successfully logged in. We can log to the console
              // since we’re using a popup here
              console.log(authData);
            });
          } else {
            // Another error occurred
            console.log(error);
          }
        });
    };
       

    // Create a callback which logs the current auth state
    // function authDataCallback(authData) {
    //   if (authData) {
    //     console.log("User " + authData.uid + " is logged in with " + authData.provider);
    //   } else {
    //     console.log("User is logged out");
    //   }
    // }
    // // Register the callback to be fired every time auth state changes
    // var ref = new Firebase("https://pagpop.firebaseio.com");
    // ref.onAuth(authDataCallback);


    Auth.$onAuth(function(authData) {
          if (authData === null) {
            console.log("Not logged in yet");
          } else {
            if (authData) {
                // save the user's profile into the database so we can list users,
                // use them in Security and Firebase Rules, and show profiles
                var ref = new Firebase("https://pagpop.firebaseio.com");
                // ref.child("users").child(authData.uid).set({
                //   provider: authData.provider,
                //   name: authData.facebook.name
                // });
                $rootScope.name = authData.facebook.displayName;
                $rootScope.photo = authData.facebook.profileImageURL;
                $rootScope.token = authData.token;
                $rootScope.email = "francisco.a.cabelo@gmail.com"
                $rootScope.facebook_id = authData.facebook.id;
                $rootScope.wallet_info = 12112;
                $state.go("tab.main");
            }
            console.log("Logged in as", authData.uid);
          }
          $scope.authData = authData; // This will display the user's name in our view
    });


     $scope.showAlert = function(status,message) {
       var alertPopup = $ionicPopup.alert({
         title: status,
         template: message
       });
     };

    $scope.toggleLeft = function() {
      $ionicSideMenuDelegate.toggleLeft();
    };
    
    $scope.signup = {};
    $scope.login = {};

	var config = {headers: {
        'Content-Type' : 'application/json; charset=UTF-8'
    }};
    


    $scope.doLogin = function (person) {
        console.log("Login: ");
        // console.log(person);
        var data = {
            "username": person.user,
            "password": person.password
        };
         
        var ref = new Firebase("https://pagpop.firebaseio.com");
         ref.authWithPassword({
             email    : person.user,
             password : person.password

        }, function(error, authData) {
          if (error) {
            console.log("Login Failed!", error);
          } else {
            console.log("Authenticated successfully with payload:", authData);
          }
        });

        // get correcty the data
        $rootScope.user = data;
        $rootScope.id_user = data.username;
        $rootScope.token = "213SAD12JK213F21S23";
        $rootScope.email = "francisco.a.cabelo@gmail.com"
        $rootScope.facebook_id = 1212;
        $rootScope.wallet_info = 12112;

        $state.go("tab.main");
        // Data.post('/login', data, config)
        // .success(function(data) {
        //     // console.log(data.data);
        //     if (data.data.user.length == 0)
        //     {
        //         $scope.showAlert('Erro','Usuário não encontrado.');
        //     }
        //     else
        //     {
        //         if (data.data.token == undefined)
        //             data.data.token = '213SAD12JK213F21S23';
        //         $rootScope.user = data.data.user;
        //         $rootScope.id_user = data.data.user.id;
        //         $rootScope.token = data.data.token;
        //         $cookieStore.put('token', data.data.token);
        //         $cookieStore.put('id_user', data.data.user.id);
        //         $cookieStore.put('user', data.data.user);
        //         window.localStorage.setItem('token', data.data.token);
        //         window.localStorage.setItem('id_user', data.data.user.id);
        //         window.localStorage.setItem('user', data.data.user);

        //       //   $scope.showAlert('Sucesso', 'Login feito com sucesso');
        //         $state.go("tab.answer");
        //     }
        // }).
        // error(function(jqXHR, textStatus, errorThrown) {
        //     $scope.showAlert('Erro', getFirstMessageError(jqXHR));
        //     $scope.logout();
        // });

    };


    $scope.logout = function () {
     var ref = new Firebase("https://pagpop.firebaseio.com");
     ref.unauth();
        $state.go("login");
    	// delete $rootScope.id_user;
     //    delete $rootScope.token;
     //    delete $rootScope.user;
     //    window.localStorage.removeItem('token');
     //    window.localStorage.removeItem('id_user');
     //    window.localStorage.removeItem('user');

    }
    


    $scope.init = function(){
        console.log("inicializou o controlador de login");
        if (pag == "logout")
        {
            $scope.logout();
        }

    };
    $scope.init();


});