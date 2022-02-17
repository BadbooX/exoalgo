/* EXO 1 */
var a = 5;
console.log('EXO1 La variable est ' + a);

/* EXO 2 */
var a = 10;
var b = 12;
console.log('EXO2: a + b = ' + (a + b));
console.log('a - b = ' + (a - b));
console.log('a x b = ' + (a * b));
/* EXO 3 */
var z = "EXO03: Bonjour, ceci est une variable";
console.log(z);
/* EXO 4 */
var a = "EXO04: Coucou ";
var b = "Petite perruche";
console.log(a + b);
/* EXO 5 */
var a = 30;
var b = 20;
console.log("EXO5: a = 30");
console.log("b = 20")
var c = a;
var a = b;
var b = c;
console.log("A = " + a + '  B = ' + b);
/* EXO 6 */
var a = 30;
var b = 20;
if(a > b) {
    console.log('EXO 6 : A est plus grand que B');
}
else if (b > a) {
    console.log('EXO 6 : B est plus grand que A');
}
else {
    console.log("EXO 6 : Les nombre sont égaux.")
}
/* EXO 7 */
var a = 30;
var b = 20;
function maVariable(x, y) {
    if (x > y) {
        console.log("EXO07 : " + x + " Est plus grand que " + y);
    }
    else if (y > x) {
        console.log("EXO07 : " + y + " Est plus grand que " + x);
    }
    else {
        console.log("EXO07 : Les nombres sont égaux");
    }
    
}
maVariable(a, b);
/* EXO 8 */
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
console.log(getRandomInt(10));

/* EXO 9 */
console.log('EXO 9');

for( i = 0; i < 10; i++;) {
    console.log(getRandomInt(100));
}
/* EXO 10 */
var a = 0;
console.log('EXO 10')
while (a < 90) {
    a = getRandomInt(100)
    console.log(a)
}