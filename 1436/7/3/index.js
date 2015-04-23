$(function() {
    function syncSlide( time ) {
	if( time < 5 ) {
	    Reveal.slide( 0 )
	} else if( time < 10 ) {
	    Reveal.slide( 1 )
	} else if( time < 15 ) {
	    Reveal.slide( 2 )
	} else if( time < 20 ) {
	    Reveal.slide( 3 )
	} else if( time < 25 ) {
	    Reveal.slide( 4 )
	} else if( time < 30 ) {
	    Reveal.slide( 5 )
	}
    }

    $('#video').on( 'timeupdate', function( event ) {
	var time = this.currentTime
	syncSlide( time )
	
    } )

    var $progressBar = $('<div/>').attr( { id: 'progress' } )
    $('body').prepend( $progressBar )
} )
