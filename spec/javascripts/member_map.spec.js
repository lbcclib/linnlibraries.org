var featureNameMatcher = {
  toHaveFeatureNamed: function(util, customEqualityTesters) {
    return {
      compare : function(actual, expected) {
        for (i = 0; i < actual.length; i++) {
          console.error(actual[i].get('name'));
        }
        var result = {};
        result.pass = actual.find(function(feature) {
          return feature.get('name') === expected
        });
        return result;
      }
    };
  }
}; 


describe('member_map.js', function() {
  beforeEach(function() {
    jasmine.addMatchers(featureNameMatcher);
    var map_element = $('<div id="map"></div>');
    $(document.body).append(map_element);
  });


  it('has two layers', function() {
    expect(map.getLayers().getArray().length).toBe(2);
  });

  it('has 8 features in the top layer', function() {
    source = map.getLayers().getArray()[1].getSource();
    expect(source.getFeatures().length).toBe(8);
  });

  it('includes a feature for Scio Public Library', function() {
    source = map.getLayers().getArray()[1].getSource();
    expect(source.getFeatures()).toHaveFeatureNamed('Scio Public Library');
  });

  it('does not includ a feature for the Library of Congress', function() {
    source = map.getLayers().getArray()[1].getSource();
    expect(source.getFeatures()).not.toHaveFeatureNamed('Library of Congress');
  });
});
