//Top level component is Angular is the module
angular.module('angMod', [])
angular.module('angMod').controller('angoller', ['$scope',
	function($scope) {
		
		$scope.inputHolder = [
			{
				name : 'Dave',
				face  : 'happy'
			},
			{
				name : 'Log First Name',
				face : 'Log Last Name'
			},
		]

		$scope.textBlock1 = $scope.inputHolder[($scope.inputHolder.length)-1].name;
		$scope.textBlock2 = $scope.inputHolder[($scope.inputHolder.length)-1].face;


		console.log($scope.inputHolder.length)
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

		// $scope.addInput = function(){
		// 	$scope.inputHolder.push($scope.----)
		// 	$scope.---- = {}
	}])