// app.factory('myQuestion', function() {
//      var savedData = {}
//      function set(data) {
//        savedData = data;
//      }
//      function get() {
//       return savedData;
//      }

//      return {
//       set: set,
//       get: get
//      }

// });


app.directive('loading',   ['$http' ,function ($http)
{
    return {
        restrict: 'A',
        link: function (scope, elm, attrs)
        {
            scope.isLoading = function () {
                return $http.pendingRequests.length > 0;
            };

            scope.$watch(scope.isLoading, function (v)
            {
                if(v){
                    elm.show();
                }else{
                    elm.hide();
                }
            });
        }
    };

}]);

app.directive('qrcode', function($interpolate) {  
  return {
    restrict: 'E',
    link: function($scope, $element, $attrs) {

      var options = {
        text: '',
        width: 200,
        height: 200,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: 'H'
      };

      Object.keys(options).forEach(function(key) {
        options[key] = $interpolate($attrs[key] || '')($scope) || options[key];
      });

      options.correctLevel = QRCode.CorrectLevel[options.correctLevel];

      new QRCode($element[0], options);

    }
  };
});
// app.directive('focus', function() {
//     return function(scope, element) {
//         element[0].focus();
//     }      
// });

// app.directive('passwordMatch', [function () {
//     return {
//         restrict: 'A',
//         scope:true,
//         require: 'ngModel',
//         link: function (scope, elem , attrs,control) {
//             var checker = function () {
 
//                 //get the value of the first password
//                 var e1 = scope.$eval(attrs.ngModel); 
 
//                 //get the value of the other password  
//                 var e2 = scope.$eval(attrs.passwordMatch);
//                 if(e2!=null)
//                 return e1 == e2;
//             };
//             scope.$watch(checker, function (n) {
 
//                 //set the form control to valid if both 
//                 //passwords are the same, else invalid
//                 control.$setValidity("passwordNoMatch", n);
//             });
//         }
//     };
// }]);
