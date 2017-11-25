angular.module('fitnessApp')
.factory('Main', Main);

Main.$inject = ['$resource'];
function Main($resource){
  return new $resource('/main/:id', {id: '@_id'}, {
    update: { method: 'PUT' }
  });
}
