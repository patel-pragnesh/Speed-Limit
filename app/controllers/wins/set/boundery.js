function close() {
	$.win.close();
}

function next() {

}

var mapView = Alloy.Globals.Map.createView({
		borderRadius: 5,
    mapType: Alloy.Globals.Map.MAP_TYPE_NORMAL,
    myLocationEnabled: true,
    region: {
        latitude: 37.368122,
        longitude: -121.913653,
        zoom: 10
    }
});
$.mapsContainer.add(mapView)

function setMiles(e){
	if(e.source.id === "container"){
		$.setBounderies.children.forEach(function(item, index, array) {
			item.children[0].borderColor = "#b7b7b7";
			item.children[0].children[0].children[0].color = "#000";
		});

		if (e.source.children[0].borderColor === "#b7b7b7") {
			e.source.children[0].borderColor = "#5aacff";
			e.source.children[0].children[0].children[0].color = "#5aacff";
		}
	}
}
