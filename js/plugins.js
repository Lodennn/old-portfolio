/*global $, alert, console*/

$(function () {
    
    'use strict';

    /* Variables */
    var winWid = $(window).innerWidth();
    /* Variables */

    /* Transformation Function -> Reset */
    function resetTransform($elem) {
        $($elem).css("transform", "translate(0)");
    }
    /* Transformation Function -> Reset */
    function shuffleHeader() {
        var $randomNum = $(".header .text p span"),
        $data = 0,
        $timer = 30,
        $change,
        $it,
        $index,
        $letters = ["k", "h", "a", "l", "e", "d", "n", "a", "s", "s", "e", "r"];

        $randomNum.each(function () {
            $change = Math.round(Math.random() * 100);
            $(this).attr("data-change", $change);
        });

        function random() {
            return Math.round(Math.random() * 9);
        }
        //console.log("Random Function: " + random());
        function select() {
            return Math.round(Math.random() * $randomNum.length+1);
        }
        //console.log("Select Function: " + select());
        $it = setInterval(function () {
            $(".header .text p span:nth-of-type("+ select() +")").html('' + random() + '');
            $(".header .text p span:nth-of-type("+ select() +")").attr("data-number", $data);
            $data++;

            $randomNum.each(function () {
                if ( parseInt($(this).attr("data-number")) > parseInt($(this).attr("data-change")) ) {
                    $index = $(".ltr").index($(this));
                    $(this).html($letters[$index]);
                    $(this).removeClass("nbr");
                }
            });
        }, $timer);
    }
    shuffleHeader();
    /* =============MouseMove============== */
    $(".header").mousemove(function (e) {
        $(this).find(".text").css("transform", "rotateY(" + (e.pageX - 350) / 16 + "deg) rotateX(" + -(e.pageY - 350) / 16 + "deg)");
    });
    /* =============WindowScroll=========== */
    $(window).on("scroll", function () {
        var sc = $(window).scrollTop();

        /* Header Trick */
        if (sc > 200) {
            resetTransform(".header .info q");
        }
        /* About Tricks of Transformation */
        if (sc >= $(".about").offset().top - 250) {
            setTimeout(function () {
                $(".about .text h3").addClass("show");
            }, 150);
            setTimeout(function () {
                $(".about .text .line").addClass("show");
            }, 200);
            setTimeout(function () {
                $(".about .text p").addClass("show");
            }, 250);
            setTimeout(function () {
                $(".about .text q").addClass("show");
            }, 300);
        } else {
            setTimeout(function () {
                $(".about .text h3").removeClass("show");
            }, 150);
            setTimeout(function () {
                $(".about .text .line").removeClass("show");
            }, 200);
            setTimeout(function () {
                $(".about .text p").removeClass("show");
            }, 250);
            setTimeout(function () {
                $(".about .text q").removeClass("show");
            }, 300);
        }
        if ($(window).innerWidth() >= 768) {
            if (sc >= $(".about").offset().top - ($(window).height() - 50)) {
                var offset = Math.min(20, sc - $(".about").offset().top + $(window).height() - 550),
                    opacity = (sc / $(".header").height());
                //console.log("OFFSET: " + offset);
                $(".about .book").css("transform", "translateY(" + offset + "px)");
                $(".about .book").css("opacity", opacity);
            }
        }
        /* Skills Tricks of Transformations */
        if (sc >= $(".skills").offset().top - 150) {
            $(".skills .intro p").each(function (i) {
                setTimeout(function () {
                    $(".skills .wrapper .intro p").eq(i).addClass("show");
                }, 300 * (i + 1));
            });
        } else {
            $(".skills .intro p").each(function (i) {
                setTimeout(function () {
                    $(".skills .wrapper .intro p").eq(i).removeClass("show");
                }, 300 * (i + 1));
            });
        }
        /* Skills Second Part */
        if (sc >= $(".skills-main-content").offset().top - 250) { 
            $(".skills .skills-main-content .skill").each(function (i) {
                setTimeout(function () {
                    $(".skills .skills-main-content .skill").eq(i).addClass("show");
                }, 150 * (i + 1));
            });
            $(".skills .skills-main-content ul > li").each(function (i){
                setTimeout(function () {
                    $(".skills .skills-main-content ul > li").eq(i).addClass("show");
                }, 100 * (i + 1));
            });
        }
        if (sc >= $(".skills").offset().top - ($(window).height() / 2)) {
            var slower = sc / 3;
            $(".skills .clouds img").last().css("transform", "translateX(" + slower + "px)");
            $(".skills .intro p").last().css("transform", "translateX(" + slower/4 + "px)");
        }
        /* Works Tricks of Transformation */
        if (sc >= $(".works").offset().top - 250) {
            setTimeout(function () {
                $(".works .text h3").addClass("show");
            }, 150);
            setTimeout(function () {
                $(".works .text .line").addClass("show");
            }, 200);
            setTimeout(function () {
                $(".works .text p").addClass("show");
            }, 250);
            setTimeout(function () {
                $(".works .text q").addClass("show");
            }, 300);
        } else {
            setTimeout(function () {
                $(".works .text h3").removeClass("show");
            }, 150);
            setTimeout(function () {
                $(".works .text .line").removeClass("show");
            }, 200);
            setTimeout(function () {
                $(".works .text p").removeClass("show");
            }, 250);
            setTimeout(function () {
                $(".works .text q").removeClass("show");
            }, 300);
        }
        if (sc >= $(".works-long-wrapper").offset().top - 250) {
            $(".works-long-wrapper .overlay .intro p").each(function (i) {
                setTimeout(function () {
                    $(".works-long-wrapper .overlay .intro p").eq(i).addClass("show");
                }, 300 * (i + 1));
            });
        } else {
            $(".works-long-wrapper .overlay .intro p").each(function (i) {
                setTimeout(function () {
                    $(".works-long-wrapper .overlay .intro p").eq(i).removeClass("show");
                }, 300 * (i + 1));
            });
        }
        if (sc > $(".works-long-wrapper").offset().top - ($(window).height() / 2)) {
            var slower = sc / 3;
            $(".works-long-wrapper .overlay img").css("transform", "translateX(-" + (-150+slower/6) + "px)");
            $(".works-long-wrapper p").last().css("transform", "translateX(" + slower/5 + "px)");
        }
        /* Works Second Part */
        if (sc >= $(".works").offset().top - 250) { 
            $(".works .grid-work .work").each(function (i){
                setTimeout(function () {
                    $(".works .grid-work .work").eq(i).addClass("showGridWorks");
                }, 100 * (i + 1));
            });
        }
        /* Mockup Parallel X */
        if ($(window).innerWidth() >= 991.98) { 
            if (sc >= $(".mockup").offset().top - ($(window).height())) {
                var desktopOffset = Math.min(0, sc - $(".mockup").offset().top + $(window).height() - $(window).height()),
                    laptopOffset = Math.min(0, sc - $(".mockup").offset().top - $(window).height() + 580),
                    tabletOffset = Math.min(0, sc - $(".mockup").offset().top - $(window).height() + 650),
                    mobileOffset = Math.min(0, sc - $(".mockup").offset().top - $(window).height() + 650);
                $(".mockup .desktop").css("transform", "translateY(" + desktopOffset+ "px)");
                $(".mockup .laptop").css("transform", "translateX(" + Math.abs(laptopOffset)+ "px)");
                $(".mockup .tablet").css("transform", "translateX(" + tabletOffset + "px)");
                $(".mockup .mob").css("transform", "translateY(" + Math.abs(mobileOffset) + "px)");
                //console.log("Mobile: " + Math.abs(mobileOffset));
            }
            /* Mockup Parallel X */
        }
    });

    /* Skills Diamonds Working on MD, LG screens */
    if (winWid >= 991.98) {
        $(".skills .skill").each(function () {
            $(this).click(function () {
                if (!$(this).hasClass("trick")) {
                    $(this).addClass("skillAnimate").siblings().removeClass("skillAnimate");
                } else {
                    $(this).addClass("skillAnimate2").siblings().removeClass("skillAnimate2");;
                }
            });
        });
    }

    $(".skills .skills-main-content ul > li").hover(function () {
        $(this).addClass('active').siblings('li').removeClass('active');
    });

    function worksAnimate() {
        $(".works .grid-work > div").removeClass("showGridWorks");
        setInterval(function () {
            var work = $(".works .work"),
                randNum = Math.round(Math.random() * work.length+1),
                randNum2 = Math.round(Math.random() * work.length+1);
            work.eq(randNum).addClass("animate").siblings().removeClass("animate");
            //console.log(randNum + " : " + randNum2);
        }, 1000);
    }
    worksAnimate();

    /* BOOK Function */
    function checkBookButtons() {
        var firstButton     = $(".about .controls button").first(),
            secondButton    = $(".about .controls button").last(),
            start           = $(".about .book .first"),
            end             = $(".about .book .third");
        if (start.hasClass("active")) {
            firstButton.attr("disabled", true);
            firstButton.addClass("disabled");
        } else {
            firstButton.attr("disabled", false);
            firstButton.removeClass("disabled");
        }
        if (end.hasClass("active")) {
            secondButton.attr("disabled", true);
            secondButton.addClass("disabled");
        } else {
            secondButton.attr("disabled", false);
            secondButton.removeClass("disabled");
        }
    }
    function bookAnimation() {
        checkBookButtons();
        var leftBtn     = $(".about .controls button").first(),
            rightBtn     = $(".about .controls button").last();
            rightBtn.click(function () {
                if (rightBtn.find("i").last().hasClass("fa-long-arrow-right")) {
                    $(".about .book .active").removeClass("active").next().addClass("active animate");
                    if ($(".about .book .third").hasClass('active')) {
                        $(".about .book .third").css("z-index", "2");
                    }
                    checkBookButtons();
                }
            });
            leftBtn.click(function () {
                if (leftBtn.find("i").last().hasClass("fa-long-arrow-left")) {
                    $(".about .book .active").removeClass("active animate").prev().addClass("active");
                    checkBookButtons();
                    //console.log("DONE");
                }
            });
    }
    bookAnimation();

    /* Footer Trick */
    $(".footer ul li:last-of-type").click(function () {
        $(this).prev().html("<i class='fa fa-envelope-open'></i>");
    });

    /* Responsive Things ========================================= */
    // About section
    if ($(window).innerWidth() <= 768) {
        $(".about .col-md-7 > .image").css("height", $(window).height());
    }

    /* Burger List */
    $(".hamburger").click(function () {
        $(this).find(".ham").toggleClass("active");
        $(".links").toggleClass("active");
    });

    $(".links li").click(function () {
        var dataC = $(this).data('class');
        $("html, body").animate({
            scrollTop: $("." + dataC).offset().top + 1
        }, 1500);
        $(".hamburger").find(".ham").toggleClass("active");
        $(".links").toggleClass("active");
    });
});

$(window).on("load", function () {
    'use strict';
    /* Transformation Function -> Reset */
    function resetTransform($elem) {
        $($elem).css("transform", "translate(0)");
    }
    /* Transformation Function -> Reset */
    $("#loading").fadeOut('400');
    $("body").css("overflow", 'auto');
    setTimeout(function () {
        $(".header .text p").css("opacity", 1);
        resetTransform(".header .info p:first-of-type");
        $(".header .info .scrollDown").css("right", "-85px");
    }, 500);
});