// регистрируем пришедших на голосование - заносим в хеш-таблицу=объект
// если повторный заход - не позволяется голосовать.

let voted = {};

function checkVoter(name){
    if (voted[name]) {
        console.log(name + " - kick them out!")
    } else {
        voted[name] = true;
        console.log(name + " - let them vote!")
    }
}


checkVoter('tom');
checkVoter("mike");
checkVoter("mike");

checkVoter('tom');
checkVoter("mike");
checkVoter("mike");
checkVoter(8);
checkVoter(8);
checkVoter("%");
checkVoter(checkVoter("anna"));
checkVoter(checkVoter);
 checkVoter(checkVoter());
console.log("Object voted = ",  voted);

// используем hash table поиск мгновенный O(1)