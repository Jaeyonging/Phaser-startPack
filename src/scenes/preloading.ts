import Phaser from "phaser"

import { SceneKeys, SpineKeys } from "../consts/keys"

export default class PreloadingScene extends Phaser.Scene {
    constructor() {
        super(SceneKeys.Preloading)
    }

    preload() {
        this.load.setPath('assets')
    }

    create() {
        console.log("create in preloading")
        this.scene.start(SceneKeys.Loading)
    }
}
