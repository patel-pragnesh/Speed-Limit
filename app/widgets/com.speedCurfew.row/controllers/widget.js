$.from.init({
  title : 'From',
  hour : 7,
  amPm : 'am',
});


$.to.init({
  title : 'To',
  hour : 10,
  amPm : 'pm',
});


var days = ['S','M', 'T', 'W', 'T', 'F', 'S'];
days.forEach(function(item, index, array) {
  $.bubbles.add(Alloy.createWidget('com.days.view', {
    day: item
  }).getView());
});

function selectDay(e) {
  if (e.source.id === "bubble") {
    if (e.source.backgroundColor === "#FFF") {
      setSelect(e);
    } else if (e.source.backgroundColor === "#5aacff") {
      setUnSelect(e);
    }
  }
}

function setSelect(e) {
  e.source.color = "#FFF";
  e.source.backgroundColor = "#5aacff";
}

function setUnSelect(e) {
  e.source.color = "#000";
  e.source.backgroundColor = "#FFF";
}
