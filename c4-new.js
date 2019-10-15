// ==UserScript==
// @name           C4 - NEWWWWWWWW
// @version 4.7
// @namespace      cam4_goes_droopy
// @description    cam4 cleanup
// @include       http://*.cam4.com/*
// @include       https://*.cam4.com/*
// @include       https://www.cam4.com/*
// @exclude       https://www.cam4.com/bluemondays
// @require       http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @require       https://raw.githubusercontent.com/kylelder/kylelder.github.io/master/mousetrap.min.js
// @require       https://www.jqueryscript.net/demo/Easy-jQuery-Progress-Bar-Timer-Plugin-For-Bootstrap-3-progressTimer/js/jquery.progressTimer.js
// @grant       GM_xmlhttpRequest
// @run-at         document-start
// ==/UserScript==




$(function(){

    console.log('=============||||| RUNNING C4 AGREE |||||==============');

    if ( $(".login").length ) {
        window.location.replace("http://www.cam4.com/login");
    }


    var url = window.location.href;

    if (url == "https://www.cam4.com/") {
        if (!$(".login").length) {
            window.location.replace("https://www.cam4.com/male?orderBy=MOST_VIEWERS");
        }
    }

});
// =================================================================================





$(function(){

    console.log('=============||||| RUNNING C4 GRID PAGE |||||==============');


// ADD FONT AWESOME ==========================================================
    $('<link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">').appendTo('head');


// REMOVE VARIOUS ELEMENTS ==========================================================
    $(".partner-segment").remove();
    $("#footer").remove();
    $("#subscribeButton").parent().remove();
    $("#openMailBoxButton").parent().remove();
    $("#privateTipButton").parent().remove();
    $(".share-btn").parent().remove();
    $(".meetandfuck").parent().remove();
    $("#fanZoneBtn").parent().remove();
    $("#sexgames").parent().remove();
    $("#addFriendBtn").remove();
    $(".generalNotification").remove();
    $(".directory-segment").remove();
    $(".recent-cams").remove();
    $("#goTopButton").remove();
    $(".skyscraper-ad-1").remove();
    $(".skyscraper-ad-2").remove();
    $(".searchControls-tags").remove();
    $("#subfoot").remove();
    $("#sexgames").remove();

    $('#main-content').removeClass('has-ads');

    $('#headerMenuMainUL > li.desktop-tabs.dropDownButton > ul > li:nth-child(2)').remove();



// MOVE VARIOUS ELEMENTS ==========================================================
    $('.broadcasting-button').prependTo('.navbar-right');



    if( !$('#profileTabMenu').length ) {

        // ADD VARIOUS ELEMENTS ==========================================================
            function addBasics() {
                $('<div class="vid_block-left"></div>').prependTo('.profileBox');
                $('<div class="vid_block-right"></div>').prependTo('.profileBox');
                $('<div class="vid_block-top"></div>').prependTo('.profileBox');
                $('<div class="vid_block-bottom"></div>').prependTo('.profileBox');
                $('<div id="statuss_wrap" class="stathide"><div id="statuss">updated</div></div>').prependTo('body');
                $('<div id="reset" class="reset"><i class="fa fa-refresh"></i></div>').prependTo('.optionsWrapper');

                $('.logo-wrap').wrap('<a href="https://www.cam4.com/male?orderBy=MOST_VIEWERS" class="logo_link"></a>');
                $('#headerMenuMainUL > li.desktop-tabs.dropDownButton > ul').append('<li data-tab="3"><a id="male-tab" href="https://www.cam4.com/male?orderBy=MOST_VIEWERS" class="nopop active">Males</a></li>');

                $('#stickyHeader').append('<div class="progress-wrapper"><div id="progressTimer"></div><a href="https://www.cam4.com/male?orderBy=MOST_VIEWERS"><span class="home-btn"><i class="fa fa-home"></i></span></a><span class="cancel_timer">🚫</span></div>');

                $('.optionsWrapper').prepend('<label class="pref-filter"><input class="sex-filter" id="filter" type="checkbox"><i class="slider fa fa-mars"></i></label>');
            }
            addBasics();



        // MISC. =====================================================================
            function newWindow() {
                $(".profileDataBox > a").attr('target', '_blank');
                $('.logo-wrap > .nopop').css('pointer-events', 'none');
            }
            newWindow();

        // STORE ALL PROFILES FOR RESET ===================================================
            var all_profiles_reset = $('.profileBox');


        // GRID SCROLL JUMP FUNCTION ===================================================
            function scrollJump() {
                if (!$('#profile-content').length) {
                    setTimeout(function(){
                        var contentHeight = $('#content').height();
                        $(window).scrollTop( contentHeight );
                    }, 3000);

                    setTimeout(function(){
                        $(window).scrollTop( 0 );
                    }, 3500);
                }
            }
            scrollJump();




        // STATUS BAR FUNCTION =========================================================
            function statusBar() {
                setTimeout(function() {
                      $('#statuss_wrap').removeClass('stathide');

                      setTimeout(function() {
                          $('#statuss_wrap').addClass('stathide');
                      }, 3000);

                }, 4000);
            }



        // PROFILE COLORS FUNCTION ========================================================
            function addcolors() {

                $('.profileBox .orientation').each(function() {

                    var gayy = $(this).text().indexOf("gay");
                    var bii = $(this).text().indexOf("bisexual");
                    var bic = $(this).text().indexOf("bicurious");
                    var str8 = $(this).text().indexOf("straight");
                    var ukwn = $(this).text().indexOf("unknown");

                    if (gayy != -1) {
                        $(this).parents('.profileDetailArea').addClass('gayyy');
                        $(this).parents('.profileBox').addClass('gay-profile');
                    }

                    if (bii != -1) {
                        $(this).parents('.profileBox').addClass('bi-profile');
                    }

                    if (bic != -1) {
                        $(this).parents('.profileBox').addClass('bi-profile');
                    }

                    if (str8 != -1) {
                        $(this).parents('.profileBox').addClass('str8-profile');
                    }

                    if (ukwn != -1) {
                        $(this).parents('.profileBox').addClass('ukwn-profile');
                    }

                });
            }
            addcolors();



        // ENLARGE THUMBS FUNCTION =======================================================
            function enlargeThumbs() {

                var timeoutId;
                var rect, recttop, winScroll;

                $(".profileBox").hover(function() {
                        var $this = $(this);

                        rect = $(this).offset();
                        recttop = rect.top;
                        winScroll = $(window).scrollTop();


                        if (!timeoutId) {
                            timeoutId = window.setTimeout(function() {
                                timeoutId = null;
                                $this.addClass('enlarge');

                                if (recttop < 94) {
                                    $this.addClass('pushdown');
                                    $('.pushdown').css('top', '100px');
                                }

                                if (recttop < 93) {
                                    $this.addClass('pushdown');
                                    $('.pushdown').css('top', recttop + winScroll + 20);
                                }

                                if (recttop == 270 && winScroll > 130) {
                                    $this.addClass('pushdown');
                                    $('.pushdown').css('top', winScroll - 130);
                                }

                                if (recttop == 484 && recttop < 680 && winScroll > 250) {
                                    $this.addClass('pushdown');
                                    $('.pushdown').css('top', winScroll - 350);
                                }

                                if (recttop == 698 && recttop < 900 && winScroll > 460) {
                                    $this.addClass('pushdown');
                                    $('.pushdown').css('top', winScroll - 560);
                                }

                                if (recttop == 912 && recttop < 1100 && winScroll > 670) {
                                    $this.addClass('pushdown');
                                    $('.pushdown').css('top', winScroll - 775);
                                }

                                if (recttop == 1126 && recttop < 1300 && winScroll > 880) {
                                    $this.addClass('pushdown');
                                    $('.pushdown').css('top', winScroll - 990);
                                }

                                if (recttop == 1340 && recttop < 1500 && winScroll > 1090) {
                                    $this.addClass('pushdown');
                                    $('.pushdown').css('top', winScroll - 1200);
                                }

                                if (recttop == 1554 && recttop < 1700 && winScroll > 1300) {
                                    $this.addClass('pushdown');
                                    $('.pushdown').css('top', winScroll - 1415);
                                }

                                if (recttop == 1768 && recttop < 1900 && winScroll > 1510) {
                                    $this.addClass('pushdown');
                                    $('.pushdown').css('top', winScroll - 1635);
                                }

                                if (recttop == 1982 && recttop < 2100 && winScroll > 1720) {
                                    $this.addClass('pushdown');
                                    $('.pushdown').css('top', winScroll - 1840);
                                }

                                if (recttop > 2400) {
                                    $this.addClass('pushdown');
                                    $('.pushdown').css('bottom', '100px');
                                }


                                if (rect.left < 100) {
                                    $this.addClass('pushright');
                                }

                                if (rect.left > 900) {
                                    $this.addClass('pushleft');
                                }
                            }, 1000);
                        }
                    },
                    function() {
                        if (timeoutId) {
                            window.clearTimeout(timeoutId);
                            timeoutId = null;
                        } else {
                            $(".profileBox").removeClass('enlarge pushdown pushright pushleft');
                            $(".profileBox").removeAttr('style');
                            rect = null;
                            recttop = null;
                        }
                    });
            }
            enlargeThumbs();



        // GAY FILTER FUNCTIONS ===================================================
            var all_profiles;

            function gayProfiles() {

                all_profiles = $('.profileBox');

                var gay = $('.gay-profile');
                var bi = $('.bi-profile');
                var str8 = $('.str8-profile');
                var ukwn = $('.ukwn-profile');

                $('#directoryDiv').append(gay);
                $('#directoryDiv').append(ukwn);
                $('#directoryDiv').append(bi);
                $('#directoryDiv').append(str8);

                enlargeThumbs();

                gay = null;
                bi = null;
                str8 = null;
                ukwn = null;

            }

            function allProfiles() {
                $('#directoryDiv').empty();
                $('#directoryDiv').append(all_profiles);

                enlargeThumbs();

                all_profiles = null;
            }




            $(".sex-filter").click( function() {

                $('.new-tag').remove();

                if ( $(this).is(':checked') ) {
                    gayProfiles();
                } else {
                    allProfiles();
                }

            });

        setTimeout(function() {
            $(".sex-filter").click();
        }, 4000);



        // Directory Click (Pagnation Click) Function ===============================================
            function directoryClickBasics() {
                $('<div class="vid_block-left"></div>').prependTo('.profileBox');
                $('<div class="vid_block-right"></div>').prependTo('.profileBox');
                $('<div class="vid_block-top"></div>').prependTo('.profileBox');
                $('<div class="vid_block-bottom"></div>').prependTo('.profileBox');
                $(".profileDataBox > a").attr('target', '_blank');

                $('.profileBox').each(function() {
                    var prev_URL = $(this).find('a.profile-preview').attr('data-hls-preview-url');
                    var directVid = '<i data-href="'+prev_URL+'" target="_blank" class="direct_vid_url"><i class="fa fa-play-circle"></i></i>';
                    $(this).find('.vid_block-right').append(directVid);

                    var profileURL = $(this).find('a.profile-preview').attr('href');
                    $(this).find('a.profile-preview').attr('href', profileURL+'?directVid='+prev_URL);
                    $(this).find('a.clearfix').attr('href', profileURL+'?directVid='+prev_URL);
                });
            }


        // Directory Click (Pagnation Click) Function ===============================================
            function allProfileReset() {
                $('#directoryDiv').empty();
                $('#directoryDiv').append(all_profiles_reset);

                all_profiles_reset = null;
            }


        // Reset Function =============================================================================
            function resetAll() {
                $('.sex-filter').prop('checked', false);

                //allProfileReset();
                directoryClickBasics();
                enlargeThumbs();
                addcolors();
                scrollJump();
                statusBar();

                setTimeout(function() {
                    $(".sex-filter").click();
                }, 3000);


                $('.direct_vid_url').click( function() {
                    var $this = $(this);
                    var hrefff = $this.attr("data-href"); console.log(hrefff);
                    var win = window.open(hrefff, '_blank');
                    if (win) {
                        win.focus();
                    } else {
                        alert('Please allow popups for this website');
                    }
                });


            }



        // Progress Bar Function ===========================================================
            function progressBar() {
                console.log('progressBar disabled');
                /*
                $(".progress-bar").removeClass("notransition");

                $("#progressTimer").progressTimer({
                    timeLimit: 182,
                    warningThreshold: 20,
                    baseStyle: 'progress-bar-warning',
                    warningStyle: 'progress-bar-danger',
                    completeStyle: 'progress-bar-info',
                    onFinish: function() {
                        //alert('progress bar complete');
                    }
                });
                */
            }
            progressBar();


            var progress_interval = setInterval(function(){ progBar(); }, 182000);

            function progBar() {
                cosnole.log('progBar disabled');
                /*
                $(".progress-bar").addClass("notransition");
                $('.progress-bar').attr('style', "width: 0%");
                progressBar();
                window.location.replace("https://www.cam4.com/male?orderBy=MOST_VIEWERS");
                */
            }



        // Cancel Timer Function ===============================================
            function cancelTimer() {
                $(".progress-bar").addClass("notransition");
                $('.progress-bar').attr('style', "width: 0%");
                clearInterval(progress_interval);
                progress_interval = setInterval(function(){ progBar(); }, 182000);
                progressBar();
            }

            $('.cancel_timer').click(function() {
                cancelTimer();
            });




            document.addEventListener("visibilitychange", function() {
                console.log(document.hidden, document.visibilityState);
            }, false);




        // REMOVE NEWWIN ON PROFILES ======================================================
            setInterval(function(){
                //directoryClickBasics();
                //enlargeThumbs();
                //addcolors();
                //statusBar();
                resetAll();
            }, 182000);


    }




// Directory Click (Pagnation Click) ==========================================================
    $('#directoryPager').click(function() {

        all_profiles_reset = null;

        $('.sex-filter').prop('checked', false);

        setTimeout(function() {

            setTimeout(function() {
                enlargeThumbs();
            }, 5000);

            scrollJump();
            addcolors();
            scrollJump();
            statusBar();

            setTimeout(function() {
                directoryClickBasics();
            }, 1000);

            setTimeout(function() {
                cancelTimer();
            }, 1500);

            setTimeout(function() {
                $(".sex-filter").click();
            }, 4000);

            all_profiles_reset = $('.profileBox');

        }, 2000);

    });




    // RESET ALL CUSTOMIZATIONS BUTTON ==========================================================
        $('.reset').click(function() {
            resetAll();
        });





    // ADD THUMB PREVIEW URL BUTTON ==========================================================

    $('.profileBox').each(function() {

        $(this).find('video.profile-preview').removeAttr('muted');
        $(this).find('.newThumbs .profileBox .profileDataBox>a.profile-preview>video').removeAttr('muted');


        var prev_URL = $(this).find('a.profile-preview').attr('data-hls-preview-url');
        var profileURL = $(this).find('a.profile-preview').attr('href');
        var newProfileURL = profileURL+'?directVid='+prev_URL;


        var directVid = '<i data-href="'+newProfileURL+'" data-href2="'+prev_URL+'" target="_blank" class="direct_vid_url profile-link"><i class="fa fa-play-circle"></i></i>';
        $(this).find('.vid_block-right').append(directVid);

        
        //$(this).find('a.profile-preview').attr('href', profileURL+'?directVid='+prev_URL);
        $(this).find('a.profile-preview').attr('href', prev_URL);
        //$(this).find('a.profile-preview').addClass('profile-link');

        //$(this).find('a.clearfix').addClass('profile-link');
        $(this).find('a.clearfix').attr('href', prev_URL);
        //$(this).find('a.clearfix').attr('href', profileURL+'?directVid='+prev_URL);

        $(this).find('a.profile-link').attr('data-href', prev_URL);

    });


    $(this).find('.newThumbs .profileBox .profileDataBox>a.profile-preview>video').removeAttr('muted');





    $('.profile-link').click( function() {
        console.log(".profile-link CLICKED");

        //setTimeout(function() {
            var $this = $(this);
            var hrefff = $this.attr("data-href"); console.log(hrefff);

            var win = window.open(hrefff, '_blank');
            if (win) {
                win.focus();
            } else {
                alert('Please allow popups for this website');
            }

        //}, 1000);

    });





    $('.direct_vid_url').click( function() {

        console.log("direct_vid_url CLICKED");

        var $this = $(this);
        var hrefff = $this.attr("data-href2"); console.log(hrefff);

        var win = window.open(hrefff, '_blank');
        if (win) {
            win.focus();
        } else {
            alert('Please allow popups for this website');
        }

    });
    


});

