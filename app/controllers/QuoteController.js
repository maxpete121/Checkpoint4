import { AppState } from "../AppState.js";
import { Quote } from "../models/Quote.js";
import { quoteService } from "../services/QuoteService.js";


function _drawQuote(){
    let quote = AppState.Quote
    let content = quote.quoteTemplate
    quote += content
    document.getElementById('quote-view').innerHTML = content
}

export class QuoteController{
    constructor(){
        AppState.on('user', this.getQuote)
        AppState.on('Quote', _drawQuote)
    }

    async getQuote(){
        quoteService.getQuote()
    }
}