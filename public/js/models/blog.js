angular.module('fitnessApp')
.factory('Blog', Blog);

Blog.$inject = ['$resource'];
function Blog($resource){
  return new $resource('/blogs/:id', {id: '@_id'}, {
    update: { method: 'PUT' }
  });
}
