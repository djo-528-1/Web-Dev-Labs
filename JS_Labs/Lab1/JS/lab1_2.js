let num;

num = prompt("Введите число");

function Raven ()
{
    if (parseInt(num) == num && num >= 0)
    {
        let end_flag;
        let output = "На ветке сидит " + num;
        if (num <10 || num > 20)
        {
            let residue = num % 10;
            if (residue == 1)
                end_flag = 1;
            else if (residue > 1 && residue <5)
                end_flag = 2;
            else
                end_flag = 3;
        }
        if (num % 100 >=10 && num % 100 <=20)
        {
            end_flag = 3;
        }
        switch (end_flag)
        {
            case 1:
                return output + " ворона";
                break;
            case 2:
                return output + " вороны";
            case 3:
                return output + " ворон";
                break;
            default:
                return "Не трогай моих ворон";
                break;
        }
    }
    else
    {    
        return "Удачи посчитать столько ворон в жизни";
    }
}

alert(Raven());
