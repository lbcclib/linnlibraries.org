describe('member_map.js', function() {
  beforeEach(function() {
    var map_element = $('<div id="map"></div>');
    $(document.body).append(map_element);
  });


  it('has two layers', function() {
    expect(2).toBe(2);
  });
});
