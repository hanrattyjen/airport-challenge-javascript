var Airport = function() {};
var Plane = function() {};

var planes = [];
var capacity = 2;

Airport.prototype.land = function(plane) {
  airportFull = this.full();
  if (airportFull === false) {
    planes.push(plane);
  } else {
    return "Airport is full";
  }
};

Airport.prototype.depart = function(plane) {
  planes.splice(plane);
  return planes;
};

Airport.prototype.full = function() {
  if (planes.length > capacity) {
    return true;
  } else {
    return false;
  }
};
