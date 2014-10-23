function ready(){
	console.log('begin')
	$('.hidden-js').hide()
	var boxes = $('.box')
	boxes.fadeIn(2500)

	$('#big').attr('opacity', '0.9')
}

window.onload = ready;