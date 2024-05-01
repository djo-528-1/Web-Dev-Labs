'use strict';
let age, gender;

alert("Введите свои данные");
age = prompt("Введите свой возраст");
gender = prompt("Введите свой пол (м/ж)");

function check_input()
{
    if (age < 18)
    {
        return "Вам работать ещё рано — учитесь";
    }
    else if (gender === "м" && age < 60)
    {
        return "Вам ещё работать и работать";
    }
    else if (gender === "ж" && age < 55)
    {
        return "Вам ещё работать и работать";
    }
    else if (gender === "м" && age < 65)
    {
        return "Скоро пенсия!";
    }
    else if (gender === "ж" && age <60)
    {
        return "Скоро пенсия!"
    }
    else if (gender === "м" && age > 64)
    {
        return "Вам пора на пенсию";
    }
    else if (gender === "ж" && age > 59)
    {
        return "Вам пора на пенсию";
    }
    else
        return "Да кто ты такой?";
}

alert(check_input()); 