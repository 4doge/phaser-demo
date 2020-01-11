import Player from '../gameObjects/player';

export class MainScene extends Phaser.Scene {
  private map: any;
  private groundLayer: any;
  private wallsLayer: any;
  private player: Player;

  constructor() {
    super({
      key: 'MainScene',
    });
  }

  create(): void {
    this.map = this.add.tilemap('map');
    const tileset = this.map.addTilesetImage('tiles', 'map');
    this.groundLayer = this.map.createStaticLayer('ground', tileset);
    this.wallsLayer = this.map.createStaticLayer('walls', tileset);
    this.wallsLayer.setCollisionByProperty({
      collides: true,
    });
    const spawnPoint = this.map.findObject('objects', (obj: any) => obj.name === 'spawn');
    this.player = new Player({
      x: spawnPoint.x,
      y: spawnPoint.y,
      key: 'player-atlas',
      frame: 'player-0.png',
      scene: this,
    });
    this.physics.add.collider(this.player.sprite, this.wallsLayer);
    // this.cameras.main.startFollow(this.player.sprite);
  }

}
