$(document).ready(function(){
	$('#menu').click(function() {
   	 	$('.nav').css('left', '0px');
   	 	$('.overlay').addClass('overlay-visible');
   	 		});
	$('#close').click(function() {
   		$('.nav').css('left', '-245px');
   	 	$('.overlay').removeClass('overlay-visible');
	});
	$(".rotate").click(function(){
    $(this).toggleClass("down"); 
		}); 
    $('#showHide').click(function (){
    	$('#pContent').slideToggle(200);
    });
    $('#showHide2').click(function () {
    	$('#pContent2').slideToggle(200);
    });
    $('#showHide3').click(function () {
    	$('#pContent3').slideToggle(200);
    });
    $('#showHide4').click(function () {
    	$('#pContent4').slideToggle(200);
    });
    $('#showHide5').click(function () {
    	$('#pContent5').slideToggle(200);
    });
});
$(document).mouseup(function (e) {
    var menu = $('.nav');
    var overLay =$('.overlay');
	if (!menu.is(e.target) && menu.has(e.target).length === 0) {
			menu.css('left', '-245px');
        	overLay.removeClass('overlay-visible')
    	}
    e.preventDefault();
});