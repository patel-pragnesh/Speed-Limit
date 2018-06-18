var i = 0;
function dataTransform(model) {
	var transform = model.toJSON();
	transform.index = i;
	i++;
	return transform;
}

Alloy.Collections.histories.fetch();

function disconnect(e) {
	Alloy.Globals.disconnect();
}
