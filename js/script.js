

jQuery(document).ready(function ($) {

    function isValidEmail(email) {
      var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
      return emailReg.test(email);
    }

    $('#contact_email').focusin(function(){
        $('#email_error').empty();
    });

    $('#contact_email').focusout(function(){
        var emailResult = isValidEmail($('#contact_email').val());
        if (!emailResult) {
            $('#email_error').append("Please Enter a Valid Email Address.");
        }
    });

    // contact form send
    $('#contact_send').click(function(e) {
        e.preventDefault();
        $('#send_email_error').empty();
        $('#contact_send').html("<a><i class='fa fa-circle-o-notch fa-spin'></i></a>");
        var email = $("input[name='email']").val();
        var name = $("input[name='name']").val();
        var subject = $("input[name='subject']").val();
        var body = $("textarea[name='contact_body']").val();

        $.ajax({
            url: 'php/send_email',
            type: "GET",
            data: {
                email: email,
                name: name,
                subject: subject,
                body: body,
            },
            success: function (data) {
                if (data == "Mail Could not be sent") {
                    $('#contact_send').empty();
                    $('#send_email_error').append("Your email could not be sent successfully.  Please contact Eric directly at estreske@gmail.com.");
                } else {
                    $('#contact_send').empty();
                    $('#send_email_error').append("Your email was sent successfully.  Thank you!");
                }
            }
        });
    });


    /* Chart numbers absolute centering */

    var chart = $('.chart'),
        chartNr = $('.chart-content'),
        chartParent = chart.parent();

    function centerChartsNr() {

        chartNr.css({
            top: (chart.height() - chartNr.outerHeight()) / 2
        });

    }

    setTimeout(function () {
        if (chart.length) {

            centerChartsNr();
            $(window).resize(centerChartsNr);

            chartParent.each(function () {

                $(this).onScreen({
                    doIn: function () {
                        $(this).find('.chart').easyPieChart({
                            scaleColor: false,
                            lineWidth: 18,
                            size: 178,
                            trackColor: '#ddd',
                            lineCap: 'square',
                            animate: 2000,
                            onStep: function (from, to, percent) {
                                $(this.el).find('.percent').text(Math.round(percent));
                            }
                        });
                    },
                });

                // $(this).find('.chart').wrapAll('<div class="centertxt" />');

            });

        }
    }, 100);


    /* Side mockups fixes */

    var sideMockup = $('.side-mockup');

    function sideMockups() {

        sideMockup.each(function () {

            var $this = $(this),
                sideMockupHeight = parseInt($this.find('.slider').height()),
                sideMockupParent = $this.parent('.row-content'),
                sideMockupParentPad = parseInt(sideMockupParent.css('padding-top')),
                sideMockupFix = sideMockupHeight + (sideMockupParentPad * 2) + 'px';

            if (!body.hasClass('mobile')) {

                if ($this.hasClass('right-mockup')) {

                    $this.css({
                        'position': 'absolute',
                        'left': '52%'
                    });

                } else if ($this.hasClass('left-mockup')) {

                    $this.css({
                        'position': 'absolute',
                        'right': '52%'
                    });

                }

                sideMockupParent.css({
                    'position': 'relative',
                    'min-height': sideMockupFix
                });

            } else {

                $this.css({
                    'position': 'relative',
                    'left': 'auto',
                    'right': 'auto'
                });

                sideMockupParent.css({
                    'position': 'relative',
                    'min-height': '0'
                });

            }

        });

    }

});