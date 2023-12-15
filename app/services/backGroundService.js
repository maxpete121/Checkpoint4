import { AppState } from "../AppState.js";
import { api } from "./AxiosService.js";
import { Background } from "../models/Background.js";


class BackgroundService{

    async getBackground(){
        const response = api.get('api/images')

    }
}


export const backgroundService = new BackgroundService()