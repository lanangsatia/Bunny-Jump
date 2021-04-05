import Phaser from 'phaser'

var replayButton;
export default class GameOverScene extends Phaser.Scene {
 
    constructor() {
        super('game-over-scene')
    }
 
    preload() {
        this.load.image('background', 'img/Assets/bg_layer1.png')
        this.load.image('gameOver', 'img/Assets/gameover.png')
        this.load.image('replay', 'img/Assets/replay.png')

        //load image teks game over disini
        //load image tombol replay disini
     }
    create() {
        this.add.image(240, 320, 'background')
        this.add.image(240, 280, 'gameOver')
        //this.add.image(240,480, 'replay')

        this.replayButton = this.add.image(240, 420,'replay').setInteractive()
            // berpindah ke bunny jump scene ketika button di klik
            this.replayButton.once('pointerup', () => {
            this.scene.start('bunny-jump-scene')
            }, this)
 }
}