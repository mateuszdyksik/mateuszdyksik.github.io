var laser = (function() {
    /***
    Laser object.

    ***/
    var laserBeam = $('.laser_beam');
    var laserButton = $('#laser-button');

    function init() {
        var isLaserOn = true;
        laserButton.parent()
            .css('cursor', 'pointer')
            .on('click', function() {
                isLaserOn ? powerOff() : powerOn();
                isLaserOn = !isLaserOn;
            });
    };

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

    return {init: init};
})();


var frames = (function() {
    /***
    Frames and frames label animation.

    ***/
    var all_frames = $('.frames');

    function hide() {
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
    };

    function show() {
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
    };

    return {hide: hide,
            show: show};
})();


$(function() {
    frames.hide();

    laser.init();

    frames.show();
});
