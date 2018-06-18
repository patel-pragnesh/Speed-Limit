exports.init = function(args) {
  if (!args.showStatus) {
    $.subContainer.remove($.statusContainer);
  }
  $.speedAbove.text = args.option;
  $.map.image = 'https://maps.googleapis.com/maps/api/staticmap?center='+ args.position.latitude + ',' + args.position.longitude + '&zoom=12&size='+ Math.round(Alloy.Globals.Device.width95 * 2) +'x400'
  //$.speedAbove.text = String.format(L('setSpeedRestriction'), args.speed); // not working?
};
