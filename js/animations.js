$( document ).ready(function() {
    console.log( "ready!" );

$('.tweet-compose').on('click', function() {
	$('#tweet-controls').css( 'visibility', 'visible'); //set tweet controls to be visible when clicked (changed css)
	$('.tweet-compose').css('height', '5em'); //increased height of tweet text box
})

$('.tweet-compose').on('keyup', function() {
	$('#char-count').html(140);
	var tweetLength = $(this).val().length + 1;
	$('#char-count').html(140 - tweetLength);







});


	




// $('#tweetContent').on('click', function() {
// 	var tweet = $('.tweet-compose').val();
// 	$('#stream').prepend(tweet);
// 	$('#stream').prepend(markup);
// })
    	

  













});