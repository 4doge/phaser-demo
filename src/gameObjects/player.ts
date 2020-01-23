import { Scene } from 'phaser';

export default class Player {
  public sprite: any;
  private scene: Scene;

  constructor(params: PlayerConfig) {
    this.scene = params.scene;
    this.sprite = this.scene.physics.add.sprite(
      params.x,
      params.y,
      'player',
    );
    this.sprite.setBounce(0, 0);
    this.scene.anims.create({
      key: 'run-left',
      frameRate: 10,
      repeat: -1,
      frames: this.scene.anims.generateFrameNumbers('player', {
        start: 0,
        end: 3,
      }),
    });
    this.scene.anims.create({
      key: 'run-right',
      frameRate: 10,
      repeat: -1,
      frames: this.scene.anims.generateFrameNumbers('player', {
        start: 5,
        end: 8,
      }),
    });
    this.scene.anims.create({
      key: 'idle',
      frameRate: 20,
      frames: [
        {
          key: 'player',
          frame: 4,
        },
      ],
    });
  }
}

interface PlayerConfig {
  x: number;
  y: number;
  scene: any;
}
