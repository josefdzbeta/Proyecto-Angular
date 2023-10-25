export class Person {
    // public name?: string;
    // private address?: string;

    constructor(
        
        public firstName: string,
        public lastName: string, 
        private address: string = 'No Address'
    ){}
}

// export class Hero extends Person{
//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string

//     ){
//         super(realName, 'New York')
//     }

// } //class hero: extends Person and super that is the constructor of the class Person and the constructor of the class Hero is the constructor of the class Person plus the new properties of the class Hero (alterEgo, age, realName)
export class Hero{


    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person // this is a composition

    ){
        // this.person = new Person(realName);
    }

} 

const tony = new Person('Tony','Stark','New York');
const ironman = new Hero('ironman', 45, 'Tony Stark', tony); // this is a composition 

console.log(ironman)