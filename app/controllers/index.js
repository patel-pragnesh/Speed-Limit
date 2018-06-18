var _introController;
var _homeController;

function fakeLogin() {
	Alloy.Globals.userObject = {
		test : ""
	};
	init();
	setTimeout(function(){ Alloy.Globals.userObject = null; }, 1000);
}
//fakeLogin()

Alloy.Globals.fakeLogin = fakeLogin;

function init() {
	if (!Alloy.Globals.userObject) {
		_introController = Alloy.createController('/wins/onBoarding/index', {
			fonction : displayHome,
		});
		_introController.window.open();
	} else {
		displayHome();
	}
}

init();

function displayHome() {
	if (!_homeController) {
		_homeController = Alloy.createController('tabgroup');
		_homeController.window.open();
	};

	if (_introController) {
		_introController.window.close();
		_introController = null;
	}
}

function disconnect() {
	Ti.App.Properties.removeProperty('userinfos', null);
	Ti.App.Properties.setObject('userinfos', null);
	Alloy.Globals.userObject = Ti.App.Properties.getObject('userinfos');
	init();
	if (_homeController) {
		_homeController.window.close();
		_homeController = null;
	}
}

Alloy.Globals.disconnect = disconnect;
