function addNumbers(a:number,b:number):number {
    return a+b;
}

const addNumbersArrow = (a:number,b:number):string => {
    return `${a+b}`;
}

function multiply(firstNumber:number, secondNumber?:number, base:number = 2){
    return firstNumber * base
} // secondNumber is optional, base has a default value

// const result = addNumbers(1,2); //typescsript infers the type of the result variable
// const result: number = addNumbers(1,2); //typescsript infers the type of the result variable

// const result2: string = addNumbersArrow(1,2)
// const multiplyResult: number = multiply(5)

// console.log({result, result2, multiplyResult})

interface Character{
    name: string;
    hp: number;
    showHp: () => void; // return type is void
}

const healCharacter = (character:Character, amount: number ) => {
    // character.pv += amount; // pv is not defined in the Character interface
    character.hp += amount;
} 

const strider: Character = {
    name: 'Strider',
    hp: 100,
    showHp(){
        console.log(`Puntos de vida ${this.hp}`)
    }
} // strider is a Character object with a showHp method that returns void (nothing)

healCharacter(strider, 20);
healCharacter(strider, 120);

strider.showHp();


export{}