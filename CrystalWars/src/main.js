window.onload = function() {
    var gameConfig = {
        scale: {
            mode: Phaser.Scale.FIT,
            autoCenter: Phaser.Scale.CENTER_BOTH,
            width: 640,
            height: 360
        },
        type: Phaser.AUTO,
        pixelArt: true,
        scene: [preload, mainMenu]
    };

    var game = new Phaser.Game(gameConfig);
    window.focus();
}