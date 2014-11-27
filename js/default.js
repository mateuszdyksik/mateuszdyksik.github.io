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


$(function() {
    laser.init();
});
