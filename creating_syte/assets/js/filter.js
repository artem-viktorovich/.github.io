            (function ( $ ) {
                "use strict";
                $(document).ready( function() {

                    /*===========Portfolio isotope js===========*/
                    function portfolioMasonry(){
                        var portfolio = $("#work-portfolio");
                        if( portfolio.length ){
                            portfolio.imagesLoaded( function() {
                                // images have loaded
                                // Activate isotope in container
                                portfolio.isotope({
                                    itemSelector: ".portfolio_single_item",
                                    layoutMode: 'masonry',
                                    filter:"*",
                                    animationOptions :{
                                        duration:1000
                                    },
                                    hiddenStyle: {
                                        opacity: 0,
                                        transform: 'scale(.4)rotate(60deg)',
                                    },
                                    visibleStyle: {
                                        opacity: 1,
                                        transform: 'scale(1)rotate(0deg)',
                                    },
                                    stagger: 0,
                                    transitionDuration: '0.9s',
                                    masonry: {

                                    }
                                });

                                // Add isotope click function
                                $("#portfolio_filter div").on('click',function(){
                                    $("#portfolio_filter div").removeClass("active");
                                    $(this).addClass("active");

                                    var selector = $(this).attr("data-filter");
                                    portfolio.isotope({
                                        filter: selector,
                                        animationOptions: {
                                            animationDuration: 750,
                                            easing: 'linear',
                                            queue: false
                                        }
                                    });
                                    return false;
                                });
                            });
                        }
                    }
                    portfolioMasonry();

                });
            }( jQuery ));