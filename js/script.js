function ready(){
	console.log('begin')
	$('.hidden-js').hide()
	var boxes = $('.box')

	for(var i = 0; i < boxes.length; i++){
		box = boxes.eq(i);
		if (i % 2 === 0) {
			box.fadeIn(1000);
		} else {
			box.fadeIn(2500);
		}
	}
}

$(document).ready(ready)