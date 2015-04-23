$(function() {
    function syncSlide( time ) {
	if( time < 1 ) {
	    Reveal.slide( 0 )
	} else if( time < 5 ) {
	    Reveal.slide( 1, 0 )
	} else if( time < 10 ) {
	    Reveal.slide( 1, 1 )
	} else if( time < 15 ) {
	    Reveal.slide( 2 )
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

    $('#title').click( function( event ) {
	$('#video').get( 0 ).play()
    } )
} )
