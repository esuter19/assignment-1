var map = L.map('mapid').setView([38.635, -90.234], 16);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var field_house = L.marker([38.6377,-90.2294]).addTo(map);
field_house.bindPopup("<b>Resturant 1</b><br>Field House");

var best_steakhouse = L.marker([38.63857227656365, -90.23170328450512]).addTo(map);
best_steakhouse.bindPopup("<b>Restaurant 2</b><br>The Best Steakhouse");

var goody_cafe = L.marker([38.639613073858904, -90.24336437158907]).addTo(map);
goody_cafe.bindPopup("<b>Restaurant 3</b><br>Goody Cafe");

var rio = L.marker([38.61913970889594, -90.23937448325863]).addTo(map);
rio.bindPopup("<b>Restaurant 4</b><br>Rio de Janeiro Grill");

var everest = L.marker([38.627781286119436, -90.25192812410619]).addTo(map);
everest.bindPopup("<b>Restaurant 5</b><br>Everest Cafe");
