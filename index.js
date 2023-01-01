const myNum = 12345;
function reverseNum (num){
    if (typeof num === 'number') {
        const str = num.toString();
        return str.split('').reverse().join('');
    } else{
        console.log ('Argument is NaN');
        return 0;
    }

}

console.log(reverseNum(myNum));