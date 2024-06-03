'use strict';
import { fib } from "./lab2.js";

/**
 * Дробная часть числа
 * @param {number} num Число, от которого найдём дробную часть
 * @returns Дробная часть
 */
export function getDecimal(num)
{
    if (num>0)
        return Math.abs((num - Math.trunc(num)).toFixed(2));
    else
        return Math.abs((Math.floor(num) - num));
}

/**
 * Нормализация адреса сайта
 * @param {string} url Адрес сайта
 * @returns Нормализованный адрес
 */
export function normalizeUrl(url)
{
    if (url.includes("https://"))
        return url;
    else if (url.includes("http://"))
        return url.replace("http://", "https://");
    else
        return `https://${url}`;
}

/**
 * Проверка строки на спам
 * @param {string} string Проверяемая строка
 * @returns true если есть 'viagra' или 'XXX'; false если их нет
 */
export function checkSpam(string)
{
    if (string.toLowerCase().includes("xxx") || string.toLowerCase().includes("viagra"))
        return true;
    else
        return false; 
}

/**
 * Проверяет длину строки, если больше максимальной длины, обрезаем, иначе оставляем без изменений
 * @param {string} string Проверяемая строка
 * @param {number} maxlenght Максимально допустимая длина для строки 
 * @returns Изначальная или обрезанная строка
 */
export function truncate(string, maxlenght)
{
    if (string.length > maxlenght)
        return string.slice(0, maxlenght-1) + '\u2026';
    else
        return string;
}

/**
 * Удаляет в строке дефисы (-), и после них заменяет первую букву на заглавную
 * @param {string} str Строка, которую нужно преобразовать
 * @returns Преобразованная строка
 */
export function camelize(str)
{
    let pos, pos2;
    let editstr, outstr;
    if (!str.includes('-'))
        return str;
    else
    {
        pos = str.indexOf('-');
        outstr = str.slice(0, pos);
        pos2 = pos + 1;
        while (true)
        {
            pos = str.indexOf('-', pos2);
            if (pos === -1)
                break;
            editstr = str.slice(pos2, pos);
            editstr = editstr.charAt(0).toUpperCase() + editstr.slice(1);
            outstr += editstr;
            pos2 = pos + 1;
        }
        editstr = str.slice(pos2, str.length);
        editstr = editstr.charAt(0).toUpperCase() + editstr.slice(1);
        return outstr + editstr;
    }
}

/**
 * Возращает числа Фибоначчи до введённого числа
 * @param {number} number Число, до которого найдутся числа Фибоначчи
 * @returns Массив, заполненный числами Фибоначчи
 */
export function fibs (number)
{
    let arrfib = [];
    for (let i = 0; i < number; i++)
        arrfib.push(fib(i));
    return arrfib;
}

/**
 * Сортирует массив в обратном порядке
 * @param {Array} arr Массив, который сортируем
 * @returns Масссив в обратном порядке
 */
export function arrReverseSorted(arr)
{
    let arr_sorted = arr;
    arr_sorted.sort((a, b)=>b-a);
    return arr_sorted;
}

/**
 * Удалает одинаковые значения в массиве
 * @param {Array} arr Входной массив
 * @returns Массив только с уникальными элементами
 */
export function unique(arr)
{
    let unique_arr = new Set(arr);
    return Array.from(unique_arr);
}