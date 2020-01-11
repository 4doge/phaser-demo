import 'phaser';
import { LoadingScene } from './scenes/loading';
import { MainScene } from './scenes/main';

const config: Phaser.Types.Core.GameConfig = {
  width: 320,
  height: 320,
  type: Phaser.AUTO,
  parent: 'game',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        y: 300,
      },
    },
  },
  scene: [
    LoadingScene,
    MainScene,
  ],
};

export class Game extends Phaser.Game {
  constructor(config: Phaser.Types.Core.GameConfig) {
    super(config);
  }
}

window.addEventListener('load', () => {
  const game = new Game(config);
});
