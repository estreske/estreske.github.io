

jQuery(document).ready(function ($) {

    // contact form send
    $('#contact_send').click(function(e) {
        e.preventDefault();
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
                console.log('sucess');
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