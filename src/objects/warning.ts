import Phaser from "phaser";

export class Warning extends Phaser.GameObjects.Container {
    private scope: Phaser.Scene
    constructor(scene: Phaser.Scene, x: number, y: number, text: string) {
        super(scene, x, y)

        scene.add.existing(this)

        let temp = this.scene.add.text(0, 0, text, { fontFamily: 'MapleBold', fontSize: 40, color: '#ff0010', }).setOrigin(0.5)
        this.add(temp)
        scene.time.delayedCall(1000, () => {
            temp.destroy()
        })
    }
}