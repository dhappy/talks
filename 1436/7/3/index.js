$(function() {
    var video = $('#video').get( 0 )
    var $progress = $('#progress')

    $('#video').on( 'timeupdate', function( event ) {
        var percentage = ( 100 / video.duration ) * video.currentTime
        $("#inner").css( { width: percentage + '%' } )
    } )

    $progress.on( 'input', function( event ) {
        var percentage = event.target.value
        $("#inner").css( { width: percentage + '%' } )
        setTimeout(function () {
            video.currentTime = ( percentage * video.duration ) / 100
        }, 1 )
    } )

    $('#video').on( 'timeupdate', function( event ) {
	var time = this.currentTime
	if( time < 1 ) {
	    Reveal.slide( 0 )
	} else if( time < 5 ) {
	    Reveal.slide( 1, 0 )
	} else if( time < 10 ) {
	    Reveal.slide( 1, 1 )
	} else if( time < 15 ) {
	    Reveal.slide( 1, 2 )
	} else if( time < 20 ) {
	    Reveal.slide( 2 )
	} else if( time < 25 ) {
	    Reveal.slide( 4 )
	} else if( time < 30 ) {
	    Reveal.slide( 5 )
	}
    } )

    $('#title').click( function( event ) {
	$('#video').get( 0 ).play()
    } )
} )
