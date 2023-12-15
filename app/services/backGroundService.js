import { AppState } from "../AppState.js";
import { api } from "./AxiosService.js";
import { Background } from "../models/Background.js";


class BackgroundService{

    async getBackground(){
        const response = await api.get('api/images')
        // await console.log(response)
        const newBackground = response.data
        let backGround = new Background(newBackground)
        AppState.background = backGround
    }
}


export const backgroundService = new BackgroundService()