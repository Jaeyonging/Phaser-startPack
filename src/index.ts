import Phaser from 'phaser'
import 'phaser/plugins/spine/dist/SpinePlugin'

import PreloadingScene  from "./scenes/preloading"
import LoadingScene     from "./scenes/loading"
import  Main from "./scenes/main"

const gameConfig: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 400,
    backgroundColor: "#00000",

    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },

    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: true
        }
    },
    scene: [ PreloadingScene, LoadingScene, 
        Main],
    plugins: {
        scene: [
            { key: 'SpinePlugin', plugin: window.SpinePlugin, mapping: 'spine'}
        ]
    }
}

export default new Phaser.Game(gameConfig);
