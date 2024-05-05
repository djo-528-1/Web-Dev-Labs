let num;
let exit_flag = 1

num = prompt("Введите число большее 100");

while (exit_flag)
{
    if (num > 100 || num === null)
    {
        exit_flag = 0;
        alert("Выход найден, можешь взять печеньку ;D");
    }
    else
    {
        num = prompt("Это будет вечно. Введите число БОЛЬШЕ 100!");
    }
}