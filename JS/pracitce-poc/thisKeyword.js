const laptop1 = {
    processor : "i5",
    brand : "intel",
    ram : 16,
    getConfig : function(){
        return `${this.processor} ${this.brand} ${this.ram} `
    }
}

console.log(laptop1.getConfig())

//instead of this we can also use laptop1.processor.... laptop1.brand 