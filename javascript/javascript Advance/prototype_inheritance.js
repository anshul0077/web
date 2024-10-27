function namelog(name){
    this.name=name
}
namelog.prototype.greet=function(){
    console.log(`Your name is ${this.name}`)
}
let nn= new namelog("Anshul")
nn.greet()

function game(score){
    this.score=score

}
game.prototype.displayScore=function(){
    console.log(`This is your score${this.score}`)
}
let playerOne= new game(99)
playerOne.displayScore()