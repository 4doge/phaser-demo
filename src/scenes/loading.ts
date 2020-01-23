export class LoadingScene extends Phaser.Scene {

  constructor() {
    super({
      key: 'LoadingScene',
    });
  }

  preload(): void {
    this.load.image('map', './src/assets/map/tiles.png');
    this.load.tilemapTiledJSON('map', './src/assets/map/map.json');
    this.load.spritesheet('player', './src/assets/player/player.png', {
      frameWidth: 32,
      frameHeight: 48,
    });
  }

  create(): void {
    this.scene.start('MainScene');
  }

}
