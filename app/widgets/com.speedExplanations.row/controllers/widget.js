exports.init = function(args) {
  $.bubbles.children.forEach(function(element) {
    element.backgroundColor="#F1F1F1";
  });
  $.textsContainer.children.forEach(function(element) {
    element.color="#a9a9a9";
  });

  $.textsContainer.children[args.position].color="#5aacff";
  $.bubbles.children[args.position].backgroundColor="#5aacff";
};
