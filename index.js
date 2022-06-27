$( "body" ).addClass( "dark" )

$( ".change" ).on("click", function() {
    if( $( "body" ).hasClass( "dark" )) {
        $( "body" ).removeClass( "dark" );
        $( ".change" ).text( '☼');
    } else {
        $( "body" ).addClass( "dark" );
        $( ".change" ).text( "☾" );
    }
});