import { Scene } from 'phaser';

export default class Player {
  public sprite: any;
  private scene: Scene;

  constructor(params: PlayerConfig) {
    this.scene = params.scene;
    this.sprite = this.scene.physics.add.sprite(
      params.x,
      params.y,
      params.key,
      params.frame,
    );
    this.sprite.setBounce(0, 0);
    // this.scene.anims.create({

    // })
  }
}

interface PlayerConfig {
  x: any;
  y: any;
  key: any;
  frame: any;
  scene: any;
}
