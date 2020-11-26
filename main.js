import {random, countBtn, $getElById, generateLog, disabledButtons } from "./utils.js"
import Pokemon from "./pokemon.js";

const player1 = new Pokemon ({
    name: 'Pikachu',
    type: 'electric',
    hp:500,
    selectors:'character',
});

const player2 = new Pokemon ({
    name: 'Charmander',
    type: 'fire',
    hp: 450,
    selectors:'enemy',
});

const  $btn = $getElById('btn-kick');
const $enemyButton = $getElById('btn-enemy-kick');
const $randomButton = $getElById('btn-random');
const btnCountJolt = countBtn(15, $btn);
const btnEnemyKick = countBtn(15, $enemyButton);
const btnRandomKick = countBtn(15, $randomButton);

$btn.addEventListener('click', function () {
    player1.changeHP(random(60, 20), function (count) {
         console.log(generateLog(player1, player2, count));
        disabledButtons(player1.hp.current);
    });
    btnCountJolt();
    });

$enemyButton.addEventListener ('click', function () {
    player2.changeHP(random(60, 10), function (count) {
        console.log(generateLog(player1, player2, count));
       disabledButtons(player2.hp.current);
   });
    btnEnemyKick();
});

$randomButton.addEventListener ('click', function () {
const firstPlayer = player1.changeHP(random(60, 20), function (count) {
    console.log(generateLog(player1, player2, count));
   disabledButtons(player1.hp.current);
});

const secondPlayer = player2.changeHP(random(60, 10), function (count) {
    console.log(generateLog(player1, player2, count));
   disabledButtons(player2.hp.current);
});
    Math.random() > .5 ? firstPlayer : secondPlayer;
    btnRandomKick();
});