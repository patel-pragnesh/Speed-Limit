if($.args.index >= 0){
  $.tabs.children.forEach(function(item, index, array) {
    if($.args.index !== index) setInactive(item);
  });

  setActive($.tabs.children[$.args.index]);
  $.separator.left = $.args.index * 33.3 + "%";
}

function setInactive(item) {
  item.backgroundColor = "transparent";
  item.color = "#888888";
}

function setActive(item) {
  item.backgroundColor = "#181818";
  item.color = "#6eabf8";
}

function changeTab(e) {
  Alloy.Globals.tabgroup.setActiveTab(e.source.tab);
}
