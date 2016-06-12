// var g;
appc.controller('mainCtrl', 
  function  ($scope, $rootScope, $stateParams, $state, $http, Data, pag, $ionicSideMenuDelegate,$ionicPopup,  CurrentTransactions) {

	    $scope.showAlert = function(status,message) {
	       var alertPopup = $ionicPopup.alert({
	         title: status,
	         template: message
	       });
	     };

		$scope.toggleLeft = function() {
		    $ionicSideMenuDelegate.toggleLeft();
		};

	  	var config = {headers: {
	        "Content-Type": "application/json"
	    }};

	    $scope.state = $state.current
	    $scope.params = $stateParams; 
	    $scope.transac = {};

    	$scope.newTransaction = function()
    	{
			$("#part_finish").hide(200)
    		$("#part_price").show(300)


    	}


    	$scope.createQRCode = function()
    	{
    		var data = {};
			$("#part_price").hide(200)
    		$("#part_qrcode").show(300)
    		data.facebook_id = $rootScope.facebook_id;
    		data.wallet_info = $rootScope.wallet_info;
    		data.price = $scope.transac.price;
    		console.log(data)
    		makeCode(angular.copy(data));
    		$scope.currents = CurrentTransactions
    		// https://project-3097658103190494560.firebaseio.com/
		    // $scope.currents = $firebase(fireBaseData.refCurrentTransactions()).$asArray();
		    // $scope.addCurrent
		    var transac = {
	            from: $rootScope.name,
	            facebook_id: $rootScope.facebook_id,
	            wallet_info: $rootScope.wallet_info,
	            state: 1,  // qrcode created state
	            price: data.price,
	            desc: ($scope.transac.description == undefined ? "null" :  $scope.transac.description)
	        };
	        console.log(transac)
	        $scope.currents.$add(transac);
	        console.log( $scope.currents)
    		setTimeout(function () {
    			$("#part_qrcode").hide(200)
    			$scope.waitCustomer()
		    }, 10000);
    	}

    	$scope.waitCustomer = function()
    	{
			// $scope.showAlert('success','Leitura correta! Esperando transação por parte do cliente.');
			// run loading
			$("#part_waiting").show(300)
			setTimeout(function () {
    			$("#part_waiting").hide(200)
    			$scope.correctlyFinish()
		    }, 10000);
		}


    	$scope.correctlyFinish = function()
    	{
			// $scope.showAlert('success','Leitura correta! Esperando transação por parte do cliente.');
			// run loading
			$("#part_finish").show(300)
		}


		$scope.continueRunning = function()
		{

		}

    		
		$scope.cancelProcess = function()
		{

		}



        $scope.init = function(){
	      	console.log("entrou no controlador de MainCtrl");
	      	console.log(pag);
			if (pag == "create")
			{
	      		$scope.newTransaction();
	      	}

    	};
        $scope.init();
	
 });