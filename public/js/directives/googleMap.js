angular.module('fitnessApp')
  .directive('googleMap', googleMap);

googleMap.$inject = ['$window', '$q', "latlng"];
function googleMap($window, $q, latlng) {
  console.log('latlng', latlng);
  return {
    restrict: 'E',
    replace: true,
    template: '<div class="google-map">Google Map HERE!!</div>',
    scope: {
      retreat: '=',
      place: '='
    },
    link: function(scope, element) {
      scope.$watch('retreat', () => {
        if(scope.retreat) {
          console.log('retreat:', scope.retreat);

          var geocoder = new google.maps.Geocoder;
          var address = scope.retreat.address;
          geocoder.geocode( { 'address': address}, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
              const latitude = results[0].geometry.location.lat();
              const longitude = results[0].geometry.location.lng();

              const map = new $window.google.maps.Map(element[0], {
                center: {lat : latitude, lng : longitude},
                zoom: 15,
                scrollwheel: false
              });
              console.log('map',map);
              new $window.google.maps.Marker({
                position: {lat : latitude, lng : longitude},
                map: map,
                animation: $window.google.maps.Animation.DROP
              });
            }
          });
        }
      });
    }
  };
}
