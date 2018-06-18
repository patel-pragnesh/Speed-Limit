var moment = require("moment");

var i = 0;
function alertsTransform(model) {
	var transform = model.toJSON();
	transform.index = i;
	transform.date = moment(transform.date).fromNow()
	i++;
	return transform;
}

Alloy.Collections.alerts.fetch();



function disconnect(e) {
	Alloy.Globals.disconnect();
}
