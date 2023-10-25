

export function whatsMyType<T>(argument:T):T{
    return argument;
}// 

const amIString = whatsMyType<string>('Hello');
const amINumber = whatsMyType<number>(100);
const amIArray = whatsMyType<number[]>([1,2,3,4,5]);

console.log(amIArray.join(' '))
console.log(amIString.charAt(0));
console.log(amINumber.toFixed(2));  