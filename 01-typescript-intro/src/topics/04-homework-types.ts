/*
    ===== Código de TypeScript =====
*/

interface SuperHero{
    name: string;
    age: number;
    address: Address; // it is recommended to use interfaces instead of objects
    showAddress: () => string;
} // SuperHero is an object with a showAddress method that returns a string. address is an object with calle, pais and ciudad properties 

interface Address{
    street: string;
    country: string;
    city: string;
}

const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        street: 'Main St',
        country: 'USA',
        city: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.city + ', ' + this.address.country;
    }
}


const address = superHeroe.showAddress();
console.log( address );




export {};