function close() {
	$.win.close();
}

function next() {
	Alloy.Globals.openPage.addCurfews();
}

$.speedExplanations.init({
  position : 1
});

$.speedBoundery.init({
	position: {
		latitude: '40.714728',
		longitude: '-73.998672'
	},
  option : 'Exits Geo Fence'
});
