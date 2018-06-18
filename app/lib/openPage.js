function openController(source, args) {
	return Alloy.createController(source, args).getView();
}

function activeTab() {
	return Alloy.Globals.tabgroup.getActiveTab();
}

exports.termsOfService = function(e) {
	Alloy.Globals.tabgroup.openWindow(openController('wins/add/speedLimit', {}));
	//Alloy.Globals.tabgroup.openWindow(openController('/wins/onBoarding/termsOfService', {}));
};

exports.name = function(e) {
	Alloy.Globals.tabgroup.openWindow(openController('wins/onBoarding/name', {}));
};

exports.deviceSetup = function(e) {
	Alloy.Globals.tabgroup.openWindow(openController('wins/onBoarding/deviceSetup', {}));
};

exports.addSpeedLimit = function(e) {
	Alloy.Globals.tabgroup.openWindow(openController('wins/add/speedLimit', {}));
};

exports.editSpeedLimit = function(e) {
	activeTab().open(openController('wins/edit/speedLimit', {}));
};

exports.addBoundery = function(e) {
	Alloy.Globals.tabgroup.openWindow(openController('wins/add/boundery', {}));
};

exports.editBoundery = function(e) {
	Alloy.Globals.tabgroup.openWindow(openController('wins/edit/boundery', {}));
};

exports.setBoundery = function(e) {
	Alloy.Globals.tabgroup.openWindow(openController('wins/set/boundery', {}));
};

exports.addCurfews = function(e) {
	Alloy.Globals.tabgroup.openWindow(openController('wins/add/curfews', {}));
};

exports.editCurfews = function(e) {
	Alloy.Globals.tabgroup.openWindow(openController('wins/edit/curfews', {}));
};
