angular.module('fitnessApp')
.directive('googlePlace', googlePlace);

googlePlace.$inject = ['$window', 'latlng'];

function googlePlace($window, latlng) {
  return {
    restrict: 'A',
    require: 'ngModel',
    scope: {
      place: '='
    },
    link: function($scope, element, attrs, model) {
      const options = {
        types: [],
        componentRestrictions: { country: 'GB' }
      };

      const autocomplete = new $window.google.maps.places.Autocomplete(element[0], options);

      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        const lat_lng = place.geometry.location.toJSON();
        place.geometry.location.lat = lat_lng.lat;
        place.geometry.location.lng = lat_lng.lng;

        latlng.location = lat_lng;

        model.$setViewValue(element.val());
      });
    }
  };
}