// =====================================================================================================================================
// =====================================================================================================================================
// =====================================================================================================================================





$(function(){
//    $('body').append("<div class='customNav'><a class='reloadBtn'><i class='material-icons'>refresh</i></a></div>");



    $('a').each(function() {
        var $this = $(this);

        var hrefs = $this.attr('href');
        var libertystmedia = hrefs.indexOf("libertystmedia");

        if (libertystmedia != -1) {
            $this.remove();
        }
    });


     $('iframe').each(function() {
        var hrefs = $(this).attr('src');
        var libertystmedia = hrefs.indexOf("libertystmedia");

        if (libertystmedia != -1) {
            $(this).remove();
        }
    });


    $('script').each(function() {
        var $this = $(this);

        var libertystmediatext = $(this).text();
        var libertystmediasrc = $this.attr('src');

        if(libertystmediatext !== "undefined") {
            var ISlibertystmediatext = libertystmediatext.indexOf("libertystmedia");
            if (ISlibertystmediatext !== -1) {
                $(this).remove();
            }
        }

        if(libertystmediasrc !== "undefined") {
            console.log(libertystmediasrc);
            var ISlibertystmediasrc = libertystmediasrc.indexOf("libertystmedia");
            if (ISlibertystmediasrc !== -1) {
                $this.remove();
            }
        }
    });



});

