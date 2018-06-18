exports.init = function(args) {
  $.speedAbove.text = args.speed + ' mph above';
  //$.speedAbove.text = String.format(L('setSpeedRestriction'), args.speed); // not working?
};
