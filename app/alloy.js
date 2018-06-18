//require("alloyxl");

Alloy.Globals.openPage = require("openPage");
Alloy.Globals.utilities = require("utilities");
//Alloy.Globals.NavController = require('navController');

Alloy.Globals.Map = require('ti.googlemaps');
Alloy.Globals.Map.setAPIKey('AIzaSyBifi_4RL-V2zNWaTJa4IN2hznVcqLtzAc');

var reste = require("reste");
Alloy.Globals.API = new reste();
Alloy.Globals.API.config(require("speedLimitAPI").config);

Alloy.Globals.Device = {
	version : Ti.Platform.version,
	versionMajor : parseInt(Ti.Platform.version.split(".")[0], 10),
	versionMinor : parseInt(Ti.Platform.version.split(".")[1], 10),
	width : (Ti.Platform.displayCaps.platformWidth > Ti.Platform.displayCaps.platformHeight) ? Ti.Platform.displayCaps.platformHeight : Ti.Platform.displayCaps.platformWidth,
	height : (Ti.Platform.displayCaps.platformWidth > Ti.Platform.displayCaps.platformHeight) ? Ti.Platform.displayCaps.platformWidth : Ti.Platform.displayCaps.platformHeight,
	dpi : Ti.Platform.displayCaps.dpi,
	orientation : Ti.Gesture.orientation == Ti.UI.LANDSCAPE_LEFT || Ti.Gesture.orientation == Ti.UI.LANDSCAPE_RIGHT ? "landscape" : "portrait"
};
Alloy.Globals.Device.isIphoneX = OS_IOS && Alloy.Globals.Device.height === 812;

if (OS_ANDROID) {
	Alloy.Globals.Device.width = (Alloy.Globals.Device.width / (Alloy.Globals.Device.dpi / 160));
	Alloy.Globals.Device.height = (Alloy.Globals.Device.height / (Alloy.Globals.Device.dpi / 160));
}

Alloy.Globals.Device.width95 = Alloy.Globals.Device.width * 0.95;
