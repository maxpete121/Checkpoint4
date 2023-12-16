import { AppState } from "../AppState.js";
import { Quote } from "../models/Quote.js";
import { api } from "./AxiosService.js";


class QuoteService{

    async getQuote(){
        const response = await api.get('api/quotes')
        // console.log('quote grab', response)
        const newQuote = response.data
        let quote = new Quote(newQuote)
        AppState.Quote = quote
        // console.log(AppState.Quote)
        
    }
}

export const quoteService = new QuoteService()