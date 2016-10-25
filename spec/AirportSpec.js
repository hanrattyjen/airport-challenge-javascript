describe('Airport', function() {

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
    var capacity = 2;
  });

  describe('landing a plane', function() {
    it ('instructs a plane to land', function() {
      airport.land(plane);
      expect(planes.length).toBe(1);
    });
  });

  describe('plane taking off', function() {
    it ('instructs a plane to take off', function() {
      airport.land(plane);
      airport.depart(plane);
      expect(planes.length).toBe(0);
    });
  });

  describe('avoiding collisions', function() {
    it ('prevents landing when airport is full', function() {
      for (var i = 0; i < (capacity+1); i++ ) {
        airport.land(plane);
      }
      expect(airport.full()).toEqual(true);
    });
    it ('prevents landing when airport is full', function() {
      for (var i = 0; i < (capacity+1); i++ ) {
        airport.land(plane);
      }
      expect(airport.land()).toEqual("Airport is full");
    });
  });

  describe('stormy weather prevents take-off', function() {
    it ('plane cannot take off', function() {
      expect(airport.land(plane)).toBe("Too stormy");
    });
  });
});
