angular.module('currerter')
.constant('API_URL', 'https://radiant-reef-55685.herokuapp.com/api/v1/converter/convert')
.service('dataService', function($http, API_URL){
  var source_url = API_URL;
  this.getAmount = function(params){
    return $http.post(source_url, params);
  }
});
