jQuery(document).ready(function($) 
{
	
	


	

	
	
	var q_count;

	//$('.content').hide();
	$('.content').css('opacity', 0)

	$("button").on('click', function(e) {
		// THIS IS EXECUTED DEPENDING ON WINDOW WIDTH
		if($(window).width() < 500)
		{
			$('aside').hide();
		}
		
		$('.intro').fadeOut();
		setTimeout(function() 
		{
			//$('.content').fadeIn();
			$('.content').css('opacity', 1)
			startQuestions();

			setTimeout(function() 
			{
				//SCROLL TO AN ELEMENT FUNCTION
			    $("body, window").animate({ scrollTop: 0 }, 1);
			}, 250);

		}, 250);

		q_count = $('.question').length;

		
		
	});


	function startQuestions(){

		for (var i=1; i<=q_count; i++) {
		    console.log(i);
		    q_class = '.q' + i;
		    q_zIndex = i * -1 + 100;
		    $(q_class).css('zIndex', q_zIndex);
		}


		
		$(".answer").on('click', function(e) {

			var q_fadePlease = $(this).parent().parent().parent().parent().parent().find('.question');

			setTimeout(function() 
			{
				q_fadePlease.fadeOut(function(){
					q_fadePlease.find('.video-wrapper').remove();		
				});

				// SCROLL TO AN ELEMENT FUNCTION
				// $('html, body').animate({
				//     scrollTop:$('.content').offset().top +2000
				// }, 1);

				setTimeout(function() 
				{
					//SCROLL TO AN ELEMENT FUNCTION
					$("body, window").animate({ scrollTop: 0 - 100 }, 1);
				}, 250);

			}, 1000);


			// SCROLL TO AN ELEMENT FUNCTION
				// $('html, body').animate({
				//     scrollTop:$('.content').offset().top
				// }, 1);



		});	

			// SET A DELAY IN A FUNCTION
		
		

	}
	
	// Rotating Card
	function rotateCard(btn){
		var $card = $(btn).closest('.card-container');
		console.log($card);
		if($card.hasClass('hover')){
			$card.removeClass('hover');
		} else {
			$card.addClass('hover');
		}
	}

	$('.manual-flip').click(function(){
		rotateCard(this);
	});


	$('#bt_explications').click(function () {
		$('.quiz .results').fadeOut(300, function () { });
		$('#explications').fadeIn(300);
		$('#explications .result').fadeIn(300);

	});




	// THIS IS EXECUTED WHEN EVERYTHING IS LOADED
	// var everythingLoaded = setInterval(function() {
	//   if (/loaded|complete/.test(document.readyState)) {
	//     clearInterval(everythingLoaded);
	//   }
	// }, 10);

	// USE THIS IF SOMETHING CANT LOAD CORRECTLY
	// $(window).load(function(){
	// });

	// THIS IS DONE AT EVERY SCROLL
	// $(window).scroll(function (event) {
 //    });

    // SCROLL TO AN ELEMENT FUNCTION
    //$('html, body').animate({
    //    scrollTop:$('.element').offset().top
    //}, 1000);

    // SCROLL TO A CALCULATED HEIGHT
	//$('html, body').animate({
    //      scrollTop:$(scrollHeight).offset().top
    //}, 1000);

    // SIMPLE CLICK
 //    $(".menu").click(function(){
	// });
	
    // SET A DELAY IN A FUNCTION
	// setTimeout(function() 
	// {
	// }, 250);

	// KEEP A DIV SQUARE HACK
	// var largeur = $('.un-quart').width();
	// $('.un-quart').height(largeur);

 //   	$(window).resize(function(){
 //   		var largeur = $('.un-quart').width();
 //   		$('.un-quart').height(largeur);
 //    });

   	// THIS IS EXECUTED ON RESIZE
   	// $(window).resize(function(){

    // });

   	// THIS IS EXECUTED DEPENDING ON WINDOW WIDTH
	// if($(window).width() > 500)
	// {
	// }

});
