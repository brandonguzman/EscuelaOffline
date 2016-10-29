var dis;
$(document).on("ready",function() {	
	$('#boton').on('click',function(){
		dis = $('#canvas').css('display');
		if (dis == 'none') {
			$('#canvas').css('display','block');
			$('#canvas').animate({height: 500},500);
		}
		if (dis != 'none') {
			$('#canvas').animate({height: 0},500,function(){
 				$('#canvas').animate({height: 500,})	
			})		
		}	
	});

});

