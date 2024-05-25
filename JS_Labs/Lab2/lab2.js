"use strict"
/**
 * Степень
 * @param {number} x Число, которое возводят в степень
 * @param {number} n Степень
 * @returns x возведённое в степень n
 */
function pow(x, n)
{
    let result = 1;
    if (n>0)
    {
        for (let i = 0; i < n; i++)
        {
            result *= x;
        }
    }
    else
    {
        for (let i = 0; i > n; i--)
        {
            result /= x;
        }
    }
    return result;
}

/**
 * Вычисляет сумму чисел от 1 до n
 * @param {number} n До какого числа считать сумму
 * @returns Сумма чисел от 1 до n
 */
function sumTo(n)
{
    let result = 0;
    for (let i = 1; i <= n; i++)
    {
        result +=i;
    }
    return result;
}

/**
 * Проверяет год на високосность
 * @param {number} year Год, который проверяем
 * @returns bool значение високосный ли год
 */
function isLeapYear(year)
{
    if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0)
        return true;
    else
        return false;
}

/**
 * Факториал
 * @param {number} x Число, факториал которого надо найти
 * @returns Факториал числа x
 */
function factorial(x)
{
    let result = 1n;
    let BigInt_x = BigInt(x);
    if(!x)
        return result;
    else
        return BigInt_x * factorial(x-1);
}

/**
 * Число Фибоначчи
 * @param {number} x Число, для которого найдется число Фибоначчи
 * @returns n-е число Фибоначчи
 */
function fib (x)
{
    let x1 = 0n, x2 = 1n;
    if (x === 0)
        return 0n;
    else if (x === 1)
        return 1n;
    else
    {
        for (let i = 1; i < x; i++)
        {
            let result = x1 + x2;
            x1 = x2;
            x2 = result;
        }
        return x2;
    }
}

/**
 * Сравнение 2-х чисел и вывод bool
 * @param {number} x 1-е число
 * @param {number} y 2-е число
 * @returns true если y > x; false если y < x; null если y = x
 */
function compare (x)
{
    return function (y)
    {
        if (y > x)
            return true;
        else if (y < x)
            return false;
        else
            return null;
    }
}

/**
 * Сумма всех элементов
 * @param  {...number} numbers Число/числа для сложения
 * @returns Сумма всех чисел
 */
function sum(...numbers)
{
    let result = 0;
    for (let i = 0; i < numbers.length; i++)
        result += numbers[i];
    return result;
}