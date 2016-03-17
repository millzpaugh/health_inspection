L.mapbox.accessToken = 'pk.eyJ1IjoibWlsbHpwYXVnaCIsImEiOiJjaWxzbWtzdHYwMDJndTlrcmZzZHNlMjBuIn0.Zw-IWCL1tBvlh5NKKKlTsg';


var markers = [{'properties': {'title': 'BETHESDA BAGELS OF DUPONT CIRCLE', 'description': 'Health Inspection Rating: 2', 'marker-symbol': 'restaurant'}, 'geometry': {'coordinates': [-77.045934, 38.913227], 'type': 'Point'}, 'type': 'Feature'}, {'properties': {'title': 'BREADBITE BAKERY', 'description': 'Health Inspection Rating: 2', 'marker-symbol': 'restaurant'}, 'geometry': {'coordinates': [-77.034652, 38.917002], 'type': 'Point'}, 'type': 'Feature'}, {'properties': {'title': 'CATANIA BAKERY', 'description': 'Health Inspection Rating: 3', 'marker-symbol': 'pitch'}, 'geometry': {'coordinates': [-77.009391, 38.908839], 'type': 'Point'}, 'type': 'Feature'}, {'properties': {'title': 'CHEZ HAREG GOURMET BAKERY', 'description': 'Health Inspection Rating: 2', 'marker-symbol': 'restaurant'}, 'geometry': {'coordinates': [-76.98423, 38.910165], 'type': 'Point'}, 'type': 'Feature'}, {'properties': {'title': 'COSTCO WHOLESALE', 'description': 'Health Inspection Rating: 2', 'marker-symbol': 'restaurant'}, 'geometry': {'coordinates': [-74.986858, 44.671516], 'type': 'Point'}, 'type': 'Feature'}, {'properties': {'title': 'CROWN CARRIBEAN BAKERY', 'description': 'Health Inspection Rating: 2', 'marker-symbol': 'restaurant'}, 'geometry': {'coordinates': [-77.027704, 38.955527], 'type': 'Point'}, 'type': 'Feature'}, {'properties': {'title': 'DIVINELY DECADENT DESSERTS', 'description': 'Health Inspection Rating: 0', 'marker-symbol': 'restaurant'}, 'geometry': {'coordinates': [-73.929682, 40.773338], 'type': 'Point'}, 'type': 'Feature'}, {'properties': {'title': 'DUNKIN DONUTS (n)', 'description': 'Health Inspection Rating: 3', 'marker-symbol': 'pitch'}, 'geometry': {'coordinates': [-76.937144, 38.908223], 'type': 'Point'}, 'type': 'Feature'}, {'properties': {'title': 'EL LATINO BAKERY', 'description': 'Health Inspection Rating: 1', 'marker-symbol': 'restaurant'}, 'geometry': {'coordinates': [-77.028028, 38.930855], 'type': 'Point'}, 'type': 'Feature'}, {'properties': {'title': 'EL-EDEN BAKERY', 'description': 'Health Inspection Rating: 4', 'marker-symbol': 'fire-station'}, 'geometry': {'coordinates': [-77.033031, 38.947886], 'type': 'Point'}, 'type': 'Feature'}, {'properties': {'title': 'ENAT ETHIOPIA', 'description': 'Health Inspection Rating: 2', 'marker-symbol': 'restaurant'}, 'geometry': {'coordinates': [-77.027955, 38.965719], 'type': 'Point'}, 'type': 'Feature'}, {'properties': {'title': 'ESHET INJERA', 'description': 'Health Inspection Rating: 2', 'marker-symbol': 'restaurant'}, 'geometry': {'coordinates': [-77.025303, 38.956515], 'type': 'Point'}, 'type': 'Feature'}, {'properties': {'title': 'FAIRMONT HOTEL (BAKERY PASTRY SHOP)', 'description': 'Health Inspection Rating: 3', 'marker-symbol': 'pitch'}, 'geometry': {'coordinates': [-77.051676, 38.905784], 'type': 'Point'}, 'type': 'Feature'}, {'properties': {'title': 'GEORGETOWN CUPCAKE', 'description': 'Health Inspection Rating: 1', 'marker-symbol': 'restaurant'}, 'geometry': {'coordinates': [-77.066254, 38.905277], 'type': 'Point'}, 'type': 'Feature'}, {'properties': {'title': 'GRASSROOTS GOURMET', 'description': 'Health Inspection Rating: 2', 'marker-symbol': 'restaurant'}, 'geometry': {'coordinates': [-77.012324, 38.91573], 'type': 'Point'}, 'type': 'Feature'}, {'properties': {'title': 'HARRIS TEETER', 'description': 'Health Inspection Rating: 1', 'marker-symbol': 'restaurant'}, 'geometry': {'coordinates': [-90.079665, 29.929175], 'type': 'Point'}, 'type': 'Feature'}, {'properties': {'title': 'LE CAPRICE DC CAFE BAKERY', 'description': 'Health Inspection Rating: 3', 'marker-symbol': 'pitch'}, 'geometry': {'coordinates': [-77.0333, 38.932892], 'type': 'Point'}, 'type': 'Feature'}, {'properties': {'title': 'LYON BAKERY', 'description': 'Health Inspection Rating: 3', 'marker-symbol': 'pitch'}, 'geometry': {'coordinates': [-97.15053, 34.174894], 'type': 'Point'}, 'type': 'Feature'}, {'properties': {'title': 'LYON BAKERY FOR UNION MARKET', 'description': 'Health Inspection Rating: 1', 'marker-symbol': 'restaurant'}, 'geometry': {'coordinates': [-103.652554, 41.821773], 'type': 'Point'}, 'type': 'Feature'}, {'properties': {'title': 'METROPOLITAN BAKING COMPANY', 'description': 'Health Inspection Rating: 2', 'marker-symbol': 'restaurant'}, 'geometry': {'coordinates': [-76.971361, 38.920862], 'type': 'Point'}, 'type': 'Feature'}, {'properties': {'title': 'PAN LOURDES BAKERY', 'description': 'Health Inspection Rating: 2', 'marker-symbol': 'restaurant'}, 'geometry': {'coordinates': [-77.03246, 38.932089], 'type': 'Point'}, 'type': 'Feature'}, {'properties': {'title': 'PIE SISTERS OF GEORGETOWN', 'description': 'Health Inspection Rating: 2', 'marker-symbol': 'restaurant'}, 'geometry': {'coordinates': [-77.068404, 38.905247], 'type': 'Point'}, 'type': 'Feature'}, {'properties': {'title': 'RARE SWEETS', 'description': 'Health Inspection Rating: 0', 'marker-symbol': 'restaurant'}, 'geometry': {'coordinates': [-90.056219, 35.122587], 'type': 'Point'}, 'type': 'Feature'}, {'properties': {'title': 'RICO BAKERY (n)', 'description': 'Health Inspection Rating: 2', 'marker-symbol': 'restaurant'}, 'geometry': {'coordinates': [-74.18252, 40.561083], 'type': 'Point'}, 'type': 'Feature'}, {'properties': {'title': 'RISE BAKERY', 'description': 'Health Inspection Rating: 2', 'marker-symbol': 'restaurant'}, 'geometry': {'coordinates': [-77.041733, 38.920857], 'type': 'Point'}, 'type': 'Feature'}, {'properties': {'title': 'ROSEMARYS THYME BISTRO(n)', 'description': 'Health Inspection Rating: 0', 'marker-symbol': 'restaurant'}, 'geometry': {'coordinates': [-77.041408, 38.914345], 'type': 'Point'}, 'type': 'Feature'}, {'properties': {'title': 'SOUK BY THE SWEET LOBBY', 'description': 'Health Inspection Rating: 2', 'marker-symbol': 'restaurant'}, 'geometry': {'coordinates': [-76.861832, 40.807715], 'type': 'Point'}, 'type': 'Feature'}, {'properties': {'title': 'SPRING MILL BREAD CO. BAKERY', 'description': 'Health Inspection Rating: 2', 'marker-symbol': 'restaurant'}, 'geometry': {'coordinates': [-76.861951, 40.807462], 'type': 'Point'}, 'type': 'Feature'}, {'properties': {'title': 'SPRINKLES', 'description': 'Health Inspection Rating: 2', 'marker-symbol': 'restaurant'}, 'geometry': {'coordinates': [-77.059621, 38.905381], 'type': 'Point'}, 'type': 'Feature'}, {'properties': {'title': 'STICKY FINGERS BAKERY', 'description': 'Health Inspection Rating: 2', 'marker-symbol': 'restaurant'}, 'geometry': {'coordinates': [-77.031988, 38.93054], 'type': 'Point'}, 'type': 'Feature'}, {'properties': {'title': "THE BAKER'S LOUNGE", 'description': 'Health Inspection Rating: 2', 'marker-symbol': 'restaurant'}, 'geometry': {'coordinates': [-73.929682, 40.773338], 'type': 'Point'}, 'type': 'Feature'}, {'properties': {'title': 'THE SWEET LOBBY', 'description': 'Health Inspection Rating: 2', 'marker-symbol': 'restaurant'}, 'geometry': {'coordinates': [-76.864493, 40.804226], 'type': 'Point'}, 'type': 'Feature'}, {'properties': {'title': "UNCLE CHIP'S", 'description': 'Health Inspection Rating: 0', 'marker-symbol': 'restaurant'}, 'geometry': {'coordinates': [-77.009397, 38.91011], 'type': 'Point'}, 'type': 'Feature'}, {'properties': {'title': 'ZELALEM INJERA', 'description': 'Health Inspection Rating: 2', 'marker-symbol': 'restaurant'}, 'geometry': {'coordinates': [-76.971938, 38.921387], 'type': 'Point'}, 'type': 'Feature'}]

var map = L.mapbox.map('map', 'mapbox.streets')
  .setView([38.9047, -77.0164], 12)

var myLayer = L.mapbox.featureLayer().addTo(map);

myLayer.setGeoJSON(markers);

var info = document.getElementById('info');

myLayer.eachLayer(function(marker) {
  var link = info.appendChild(document.createElement('a'));
  link.className = 'item';
  link.href = '#';

  // Populate content from each markers object.
  link.innerHTML = marker.feature.properties.title +
    '<br /><small>' + marker.feature.properties.description + '</small>';
  link.onclick = function() {
    if (/active/.test(this.className)) {
      this.className = this.className.replace(/active/, '').replace(/\s\s*$/, '');
    } else {
      var siblings = info.getElementsByTagName('a');
      for (var i = 0; i < siblings.length; i++) {
        siblings[i].className = siblings[i].className
          .replace(/active/, '').replace(/\s\s*$/, '');
      };
      this.className += ' active';

      // When a menu item is clicked, animate the map to center
      // its associated marker and open its popup.
      map.panTo(marker.getLatLng());
      marker.openPopup();
    }
    return false;
  };
});




