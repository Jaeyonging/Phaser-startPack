import Phaser, { Scene } from "phaser"
import { SceneKeys, SpineKeys } from "../consts/keys"
import { Warning } from "../objects/warning";

export default class Main extends Phaser.Scene {
    private warning: Warning
    public key: SceneKeys


    constructor() {
        super(SceneKeys.Main)
    
    }

    preload(){
        console.log("preload")

    }

    create(){
        console.log("create")
    }
    update(){
        
    }

}