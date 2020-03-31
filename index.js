const number = +prompt("Введите число")
if (number >10) {
    alert("Больше")
} else if (number <10) {
    alert("Меньше")
} else if (number == 10) {
    alert("Равно")
}


const age = prompt("Введите возраст")
if (age >= 18) {
    alert("Вы совершеннолетний!!!")
} else {
    alert("Вы несовершеннолетний!!!")
}
const result =( age >=18 ? `Вы совершеннолетний` : `Вы несовершеннолетний`)

console.log(result)


const a = +prompt("введите первое число")
const b = +prompt("введите второе число")
const c = +prompt("введите третье число")


if(a > b && a > c ) {
    alert(`Число ${a} оказалось самым большим`)
} else if (b > a && b > c) {
    alert (`Число ${b} оказалось самым большим`)
} else if (c > b && c > a) {
    alert (`Число ${c} оказалось самым большим`)
}




let login = prompt("Введите логин", '')
  if(login == 'text') {
        let password = prompt("Введите пароль")
    if(password =='password') {
        alert("Добро пожаловать,студент");
    } else if(password == '' || password == null) {
        alert("отменено")
    } else {
        alert("Это не правильный пароль")
    } 
    } else if (login == '' || login == null) {
        alert("отменено")
    } else{
        alert("Вы кто?")
    }

let passwordOld = prompt("Введите пароль")
    if (passwordOld == 'study'){
        let passwordNew = prompt("Введите новый пароль")
        if (passwordNew == 'teacher' || passwordNew != passwordOld){
            let passwordNew1 = prompt("Повторите новый пароль")
            if (passwordNew == passwordNew1){
                alert("Успех");
            } else if(passwordNew1 =='' || passwordNew1 == 0 ) {
                alert("это не правильный пароль")
            } else {
                alert("не существует")
            }
            } else if(passwordNew =='' || passwordNew == 0 || passwordNew != passwordOld){
                alert("не верный пароль")
            } else {
                alert ("не существует")
            }
            } else if(passwordOld =='' || passwordOld == 0 ) {
                alert("Это не правильный пароль")
            } else {
                alert("Что-то пошло не так")
            }
    
    
 let money = prompt("usd или eur?");
switch(money) {
    case 'usd' :
        let quantityUsd =  prompt("Введите число для перевода");
        let conversionUsd = quantityUsd / 28;
        alert(`сумма ${quantityUsd} гривен в переводе на usd составит ${conversionUsd}usd`);
        break
    case 'eur' :
        let quantityEur =  prompt("Введите число для перевода");
        let conversionEur =  quantityEur / 31;
        alert(`сумма ${quantityEur} гривен в переводе на EUR составит ${conversionEur} euro`);
        break
}
   
    

const x = +prompt("Введите первое число")
if( x >= 1 && x <= 9){
    alert("Число принято")
}else{
    alert("Не правильное число")
}
const y = +prompt("Введите второе число")
if( y >= 1 && y <= 9){
    alert("Число принято")
}else{
    alert("Не правильное число")
}
const z = +prompt("Результат умножения первого числа на второе")
if (x * y == z){
    alert("Это правильный ответ!")
}else{
    alert(`Вы ошиблись,правильный ответ ${(x * y)} `)
}

let камень = 1
let ножницы = 2
let бумага = 3
let userNumber = prompt('камень-ножницы-бумага?')
const botNumber = Math.floor(Math.random() * (3 - 1 + 1) + 1)
    alert(botNumber)
if(userNumber == 1 && botNumber == 1 || userNumber == 2 && botNumber == 2 || userNumber == 3 && botNumber == 3){
    alert("Ничья")
} else if (userNumber == 1 && botNumber == 2){
    alert ("Ваш камень привел вас к победе")
} else if (userNumber == 1 && botNumber == 3){
    alert ("Ваш камень проиграл")
} else if (userNumber == 2 && botNumber == 1){
    alert ("Ножницы привели вас к  победе")
} else if (userNumber == 2 && botNumber == 3){
    alert ("Ножницы привели вас к паражению")
} else if ( userNumber == 3 && botNumber == 1){
    alert ("Бумага привела вас к победе")
} else if (userNumber == 3 && botNumber == 2){
    alert ("Бумага привела вас к поражению")
}else{
    alert("Что-то пошло не так")
}


const comparison = userNumber == 1 && botNumber == 1 || userNumber == 2 && botNumber == 2 || userNumber == 3 && botNumber == 3 ? "Ничья":
 userNumber == 1 && botNumber == 2 ? "Ваш камень привел вас к победе":
 userNumber == 1 && botNumber == 3 ? "Ваш камень проиграл":
 userNumber == 2 && botNumber == 1 ? "Ножницы привели вас к  победе":
 userNumber == 2 && botNumber == 3 ? "Ножницы привели вас к паражению":
 userNumber == 3 && botNumber == 1 ? "Бумага привела вас к победе":
 userNumber == 3 && botNumber == 2 ? "Бумага привела вас к поражению":
 "Что-то пошло не так";
 alert(comparison);