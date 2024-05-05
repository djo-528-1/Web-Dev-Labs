let num;
let flag;
let arr_num=[];

num = prompt("Введите число, до которого нужно найти простые числа");

for (let i = 2; i <= num; i++)
{
    for (let j = 2; j < i; j++)
    {
        if (i % j == 0)
        {
            flag = 1
            break;
        }
        flag = 0;
    }
    if (flag !== 1)
        arr_num.push(i);
}
alert(arr_num);