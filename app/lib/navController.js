var Alloy = require('alloy'), _ = require("alloy/underscore")._;

// A simple nav controller to kep track of the stack of windows opened
var windowStack = [];
var closeAll = false;


function androidPauseEvent(){
	Ti.API.info('Window Android Pause');
	Alloy.Globals.appActive = 0;
}


function androidResumeEvent(){
	Ti.API.info('Window Android Resume');
	Alloy.Globals.appActive = 1;
}


function open( win, options ){

	windowStack.push( win );

	if( OS_IOS ){
		Alloy.Globals.drawerwhite();
		Alloy.Globals.indexWindow.openWindow( win.getView(), options );
	}
	else{
		win.getView().open(options);
	}

}

function close( doClose ){

	if( windowStack.length > 0 ) {
		var win = windowStack.pop();

		if( doClose ){
			if( OS_IOS ){
				Alloy.Globals.indexWindow.closeWindow( win.getView(), { animated: closeAll ? false : true } );
			}
			else{
				win.getView().close( { animated: closeAll ? false : true } );
			}
		}

	}

	if( windowStack.length < 1 ) {

		if( _.has(Alloy.Globals.indexWindow, 'pafocus') && _.isFunction(Alloy.Globals.indexWindow.pafocus) ){
			Alloy.Globals.indexWindow.pafocus();
		}

		if( OS_IOS ){
			if( Alloy.CFG.issavygroup ){
				Alloy.Globals.drawerwhite();
			}
			else{
				Alloy.Globals.drawerblack();
			}
		}
	}

	if( closeAll == true ){
		//A close all has been called, we need to call close on the next
		//available window

		if( windowStack.length > 0 ) {
			//Call close on the last window on the stack, the callback should trigger this function again
			close(true);
		}
		else{
			//We are done, reset close all
			closeAll = false;
		}

	}

}


function getTopWindow( ){

	if( windowStack.length > 0 ) {
		var currentWindow = _.last(windowStack);
		return currentWindow.getView();
	}
	else{
		return Alloy.Globals.indexWindow;
	}

}


function findWindowController(path){

	var win = null;

	_.each(windowStack, function(ctrl){
		if( ctrl.__controllerPath === path ){
			win = ctrl;
		}
	});

	return win;
}



function closeAllWindows( ){

	if( windowStack.length > 0 ){

		closeAll = true;

		//Trigger close of last window on stack, this will start
		//cascading through all
		close(true);

	}

}


function restart(){

	if( OS_IOS ){
		windowStack = [];
		closeAll = false;
	}
	else{
		closeAllWindows();
	}

}


function switchNav( win, dontopen ){

	var newParent = win;
	Alloy.Globals.indexWindow = newParent;
	resetNavBar();
	restart();

}


function actionBar( window, params ){

	_.defaults(params, {
		title: '',
		isParent: false,
		hideBar: false,
		homeIconCallback: function() {
            window.close();
        }
	});

	if ( OS_ANDROID ) {

		//Run resume to reset the background status
		androidResumeEvent();

        var activity = window.getActivity();
        if (activity) {

			activity.addEventListener('pause', androidPauseEvent);
			activity.addEventListener('resume', androidResumeEvent);

            var actionBar = activity.actionBar;
            if (actionBar) {

            	if( window.navBarHidden || params.hideBar ){
            		actionBar.hide();
            	}
            	else{
            		actionBar.title = params.title;
            		actionBar.logo = '/images/transparent.png';
                	actionBar.displayHomeAsUp = true;
                }

                if( params.isParent ){
                	window.exitOnClose = true;
                }
                else{
                	actionBar.onHomeIconItemSelected = params.homeIconCallback;
                }

            }
        }
    }

}


function hasChild(){

	if( windowStack.length > 0 ) {
		return true;
	}
	else{
		return false;
	}

}


function resetNavBar(){

	if( OS_IOS ){
		if( hasChild() ){
			Alloy.Globals.drawerwhite();
		}
		else{
			if( Alloy.CFG.issavygroup ){
				Alloy.Globals.drawerwhite();
			}
			else{
				Alloy.Globals.drawerblack();
			}
		}
	}

}

exports.open = open;
exports.close = close;
exports.getTopWindow = getTopWindow;
exports.closeAllWindows = closeAllWindows;
exports.restart = restart;
exports.switchNav = switchNav;
exports.actionBar = actionBar;
exports.hasChild = hasChild;
exports.findWindowController = findWindowController;
exports.resetNavBar = resetNavBar;
