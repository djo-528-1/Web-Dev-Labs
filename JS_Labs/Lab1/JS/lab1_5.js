let num;
let cat = 2, dog = 3, difference; 
num = prompt ("Введите число строк");

for (let i=0; i <num; i++)
{
    if (dog > 0 && cat == 2)
    {
        difference = 6 - (dog + cat);
        console.log("dog\t".repeat(dog) + "cat\t".repeat(cat) + "dog\t".repeat(difference));
        dog--;
    }
    else
    {
        dog = 3;
        difference = 6 - (dog + cat);
        console.log("cat\t".repeat(cat) + "dog\t".repeat(dog) + "cat\t".repeat(difference));
        cat--;
        if (cat == 0)
            cat = 2;
    }
}