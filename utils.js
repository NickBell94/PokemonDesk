function random (max, min = 0) {
    const num = max - min;
    return Math.ceil(Math.random() * num) + min; 
}
function $getElById (id) {
    return document.getElementById(id);
   }

function countBtn (count = 15, el) { 
    
    const innerText = el.innerText;
    
    el.innerText = `${innerText}(${count})`;
 return function () {
    count --;
     
     if (count == 0) {
         el.disabled = true;
     }
    
     el.innerText = `${innerText}(${count})`;
     return count;
 }
}

function generateLog (player1,player2, count) {

    const {name, hp: {current, total} } = player1;
    const {name: namePlayer2} = player2;

const logs = [
    `${name} вспомнил что-то важное, но неожиданно ${namePlayer2}, не помня себя от испуга, ударил в предплечье врага. — Нанесено урона -${count} XP [ ${current} / ${total} ] ]` ,
    `${name}, и за это ${namePlayer2} с испугу приложил прямой удар коленом в лоб врага. — Нанесено урона -${count} XP [ ${current} / ${total} ]`,
    `${name} забылся, но в это время наглый ${namePlayer2}, приняв волевое решение, неслышно подойдя сзади, ударил. — Нанесено урона -${count} XP [ ${current} / ${total} ]`,
    `${name} пришел в себя, но неожиданно ${namePlayer2} случайно нанес мощнейший удар. — Нанесено урона -${count} XP [ ${current} / ${total} ]`,
    `${name} поперхнулся, но в это время ${namePlayer2} нехотя раздробил кулаком \<вырезанно цензурой\> противника. — Нанесено урона -${count} XP [ ${current} / ${total} ]`,
    `${name} удивился, а ${namePlayer2} пошатнувшись влепил подлый удар. — Нанесено урона -${count} XP [ ${current} / ${total} ]`,
    `${name} высморкался, но неожиданно ${namePlayer2} провел дробящий удар. — Нанесено урона -${count} XP [ ${current} / ${total} ]`,
    `${name} пошатнулся, и внезапно наглый ${namePlayer2} беспричинно ударил в ногу противника  — Нанесено урона -${count} XP [ ${current} / ${total} ]`,
    `${name} расстроился, как вдруг, неожиданно ${namePlayer2} случайно влепил стопой в живот соперника. — Нанесено урона -${count} XP [ ${current} / ${total} ]`,
    `${name} пытался что-то сказать, но вдруг, неожиданно ${namePlayer2} со скуки, разбил бровь сопернику.  — Нанесено урона -${count} XP [ ${current} / ${total} ]`,
];

 let htmlLogs = logs[random(logs.length - 1)];
 console.log(htmlLogs);
 const $logs = document.querySelector('#logs');
 const $p = document.createElement('p');
 $p.innerText = `${htmlLogs}`;
    $logs.insertBefore($p, $logs.children[0]);

}

function disabledButtons (current) {
const  $btn = $getElById('btn-kick');
const $enemyButton = $getElById('btn-enemy-kick');
const $randomButton = $getElById('btn-random');
    if (current == 0) {
    $btn.disabled = true;
    $enemyButton.disabled = true;
    $randomButton.disabled = true;
    }
}

export  {random, countBtn, $getElById, generateLog, disabledButtons};