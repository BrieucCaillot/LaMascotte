$(document).ready(function() {

    /* FIXED MENU */
    $(document).on("scroll", function() {

        if ($(document).scrollTop()>80) {

            $("header").css({
                "z-index": "200",
                "min-height": "60px",
                "background-color": "rgb(107, 151, 127)",
            });

            $("header nav").css({
                "padding": "19px 0px 0px 0px"
            });

            $("#logo img").css({
                "width": "145px",
            });

            $("header #logo").css({
                "padding": "10px 0 0 0",
            });

            $("header #headersocial").css({
                "padding": '20px 0',
            });
            
        } else {
            $("header").css({
                "position": "",
                "z-index": "",
                "color": "",
                "background-color": "",
                "border-bottom": "",
                "min-height": ""
            });

            $("header nav").css({
                "padding": '',
            });

            $("#logo img").css({
                "width": "",
                "position": '',
                "top": "",
                "left": ""
            });

            $("header #logo").css({
                "padding": ""
            });

            $("header #headersocial").css({
                "padding": '',
            });
        }
    });

    // PROGRESS BAR ON SCROLL
    function updateProgress(num1, num2){
        var percent = Math.ceil( num1 / num2 * 100 ) + '%';
        document.getElementById('progress').style.width = percent;
    }

    window.addEventListener('scroll', function(){
        var top = window.scrollY;
        var height = document.body.getBoundingClientRect().height - window.innerHeight;
        updateProgress(top, height);
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

});