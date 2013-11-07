$(document).ready(function(){

	/* /// Разделение суммы на тысячи */
		function format(comma, period) {
		  comma = comma || ',';
		  period = period || '.';
		  var split = this.toString().split('.');
		  var numeric = split[0];
		  var decimal = split.length > 1 ? period + split[1] : '';
		  var reg = /(\d+)(\d{3})/;
		  while (reg.test(numeric)) {
		    numeric = numeric.replace(reg, '$1' + comma + '$2');
		  }
		  return numeric + decimal;
		}

		$('.inp').on('keyup', function(){
		    $(this).val(format.call($(this).val().split(' ').join(''),' ','.'));
		});
	/* Разделение суммы на тысячи /// */

	$('.what_interest .item').click(function(){
		
		var targetId = $(this).index()-1;
		
		if(!$(this).is('.active')) {

			movePointer(targetId);
			showPage(targetId);
		}
		return false;
	});

	function movePointer(id) {

		var leftPos = $('.what_interest .item').eq(id).position().left;
		var width = $('.what_interest .item').eq(id).outerWidth()-$('.what_interest .item').eq(id).width()+($('.what_interest .item').eq(id).width()/2)+leftPos-30;

		$('.pointer_rail .pointer').animate({left: width}, 150, function(){
			$('.what_interest .item.active').removeClass('active')/*.css({'font-weight': '300'})*/;
			$('.what_interest .item').eq(id).addClass('active')/*.css({'font-weight': 'bold'})*/;
		});
	}

	function showPage(id){

		var newHeight = $('.calculate .calc').eq(id-1).height();
		var top = $('body, html').scrollTop();
		$('.calculate .calc:visible').stop(true, true).fadeOut(500);
		$('.calculate .calc').eq(id-1).stop(true, true).fadeIn(500);
		$('.calculate').animate({'height': newHeight});
		/*$('body, html').animate({scrollTop: 0}, 500);*/
	}

	showPage(1);
	movePointer(0);


	function fixSteps(top, step){
		if(top>step) {
			$('.top_steps').css({'position': 'fixed', 'background-color': '#fff', 'box-shadow': '0px 13px 13px 2px #FFFFFF'}).animate({'top': 0}, 100);
			$('.steps_wrap .shadow').fadeIn(1000);
		} else {		
			$('.top_steps').css({'position': 'static', 'background-color': '#f0f4f9', 'box-shadow': 'none'});
			$('.steps_wrap .shadow').fadeIn(2000);
		}
	}

	$(window).scroll(function(){

		var winTop = $(this).scrollTop();
		var stepsTop = $('.steps_wrap').offset().top;

		fixSteps(winTop, stepsTop); 

	});

});