// =====================================================================================================================================
// =====================================================================================================================================
// =====================================================================================================================================












$(function(){
    if( $('#profileTabMenu').length ) {

            console.log('=============||||| RUNNING C4 PROFILE PAGES |||||==============');


        $('#videoAdsPlayer').remove();
        $('.logo-wrap').wrap('<a href="https://www.cam4.com/male?orderBy=MOST_VIEWERS" class="logo_link" target="_blank"></a>');
        $('#headerMenuMainUL > li.desktop-tabs.dropDownButton > ul').append('<li data-tab="3"><a id="male-tab" href="https://www.cam4.com/male?orderBy=MOST_VIEWERS" class="nopop active" target="_blank">Males</a></li>');





        // CHANGE PROFILE PIC LINK HREF ==========================================================
        var profPicURL = $("#displayPhoto").attr("src");
        $(".profileMainPhoto a").addClass("profPicLink");

        setTimeout(function() {
            $(".profPicLink").attr("href", profPicURL);
        }, 2000);



        // MUTE TIPS SOUND ==========================================================
            setInterval(function() {
                if (!$('#ts-toggle-new').hasClass('active')) {
                    document.getElementById("ts-toggle-new").click();
                }
            }, 3000);



        // ADD FAVORITES BUTTON ========================================================
            $("#friendFavoriteAdd span").text("♡ Favorite");
            $("#friendFavoriteRemove span").text("♥ Favorited");
            $('#addFavoriteBtn').appendTo('.player-header');


        // IPHONE RESOLUTION BUTTON ===================================================
            $('<div class="iphone"><i class="fa fa-mobile"></i></div>').insertAfter('.performer-details');
            $('#Cam4VChat').addClass('widewide');

            $('.iphone').click( function() {
                $(this).toggleClass('on');
                $('#Cam4VChat').toggleClass('widewide');
                $('#Cam4VChat').toggleClass('mobilex');
            });



        // REMOVE RESET BUTTON ON PROFILES ======================================================
            $('#reset').remove();

        // AUTO LOAD FULL GALLERY ======================================================
        if( $('.seeAllGallery').length ) {
            $('.seeAllGallery a').click();
        }


    }
});



$(document).on("click", function(e) {


    var favebtn = $('#toggleFriendsFavs.active');
    var favebox = $('.friendsAndFavoritesOnline');

/*    if (!favebtn.is(e.target) && (!favebox.is(e.target) && favebox.has(e.target).length === 0) ) {
        $('.friendsAndFavoritesOnline').hide();
        $('#toggleFriendsFavs').removeClass('active');
    }
*/
    if (!favebtn.is(e.target) && favebtn.has(e.target).length === 0 && !favebox.is(e.target) && favebox.has(e.target).length === 0) {
        $('.friendsAndFavoritesOnline').hide();
        $('#toggleFriendsFavs').removeClass('active');
    }

    //e.preventDefault();
});

// =====================================================================================================================================
// =====================================================================================================================================
// =====================================================================================================================================








//.user.js
