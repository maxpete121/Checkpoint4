

export class Quote{
    constructor(data){
        this.author = data.author
        this.content = data.content
    }

    get quoteTemplate(){
        return`
        <div class="text-light">
        <h4>${this.author}</h4>
        <h5>${this.content}</h5>
        </div>
        
        `
    }
}