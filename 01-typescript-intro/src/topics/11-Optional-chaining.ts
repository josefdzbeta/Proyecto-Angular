export interface Passenger{
    name: string;
    children?: string[];
}
const passenger1: Passenger = {
    name: 'Jose',
}
const passenger2: Passenger = {
    name: 'Pedro',
    children: ['Ana', 'Gabriel']
}


const printChildren = (passenger: Passenger) => {

    const howManyCHildren = passenger.children?.length || 0; // Optional chaining operator: ?. and || 0 to avoid undefined

    console.log(passenger.name, howManyCHildren)
    
} 

printChildren(passenger1)