function namelog(name){
    this.name=name
}
namelog.prototype.greet=function(){
    console.log(`Your name is ${this.name}`)
}
let nn= new namelog("Anshul")
nn.greet()