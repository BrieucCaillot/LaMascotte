$(document).ready(function() {

    // SCROLL DIV ABOUT
        $("h4.menudevice").click(function() {
          $('html,body').animate({
              scrollTop: $("main section:nth-child(3)").offset().top},
              'slow');
        });


    // FORM INPUT CLASS FILLED
    
    /*!
    * classie - class helper functions
    * from bonzo https://github.com/ded/bonzo
    * 
    * classie.has( elem, 'my-class' ) -> true/false
    * classie.add( elem, 'my-new-class' )
    * classie.remove( elem, 'my-unwanted-class' )
    * classie.toggle( elem, 'my-class' )
    */

    /*jshint browser: true, strict: true, undef: true */
    /*global define: false */

    (function(window) {

    'use strict';

    // class helper functions from bonzo https://github.com/ded/bonzo

    function classReg( className ) {
        return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
    }

    // classList support for class management
    // altho to be fair, the api sucks because it won't accept multiple classes at once
    var hasClass, addClass, removeClass;

    if ( 'classList' in document.documentElement ) {
        hasClass = function( elem, c ) {
            return elem.classList.contains( c );
        };
        addClass = function( elem, c ) {
            elem.classList.add( c );
        };
        removeClass = function( elem, c ) {
            elem.classList.remove( c );
        };
    } else {
        hasClass = function( elem, c ) {
            return classReg( c ).test( elem.className );
        };
        addClass = function( elem, c ) {
            if ( !hasClass( elem, c ) ) {
                elem.className = elem.className + ' ' + c;
            }
        };
        removeClass = function( elem, c ) {
            elem.className = elem.className.replace( classReg( c ), ' ' );
        };
    }

    function toggleClass( elem, c ) {
        var fn = hasClass( elem, c ) ? removeClass : addClass;
        fn( elem, c );
    }

    var classie = {
        // full names
        hasClass: hasClass,
        addClass: addClass,
        removeClass: removeClass,
        toggleClass: toggleClass,
        // short names
        has: hasClass,
        add: addClass,
        remove: removeClass,
        toggle: toggleClass
    };

    // transport
    if ( typeof define === 'function' && define.amd ) {
        // AMD
        define( classie );
    } else {
        // browser global
        window.classie = classie;
    }

    })(window);

    (function() {
                // trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
                if (!String.prototype.trim) {
                    (function() {
                        // Make sure we trim BOM and NBSP
                        var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
                        String.prototype.trim = function() {
                            return this.replace(rtrim, '');
                        };
                    })();
                }

                [].slice.call( document.querySelectorAll( 'input.input__field' ) ).forEach( function( inputEl ) {
                    // in case the input is already filled..
                    if( inputEl.value.trim() !== '' ) {
                        classie.add( inputEl.parentNode, 'input--filled' );
                    }

                    // events:
                    inputEl.addEventListener( 'focus', onInputFocus );
                    inputEl.addEventListener( 'blur', onInputBlur );
                } );

                function onInputFocus( ev ) {
                    classie.add( ev.target.parentNode, 'input--filled' );
                }

                function onInputBlur( ev ) {
                    if( ev.target.value.trim() === '' ) {
                        classie.remove( ev.target.parentNode, 'input--filled' );
                    }
                }
    })();

    // Input date modif class
    $(function() {
        if ($("#date_booking").length > 0) {
            $(this).addClass('input--filled');
        } else {
            $(this).removeClass('input--filled');
        }
    });

    // Input time modif class
    $("#time_booking:input").css('opacity', '0');

    $('#time_booking:input').focus(function() {
        if (($("#timespan").hasClass('input--filled')) && ($('#time_booking:input').length>0)){
            $("#time_booking:input").css('opacity', '100');
        }
    });

    $("#time_booking:input").blur(function() {  
        if (!($("#time_booking:input").length)) {
            $("#time_booking:input").removeClass('input--filled');
            $("#timespan").removeClass('input--filled');
            $("#time_booking:input").css('opacity', '0');
        } else {
            $("#time_booking:input").addClass('input--filled');
            $("#timespan").addClass('input--filled');
            $("#time_booking:input").css('opacity', '100');
        }
    });

});
