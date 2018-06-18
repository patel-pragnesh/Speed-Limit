function close() {
	$.win.close();
}

function next() {
	Alloy.Globals.openPage.addBoundery();
}

$.speedExplanations.init({
  position : 0
});

$.maxSpeedAllowed.init({
  speed : 80
});

$.speedRestriction.init({
  speed : 5
});
