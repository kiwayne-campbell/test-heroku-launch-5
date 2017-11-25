angular.module('fitnessApp')
.factory('Retreat', Retreat);

Retreat.$inject = ['$resource'];
function Retreat($resource){
  return new $resource('/retreats/:id', {id: '@_id'}, {
    update: { method: 'PUT' }
  });
}
