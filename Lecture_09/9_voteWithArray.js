// регистрируем пришедших на голосование - заносим в хеш-таблицу=объект
// если повторный заход - не позволяется голосовать.

// 1-й вариант

let votedArray = [];

function checkVoterArray(name){
    let alreadyVoted = false;

    for(let i = 0; i < votedArray.length; i++) {
      if (votedArray[i] === name) {
        alreadyVoted = true;
        break;
      } 
    }
      if (alreadyVoted === true) {
        console.log(name + " - kick them out!")
      } else {
        votedArray.push(name)
        console.log(name + " - let them vote!")
      }
    
    console.log(votedArray)
}



checkVoterArray('tom');
checkVoterArray("mike");
checkVoterArray("mike");



checkVoterArray('tom');

checkVoterArray("mike");
checkVoterArray("mike");
checkVoterArray(8);
checkVoterArray("%");
checkVoterArray(checkVoterArray("anna"))
checkVoterArray(checkVoterArray)
checkVoterArray(checkVoterArray())
console.log("votedArray = ",  votedArray)

// ищем в массиве медленно O(n)