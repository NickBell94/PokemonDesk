const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';

function getRow(firstRow, secondRow) {
let firstCount = 0;
let secondCount = 0 ;

    for(let i = 0; i <= firstRow.length; i++) { 
        if (firstRow.charAt(i) === 'а'){
            firstCount++;
    };
    }

    for(let i = 0; i <= secondRow.length; i++) { 
        if (secondRow.charAt(i) === 'а'){
            secondCount++;
    };
    }

if ( firstCount > secondCount) {
    console.log('Ответ на задание 1 ' + firstRow);
} else {
    console.log('Ответ на задание 1 ' + secondRow);
}
}

 console.log(getRow(firstRow,secondRow));




function formattedPhone(phone) {
let resultString = ''; 

if (phone.length != 12) {
    console.log ('Неверный формат, необходимо 12 символов в формате +712...')
}

for (let i =0; i < phone.length; i++) { 

    if (i == 2) { resultString = phone.substring(0,2) + ' ';  }

    if (i == 3) { resultString += '(' +   phone.substring(2,5) + ')';  }

    if (i == 4) {  resultString += ' ' + phone.substring(5,8) +'-'    }

    if (i == 6) {  resultString += phone.substring(8,10) +'-';    } 

    if (i == 10) {  resultString += phone.substring(10,12)   }
}
    console.log('Ответ на задание 2 ' + resultString);
}
console.log(formattedPhone('+71234567890'));
