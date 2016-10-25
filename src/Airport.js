'use strict';

function Airport(){
  this._hangar = [];
}

Airport.prototype.planes = function() { return this._hangar; };

Airport.prototype.clearForTakeOff = function(plane) {
  if(this.isStormy()) {
    throw new Error('cannot takeoff during storm');
  }
  this._hangar = [];
};

Airport.prototype.clearForLanding = function(plane) {
  if(this.isStormy()) {
    throw new Error('plane cannot land during storm');
  }
  this._hangar.push(plane);
};

Airport.prototype.isStormy = function() {

  return false;
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
