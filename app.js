(function() {
	// 'use strict';
	angular.module('LunchCheck',[])
	.controller('LunchCheckController',LunchCheckController);
	LunchCheckController.$inject = ['$scope','$filter'];
	function LunchCheckController($scope,$filter) {
	$scope.text1="not exceeded";
	$scope.text2="exceeded";
}
})();