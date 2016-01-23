//Top level component is Angular is the module
angular.module('angMod', [])
angular.module('angMod').controller('angoller', ['$scope',
	function($scope) {
		
		$scope.inputHolder1 = ["first name"]
		$scope.inputHolder2 = ["last name"]

		$scope.textBlock1 = $scope.inputHolder1[($scope.inputHolder1.length)-1];
		$scope.textBlock2 = $scope.inputHolder2[($scope.inputHolder2.length)-1];


		console.log($scope.inputHolder1.length)
		console.log($scope.inputHolder2.length)

		$scope.showBlock1 = true;
		$scope.showBlock2 = true;
		$scope.showMe = function (id) {
			if (id == 'block1') {
				$scope.showBlock1 = !$scope.showBlock1;
			}
			else {
				$scope.showBlock2 = !$scope.showBlock2;
			}
		}
		
		$scope.hideMe = function (id) {
			if (id == 'block1') {
				$scope.showBlock1 = !$scope.showBlock1;
			}
			else {
				$scope.showBlock2 = !$scope.showBlock2;
			}
		}

		$scope.addInput = function(id) {
			if ( id == 1) {
				$scope.inputHolder1.push($scope.newInput);
				$scope.textBlock1 = $scope.inputHolder1[($scope.inputHolder1.length)-1];
				console.log($scope.inputHolder1.length);
				console.log($scope.inputHolder1[1]);
				$scope.newInput = [];
			}
			else {
				$scope.inputHolder2.push($scope.newInput)
				$scope.textBlock2 = $scope.inputHolder2[($scope.inputHolder2.length)-1];
				console.log($scope.inputHolder2.length);
				console.log($scope.inputHolder2[1]);
				$scope.newInput = [];
			}
		} 
	}])






