import { Product, taxCalculation} from './06-function-destructuring';

const shoppingCart: Product[] = [

    {
        description: 'Nokia phone',
        price: 150
    },
    {
        description: 'Samsung tablet',
        price: 250
    }
];

const [total, tax] = taxCalculation({
    products: shoppingCart,
    tax: 0.15
});


