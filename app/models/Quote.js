

export class Quote{
    constructor(data){
        this.author = data.author
        this.content = data.content
    }

    get quoteTemplate(){
        return`
        <div class="text-light hoverParent">
        <h4 class="hoverChild">${this.author}</h4>
        <h5>${this.content}</h5>
        </div>
        
        `
    }
}