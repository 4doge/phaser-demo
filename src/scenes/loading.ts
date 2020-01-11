export class LoadingScene extends Phaser.Scene {

  constructor() {
    super({
      key: 'LoadingScene',
    });
  }

  preload(): void {
    console.log('LoadingScene preload');
    this.load.image('map', './src/assets/map/tiles.png');
    this.load.tilemapTiledJSON('map', './src/assets/map/map.json');
    this.load.atlas('player-atlas', './src/assets/player/player-sprite.png', './src/assets/player/player-atlas.json');
  }

  create(): void {
    console.log('LoadingScene create');
    this.scene.start('MainScene');
  }

}
