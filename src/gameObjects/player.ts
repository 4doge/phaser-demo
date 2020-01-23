import { Scene } from 'phaser';

export default class Player {
  public sprite: any;
  private scene: Scene;
  private cursors: any;
  private status: Statuses;

  constructor(params: PlayerConfig) {
    this.scene = params.scene;
    this.sprite = this.scene.physics.add.sprite(
      params.x,
      params.y,
      'player',
    );
    this.status = Statuses.IDLE;
    this.sprite.setBounce(0, 0);
    this.cursors = this.scene.input.keyboard.createCursorKeys();
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

  update() {
    const previousVelocity = this.sprite.body.velocity.clone();
    const x = this.cursors.left.isDown ? -1 : this.cursors.right.isDown ? 1 : 0;
    const y = this.cursors.up.isDown ? -1 : this.cursors.down.isDown ? 1 : 0;

    if (x === -1) {
      console.log('Left!');
      this.sprite.anims.play('run-left');
    } else if (x === 1) {
      console.log('Right!');
      this.sprite.anims.play('run-right');
    }

    if (x === 0 && y === 0) {
      if (this.status !== Statuses.IDLE && (previousVelocity.y !== 0 || previousVelocity.x !== 0)) {
        console.log('was not idle');
        this.status = Statuses.IDLE;
        this.sprite.anims.play('idle');
      } else {
        if (this.status === Statuses.IDLE && previousVelocity.y === 0 && previousVelocity.x === 0) {
          console.log('was idle');
          this.status = Statuses.RUN_LEFT;
          this.sprite.anims.play('idle');
        }
      }
    }

    this.sprite.body.setVelocity(0);
    this.sprite.body.setVelocity(x * 150, y * 150);
  }
}

interface PlayerConfig {
  x: number;
  y: number;
  scene: any;
}

enum Statuses {
  IDLE = 'idle',
  RUN_LEFT = 'run-left',
  RUN_RIGHT = 'run-right',
  RUN_TOP = 'run-top',
  RUN_BOTTOM = 'run-bottom',
}
