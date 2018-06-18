if ($.args.index === 0) {
	$.row.children[1].top=50;
} else{
	$.row.remove($.row.children[0])
}

$.title.text = $.args.title;
$.subtitle.text = $.args.subtitle;
$.time.text = $.args.date;


if ($.args.title === "BROKEN CURFEW") {
	$.title.color = "#6eabf8";
	$.subtitle.color = "#000";	
};
