'use strict';

var capacity = 2;


function Airport(weather){
  this._weather = typeof weather !== 'undefined' ? weather : new Weather();
  this._hangar = [];
  capacity = 2;
}

Airport.prototype.planes = function() {
  return this._hangar;
};

Airport.prototype.clearForTakeOff = function(plane) {
  if(this._weather.isStormy()) {
    throw new Error('cannot takeoff during storm');
  }
  this._hangar = [];
};

Airport.prototype.clearForLanding = function(plane) {
  if(this._weather.isStormy()) {
    throw new Error('plane cannot land during storm');
  }
  this._hangar.push(plane);
  if(this._hangar.length > capacity) {
    throw new Error('capacity exceeded');
  }
};
