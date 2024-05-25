'use strict';

/**
 * Число Фибоначчи
 * @param {number} x Число, для которого найдется число Фибоначчи
 * @returns n-е число Фибоначчи
 */
export function fib (x)
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