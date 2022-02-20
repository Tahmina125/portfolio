
        $('.num').counterUp({
            delay: 10,
            time: 2000
        });

        //  TYPE JS SETUP 
        var typed = new Typed('.type', {
            strings: [
                'CREATIVE!', 
                'INTELLIGENCE'
                ],
            typeSpeed: 60,
            backSpeed: 60,
            loop: true
        });

        var progressBarOptions = {
            startAngle: -1.55,
            size: 120,
            value: .75,
            fill: {
                color: '#00A99D'
            }
        }

        $('.circle').circleProgress(progressBarOptions).on('circle-animation-progress', function(event, progress, stepValue) {
            $(this).find('strong').text(String(stepValue.toFixed(2)).substr(1));
        });


        $('#circle-b').circleProgress({
            value : 0.92
        });

        $('#circle-c').circleProgress({
            value : 0.68
        });
        $('#circle-d').circleProgress({
            value : .100
        });
        $('#circle-e').circleProgress({
            value : .83
        });
        $('#circle-f').circleProgress({
            value : .50
        });