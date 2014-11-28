var laser = (function() {
    /***
    Laser animations.

    ***/
    var laserBeam = $('.laser_beam');
    var laserButton = $('#laser-button');

    function powerOn() {
        /***
        Turn on laser.

        ***/
        laserBeam.velocity({opacity: 1});
        laserButton.velocity(
            {translateX: '0px'},
            {delay: 30}
        );
    };

    function powerOff() {
        /***
        Turn off laser.

        ***/
        laserBeam.velocity({opacity: 0});
        laserButton.velocity(
            {translateX: '30px'},
            {delay: 30}
        );
    };

    return {
        init: function() {
            var isLaserOn = true;
            laserButton.parent()
                .css('cursor', 'pointer')
                .on('click', function() {
                    isLaserOn ? powerOff() : powerOn();
                    isLaserOn = !isLaserOn;
                    $(this).trigger('laserPower', isLaserOn);
                });
        }
    };
})();


var monitor = (function() {
    /***
    Monitor animations.

    ***/
    var monitorPowerButton = $('#monitor-power_button');
    var monitorPowerLight = $('#monitor-power_light');
    var monitorFirstModeLight = $('#monitor-first_mode_light');
    var monitorSecondModeLight = $('#monitor-second_mode_light');
    var monitorDisplay = $('#monitor-display');

    function powerOn() {
        /***
        Turn on monitor.

        ***/
        monitorPowerLight.velocity({'fill': '#a6d920'}, {delay: 80});
        monitorSecondModeLight.velocity({'fill': '#ffed00'}, {delay: 20});
        monitorDisplay.velocity({'fill-opacity': '0'}, {delay: 50});
    };

    function powerOff() {
        /***
        Turn off monitor.

        ***/
        monitorPowerLight.velocity({'fill': '#799926'}, {delay: 80});
        monitorFirstModeLight.velocity({'fill': '#8e7d32'}, {delay: 120});
        monitorSecondModeLight.velocity({'fill': '#8e7d32'}, {delay: 120});
        monitorDisplay.velocity({'fill-opacity': '1'}, {delay: 50});
    };

    return {
        init: function() {
            var isMonitorOn = true;
            monitorPowerButton
                .css('cursor', 'pointer')
                .on('click', function() {
                    isMonitorOn ? powerOff() : powerOn();
                    isMonitorOn = !isMonitorOn;
                });
        }
    };
})();


var plot = (function() {
    /***
    Plot animations.

    ***/
    var plot = $('#plot');
    var firstPath = 'm 460,245 c 35,0 40,-65 45,-65 5,0 5,60 15,60 10,0 5,-25 20,-25 15,0 10,30 70,30';
    var flatPath = 'm 460,215 l 150,0';

    return {
        init: function() {
            $('svg')
                .on('laserPower', function(ev, isLaserOn) {
                    if (isLaserOn) {
                        plot.attr('d', firstPath);
                    } else {
                        plot.attr('d', flatPath);
                    }
                });
        }
    };
})();


var frames = (function() {
    /***
    Frames and frames label animation.

    ***/
    var all_frames = $('.frames');

    return {
        hide: function() {
            /***
            Hide all frames and labels.

            ***/
            all_frames
                .css({'opacity': '1'})
                .find('.frame_border')
                    .css({'opacity': '0'})
                .end()
                .find('.frame_label')
                    .children()
                        .css({'opacity': '0'})
                    .end()
                .end()
                .find('.frame_label_name')
                    .children()
                        .css({'opacity': '0'});
        },

        show: function() {
            /***
            Show frames in specified sequence.

            ***/
            var showSequence = [
                {
                    elements: all_frames.find('.frame_border'),
                    properties: 'transition.fadeIn',
                    options: {duration: 1500, delay: 500}
                },
                {
                    elements: all_frames.find('#frame_A-label'),
                    properties: 'transition.bounceRightIn',
                    options: {duration: 100}
                },
                {
                    elements: all_frames.find('#frame_A-label_name'),
                    properties: 'transition.fadeIn',
                    options: {duration: 80}
                },
                {
                    elements: all_frames.find('#frame_B-label'),
                    properties: 'transition.bounceLeftIn',
                    options: {duration: 100, delay: 200}
                },
                {
                    elements: all_frames.find('#frame_B-label_name'),
                    properties: 'transition.fadeIn',
                    options: {duration: 80}
                },
                {
                    elements: all_frames.find('#frame_C-label'),
                    properties: 'transition.bounceLeftIn',
                    options: {duration: 100, delay: 200}
                },
                {
                    elements: all_frames.find('#frame_C-label_name'),
                    properties: 'transition.fadeIn',
                    options: {duration: 80}
                },
                {
                    elements: all_frames.find('#frame_D-label'),
                    properties: 'transition.bounceLeftIn',
                    options: {duration: 100, delay: 200}
                },
                {
                    elements: all_frames.find('#frame_D-label_name'),
                    properties: 'transition.fadeIn',
                    options: {duration: 80}
                },
                {
                    elements: all_frames.find('#frame_E-label'),
                    properties: 'transition.bounceUpIn',
                    options: {duration: 100, delay: 200}
                },
                {
                    elements: all_frames.find('#frame_E-label_name'),
                    properties: 'transition.fadeIn',
                    options: {duration: 80}
                }
            ];

            $.Velocity.RunSequence(showSequence);
        }
    };
})();


$(function() {
    frames.hide();

    laser.init();
    monitor.init();
    plot.init();

    frames.show();
});
