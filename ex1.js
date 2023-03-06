const users = [ { name: 'Victor', score: 20 },
{ name: 'Mario', score: 10 },
{ name: 'Tatiana', score: 30 } ]

function give_score(item){
    return item.score;
}
let scores = [];
scores = users.map(give_score)
console.log( scores)
