'use strict';
let book1 = new Object();
book1.title = "ABC";
book1.pubYear = 2020;
book1.price = 893;
let book2 = {
    title:  "f", 
    pubYear: 2000,
    price: 10,
};

console.log(book1);
console.log(book2);

for (let key in book1)
    {
        console.log(key, ":", book1[key]);
    }
for (let key in book2)
    {
        console.log(key, ":", book2[key]);
    }