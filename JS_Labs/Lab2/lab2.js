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

function sumTo(n)
{
    let result = 0;
    for (let i = 1; i <= n; i++)
    {
        result +=i;
    }
    return result;
}

function isLeapYear(year)
{
    if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0)
        return true;
    else
        return false;
}

function factorial(x)
{
    let result = 1n;
    let BigInt_x = BigInt(x);
    if(!x)
        return result;
    else
        return BigInt_x * factorial(x-1);
}

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

function sum(...numbers)
{
    let result = 0;
    for (let i = 0; i < numbers.length; i++)
        result += numbers[i];
    return result;
}