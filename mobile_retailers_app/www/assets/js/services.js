apps = angular.module('starter.services', ['ionic']);

apps.factory("CurrentTransactions", function($firebaseArray) {
  var itemsRef = new Firebase("https://pagpop.firebaseio.com/current_transactions");
  return $firebaseArray(itemsRef);
})

apps.factory("Auth", function($firebaseAuth) {
  var usersRef = new Firebase("https//pagpop.firebaseio.com");
  return $firebaseAuth(usersRef);
})


apps.factory("Data", ['$http',
    function ($http, $ionicPopup) { // This service connects to our REST API

        // var serviceBase = 'http://localhost/';
   
        var obj = {};

        obj.toast = function (data) {

         // An alert dialog
             // $scope.showAlert = function() {
             //   var alertPopup = $ionicPopup.alert({
             //     title: data.status,
             //     template: data.message
             //   });
             // };

            // toaster.pop(data.status, "", data.message, 10000, 'trustedHtml');
        }
        obj.toast2 = function (status,message) {
            // toaster.pop(status, "", message, 10000, 'trustedHtml');
               // var alertPopup = $ionicPopup.alert({
               //   title: status,
               //   template: message
               // });

        }

        obj.get = function (q,headers) {
            // return $http.get(serviceBase + q,headers);
            return $.ajax({
                async: false,
                // dataType: 'json',
                method: 'get',
                url: serviceBase + q,
                crossDomain: true
            });
        };

        obj.post = function (q, object,headers) {
            // return $http.post(serviceBase + q, object,headers);
            return $.ajax({
                async: false,
                dataType: 'json',
                method: 'post',
                url: serviceBase + q,
                crossDomain: true,
                data: object,
                // statusCode: {
                //     404: function (data) {
                //         console.log(404);
                //         console.log(data);
                //     }
                // },
                // error: function (jqXHR, textStatus, errorThrown) {
                //     console.log(jqXHR);
                //     console.log(textStatus);
                //     console.log(errorThrown);
                // }
            });
        };

        obj.post3 = function (q, object,headers) {
           
            // return $http({
            //     method: 'POST',
            //     url: serviceBase + q,
            //     headers: object,
            //     transformRequest: function(obj) {
            //         var str = [];
            //         for(var p in obj)
            //         str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            //         return str.join("&");
            //     },
            //     data: object
            // });
            return $http.post(serviceBase + q, object,headers);
        };


      obj.put = function (q, object,headers) {
            return $.ajax({
                async: false,
                dataType: 'json',
                method: 'put',
                url: serviceBase + q,
                crossDomain: true,
                data: object
            });
        };

        obj.post2 = function (q, object) {
            return $http.post(serviceBase + q, object).then(function (results) {
                return results.data;
            });
        };


        // obj.delete = function (q) {
        //     return $http.delete(serviceBase + q).then(function (results) {
        //         return results.data;
        //     });
        // };
        obj.delete = function (q) {
           return $http.delete(serviceBase + q);
        };

        return obj;
}]);

