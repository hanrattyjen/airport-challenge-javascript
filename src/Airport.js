'use strict';

function Airport(){
  this._hangar = [];
}

Airport.prototype.planes = function() { return this._hangar; };

Airport.prototype.clearForLanding = function(plane) {
  this._hangar.push(plane);
};

// Airport.prototype.land = function(plane) {
//   airportFull = this.full();
//   if (airportFull === false) {
//     planes.push(plane);
//   } else {
//     return "Airport is full";
//   }
// };

// Airport.prototype.depart = function(plane) {
//   planes.splice(plane);
//   return planes;
// };
//
// Airport.prototype.full = function() {
//   if (planes.length > capacity) {
//     return true;
//   } else {
//     return false;
//   }
// };
