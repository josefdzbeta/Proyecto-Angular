export interface Product{
    description: string;
    price: number;

}

const phone: Product = {
    description: 'Nokia phone',
    price: 150
}

const tablet: Product = {
    description: 'Samsung tablet',
    price: 250
}

interface TaxCalculationOptions{
    tax: number;
    products: Product[];
}

export function taxCalculation(options:TaxCalculationOptions):number[] {
    
    const {tax, products} = options // tax and products come from options.tax and options.products respectively

    let total = 0;

    products.forEach(({price}) => {
        total += price;
    });
    return [total, total * tax];
}

const shoppingCart = [phone, tablet]; // shoppingCart is an array of type Product
const tax = 0.15;

// const result = taxCalculation({
//     products: shoppingCart, // products is an array of type Product
//     tax
// })// taxCalculation is a function that receives an object of type TaxCalculationOptions and returns an array of numbers

const [total, taxResult] = taxCalculation({
    products: shoppingCart,
    tax: tax
})


console.log('Total:', total);
console.log('tax', taxResult);
// console.log('Total:', result[0]);
// console.log('tax:', result[1]);



export{}