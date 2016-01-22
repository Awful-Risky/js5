//Top level component is Angular is the module
angular.module('angMod', [])
angular.module('angMod').controller('angoller', ['$scope',
	function($scope) {
		
		$scope.textBlock1 = 'This is a text block-------------';
		$scope.textBlock2 = 'This is a text block-------------';
		

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
	}])