var turf = require('@turf/turf');
var fs = require('fs');

const roundTwoDecimals = function(inputValue) {
  return (Math.round((inputValue * 100))) / 100;
}

var myLocation = {};
myLocation.latitude = 32.75;
myLocation.longitude = -97.3326;

const findClosest = function(placesArray) {
  var smallestDistance = 9999999999;
  var closestLocation = '';
  var options = {
    units: 'miles'
  };
  var myLocationCoordinates = turf.point([myLocation.latitude, myLocation.longitude]);
  placesArray.forEach((place) => {
    var placeEvaluated = turf.point([place.latitude, place.longitude]);
    var distance = turf.distance(myLocationCoordinates, placeEvaluated, options);
    console.log('The distance from my location to ' + place.name + ' is ' + roundTwoDecimals(distance) + ' miles.')
    if (distance < smallestDistance) {
      smallestDistance = distance;
      closestLocation = place.name
    }
  });
  console.log('The closest location is ' + closestLocation + ' at ' + roundTwoDecimals(smallestDistance) + ' miles away.');
  return closestLocation;
}

fs.readFile('./JSON/coordinates.json', function (err, data) {
  if (err) throw err;
  findClosest(JSON.parse(data).coordinates);
})