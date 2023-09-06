import Phaser, { Scene } from "phaser"
import WebFont from 'webfontloader'

import { SceneKeys, SpineKeys } from "../consts/keys"

export default class LoadingScene extends Phaser.Scene {
    private completeLoad: boolean = false

    constructor() {
        super(SceneKeys.Loading)
        this.completeLoad = false;
    }

    init() {
        this.time.delayedCall(1000, this.CheckCompleteLoad, [], this)
        this.load.on('complete', this.LoadCompleteListner, this)
    }


    preload() {
        this.load.setPath('assets/spines')
    }

    create() {
        console.log("create in loading")
        WebFont.load({
            custom: {
                families: ['MapleBold']
            }
        })
    }

    CheckCompleteLoad() {
        if (true == this.completeLoad) {
            this.scene.start(SceneKeys.Main, ['learning', '7'])
        } else {
            this.time.delayedCall(500, this.CheckCompleteLoad, [], this)
        }
    }

    LoadCompleteListner() {
        console.log("load complete")
        this.completeLoad = true

    }
}
