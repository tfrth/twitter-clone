$( document ).ready(function() {
    console.log( "ready!" );

$('.tweet-compose').on('click', function() {
	$('#tweet-controls').css( 'visibility', 'visible'); //set tweet controls to be visible when clicked (changed css)
	$(this).css('height', '5em'); //increased height of tweet text box
	

    })

$('.tweet-compose').on('keypress', function() {
	var tweetLength = $(this).val().length + 1;
	$('#char-count')
	

})	




$('#tweetContent').on('click', function() {
	var tweet = $('.tweet-compose').val();
	$('#stream').prepend(tweet);
	$('#stream').prepend(markup);
})
    	

  













});