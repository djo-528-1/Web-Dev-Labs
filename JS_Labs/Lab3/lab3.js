export function getDecimal(num)
{
    if (num>0)
        return Math.abs((num - Math.trunc(num)).toFixed(2));
    else
        return Math.abs((Math.floor(num) - num));
}

export function normalizeUrl(url)
{
    if (url.includes("https://"))
        return url;
    else if (url.includes("http://"))
        return url.replace("http://", "https://");
    else
        return `https://${url}`;
}

export function checkSpam(string)
{
    if (string.toLowerCase().includes("xxx") || string.toLowerCase().includes("viagra"))
        return true;
    else
        return false; 
}

export function truncate(string, maxlenght)
{
    if (string.length > maxlenght)
        return string.slice(0, maxlenght-1) + '\u2026';
    else
        return string;
}

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