function classDecorator<T extends {new (...args:any[]): {}}> (
    constructor: T
){

    return class extends constructor{
        newProperty = 'new property';   
        hello = 'override'; 
    }
} // classDecorator is a function that receives a constructor and returns a class that extends the constructor received as a parameter and adds new properties to it. 
// @classDecorator()

export class SuperClass{
    public myProperty: string = 'ABC';

    print(){
        console.log('hola');
    }
}

const myClass = new SuperClass();
console.log(myClass)