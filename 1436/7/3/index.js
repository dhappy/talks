$(function() {
    $('#video').on( 'timeupdate', function( event ) {
	if( this.currentTime > 10 ) {
	    Reveal.right()
	}
    } )
} )
