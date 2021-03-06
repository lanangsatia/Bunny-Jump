import Phaser from 'phaser'
import BunnyJumpScene from './scenes/BunnyJump'
import GameOverScene from './scenes/GameOverScene'


//import HelloWorldScene from './scenes/BunnyJump'

const config = {
	type: Phaser.AUTO,
	width: 480,
	height: 640,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 }
		}
	},
	scene: [BunnyJumpScene, GameOverScene]
}

export default new Phaser.Game(config)
