class preload extends Phaser.Scene {
    constructor() {
        super("preload")
    }

    preload() {
        this.load.image('particle_1', 'assets/images/particle_1.png');
        this.load.image('button_off_1', 'assets/images/button_off_1.png');
        this.load.image('button_off_2', 'assets/images/button_off_2.png');
        this.load.image('button_on_1', 'assets/images/button_on_1.png');
        this.load.image('button_on_2', 'assets/images/button_on_2.png');
        this.load.image('placeHolder', 'assets/PlaceHolder.png');
        this.load.image('manaOrb', 'assets/images/manaOrb.png');
        this.load.image('board', 'assets/images/board2.png');
        this.load.image('card', 'assets/images/card.png');
        this.load.image('play', 'assets/images/Play.png');
        this.load.image('creditsButton', 'assets/images/CreditsButton.png')
        this.load.image('credits', 'assets/images/credits.png')
        this.load.image('menuButton', 'assets/images/menuButton.png')
        this.load.image('mainMenuBackground', 'assets/images/mainMenuBackground.png')
        this.load.image('optionsButton', 'assets/images/OptionsButton.png')
        this.load.image('optionsBackground', 'assets/images/OptionsBackground.png')
        this.load.image('deckButton', 'assets/images/deckButton.png')
        this.load.image('englishButton', 'assets/images/englishButton.png')
        this.load.image('spanishButton', 'assets/images/spanishButton.png')
        this.load.image('waterDeck', 'assets/images/waterDeck.png')
        this.load.image('fireDeck', 'assets/images/fireDeck.png')
        this.load.image('windDeck', 'assets/images/windDeck.png')
        this.load.image('earthDeck', 'assets/images/earthDeck.png')
        this.load.image('confirmDeckButton', 'assets/images/confirmDeckButton.png')
        this.load.spritesheet('cards', 'assets/spritesheets/Cards.png', {
            frameWidth: 56,
            frameHeight: 82
        });
        this.load.json('info', 'assets/JSONinfo/CardsInfo.json');
        this.load.bitmapFont('dogica', 'assets/fonts/dogica.png', 'assets/fonts/dogica.fnt');
        this.load.image('descBox', 'assets/images/desc_box.png');
        this.load.atlas('crystalCards', 'assets/atlas/spritesheet.png', 'assets/atlas/spritesheet.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
        this.load.image('cardsNames', 'assets/images/nombres.png');
    }

    create() {
        this.scene.start('main_menu');
    }
}
