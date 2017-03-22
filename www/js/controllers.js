angular.module('currerter')
.controller('convertController', ['$scope', '$ionicLoading', 'dataService', function($scope, $ionicLoading, dataService){
  $scope.data = {
    amount: 1,
    base: "AUD",
    symbols: "USD",
    currOptions: ["AUD", "BGN", "BRL", "CAD", "CHF", "CNY", "CZK", "DKK", "GBP", "HKD", "HRK", "HUF", "IDR", "ILS", "INR", "JPY", "KRW", "MXN", "MYR", "NOK", "NZD", "PHP", "PLN", "RON", "RUB", "SEK", "SGD", "THB", "TRY", "USD", "ZAR"]
  };

  $scope.submit = function(){
    $ionicLoading.show({
      template: 'Loading...'
    });
    params = {amount: $scope.data.amount, base: $scope.data.base, symbols: $scope.data.symbols};
    dataService.getAmount(params).then(function(res){
      $scope.result = res.data;
      $ionicLoading.hide();
      //console.log($scope.result);
    });
  }
}]);
