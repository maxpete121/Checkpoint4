import { AppState } from "../AppState.js";
import { backgroundService } from "../services/backGroundService.js";
import { Background } from "../models/Background.js";


function _drawBackground(){
    let currentBg = AppState.background
    console.log(currentBg)
    let imgUrl = currentBg.largeImgUrl
    document.getElementById('background-plug').style.backgroundImage= `url('${imgUrl}')`
    document.getElementById('bg-author').innerText = currentBg.author
}


export class BackgroundController{
    constructor(){
        console.log('Background Controller Loaded')
        AppState.on('user', this.getBackground)
    }

    async getBackground(){
        await backgroundService.getBackground()
        _drawBackground()
    }
    
}
