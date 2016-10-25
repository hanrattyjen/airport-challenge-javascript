'use strict';

describe('Airport', function() {
  var airport;
  var plane;
  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpy('plane',['land']);
  });

  it('has no planes by default', function() {
    expect(airport.planes()).toEqual([]);
  });

  it('can clear planes for landing', function() {
    airport.clearForLanding(plane);
    expect(airport.planes()).toEqual([plane]);
  });
  it('can clear planes for takeoff', function(){
    airport.clearForLanding(plane);
    airport.clearForTakeOff(plane);
    expect(airport.planes()).toEqual([]);
  });
});
  // describe('plane taking off', function() {
  //   it ('instructs a plane to take off', function() {
  //     airport.land(plane);
  //     airport.depart(plane);
  //     expect(planes.length).toBe(0);
  //   });
  // });
  //
  // describe('avoiding collisions', function() {
  //   it ('prevents landing when airport is full', function() {
  //     for (var i = 0; i < (capacity+1); i++ ) {
  //       airport.land(plane);
  //     }
  //     expect(airport.full()).toEqual(true);
  //   });
  //   it ('prevents landing when airport is full', function() {
  //     for (var i = 0; i < (capacity+1); i++ ) {
  //       airport.land(plane);
  //     }
  //     expect(airport.land()).toEqual("Airport is full");
  //   });
  // });
  //
  // describe('stormy weather prevents take-off', function() {
  //   it ('plane cannot take off', function() {
  //     expect(airport.land(plane)).toBe("Too stormy");
  //   });
  // });
