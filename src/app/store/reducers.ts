import { Product } from 'src/products/Models/product';
import { ADD_PRODUCT, DELETE_PRODUCT, Actions } from './actions';

const initialState: Product[] = [
    {
        id: '1',
        name: 'Coombes',
        image: 'image1',
        category: 'LOUNGE',
        price: '2600',
        rating: 3,
        // tslint:disable-next-line: max-line-length
        description: 'Vass Shoes makes handcrafted mens shoes in the heart of Budapest.I made a concept product page for practice which in my opinion represents their qualities better than their current state.',
        colors: ['darkgreen', 'darkred', 'black']
    },
    {
        id: '2',
        name: 'Keeve Set',
        image: 'image2',
        category: 'TABLES & CHAIRS',
        price: '590',
        rating: 2,
        // tslint:disable-next-line: max-line-length
        description: 'Vass Shoes makes handcrafted mens shoes in the heart of Budapest.I made a concept product page for practice which in my opinion represents their qualities better than their current state.',
        colors: ['darkgreen', 'darkred', 'black']
    },
    {
        id: '3',
        name: 'Nille',
        image: 'image3',
        category: 'ARMCHAIR',
        price: '950',
        rating: 5,
        // tslint:disable-next-line: max-line-length
        description: 'Vass Shoes makes handcrafted mens shoes in the heart of Budapest.I made a concept product page for practice which in my opinion represents their qualities better than their current state.',
        colors: ['darkgreen', 'darkred', 'black']
    },
    {
        id: '4',
        name: 'Momo',
        image: 'image4',
        category: 'SHELVES',
        price: '890',
        rating: 1,
        // tslint:disable-next-line: max-line-length
        description: 'Vass Shoes makes handcrafted mens shoes in the heart of Budapest.I made a concept product page for practice which in my opinion represents their qualities better than their current state.',
        colors: ['darkgreen', 'darkred', 'black']
    },
    {
        id: '5',
        name: 'Keeve Set',
        image: 'image3',
        category: 'TABLES & CHAIRS',
        price: '590',
        rating: 4,
        // tslint:disable-next-line: max-line-length
        description: 'Vass Shoes makes handcrafted mens shoes in the heart of Budapest.I made a concept product page for practice which in my opinion represents their qualities better than their current state.',
        colors: ['darkgreen', 'darkred', 'black']
    },
    {
        id: '6',
        name: 'Penemille',
        image: 'image2',
        category: 'CHAIR',
        price: '120',
        rating: 2,
        // tslint:disable-next-line: max-line-length
        description: 'Vass Shoes makes handcrafted mens shoes in the heart of Budapest.I made a concept product page for practice which in my opinion represents their qualities better than their current state.',
        colors: ['darkgreen', 'darkred', 'black']
    },
    {
        id: '7',
        name: 'Kappu',
        image: 'image4',
        category: 'SHELVES',
        price: '420',
        rating: 5,
        colors: ['darkgreen', 'darkred', 'black'],
        // tslint:disable-next-line: max-line-length
        description: 'Vass Shoes makes handcrafted mens shoes in the heart of Budapest.I made a concept product page for practice which in my opinion represents their qualities better than their current state.'
    },
    {
        id: '8',
        name: 'Keeve Set',
        image: 'image3',
        category: 'TABLES & CHAIRS',
        price: '590',
        rating: 1,
        colors: ['darkgreen', 'darkred', 'black'],
        // tslint:disable-next-line: max-line-length
        description: 'Vass Shoes makes handcrafted mens shoes in the heart of Budapest.I made a concept product page for practice which in my opinion represents their qualities better than their current state.'
    },
    {
        id: '9',
        name: 'Coombes',
        image: 'image1',
        category: 'LOUNGE',
        price: '2600',
        colors: ['darkgreen', 'darkred', 'black'],
        rating: 5,
        // tslint:disable-next-line: max-line-length
        description: 'Vass Shoes makes handcrafted mens shoes in the heart of Budapest.I made a concept product page for practice which in my opinion represents their qualities better than their current state.'
    },
    {
        id: '10',
        name: 'Keeve Set',
        image: 'image2',
        category: 'TABLES & CHAIRS',
        price: '590',
        rating: 2,
        colors: ['darkgreen', 'darkred', 'black'],
        // tslint:disable-next-line: max-line-length
        description: 'Vass Shoes makes handcrafted mens shoes in the heart of Budapest.I made a concept product page for practice which in my opinion represents their qualities better than their current state.'
    },
    {
        id: '11',
        name: 'Nille',
        image: 'image3',
        category: 'ARMCHAIR',
        price: '950',
        rating: 4,
        colors: ['darkgreen', 'darkred', 'black'],
        // tslint:disable-next-line: max-line-length
        description: 'Vass Shoes makes handcrafted mens shoes in the heart of Budapest.I made a concept product page for practice which in my opinion represents their qualities better than their current state.'
    },
    {
        id: '12',
        name: 'Momo',
        image: 'image4',
        category: 'SHELVES',
        price: '890',
        rating: 1,
        colors: ['darkgreen', 'darkred', 'black'],
        // tslint:disable-next-line: max-line-length
        description: 'Vass Shoes makes handcrafted mens shoes in the heart of Budapest.I made a concept product page for practice which in my opinion represents their qualities better than their current state.'
    },
    {
        id: '13',
        name: 'Keeve Set',
        image: 'image3',
        category: 'TABLES & CHAIRS',
        price: '590',
        rating: 5,
        colors: ['darkgreen', 'darkred', 'black'],
        // tslint:disable-next-line: max-line-length
        description: 'Vass Shoes makes handcrafted mens shoes in the heart of Budapest.I made a concept product page for practice which in my opinion represents their qualities better than their current state.'
    },
    {
        id: '14',
        name: 'Penemille',
        image: 'image2',
        category: 'CHAIR',
        price: '120',
        rating: 4,
        colors: ['darkgreen', 'darkred', 'black'],
        // tslint:disable-next-line: max-line-length
        description: 'Vass Shoes makes handcrafted mens shoes in the heart of Budapest.I made a concept product page for practice which in my opinion represents their qualities better than their current state.'
    },
    {
        id: '15',
        name: 'Kappu',
        image: 'image4',
        category: 'SHELVES',
        price: '420',
        rating: 2,
        colors: ['darkgreen', 'darkred', 'black'],
        // tslint:disable-next-line: max-line-length
        description: 'Vass Shoes makes handcrafted mens shoes in the heart of Budapest.I made a concept product page for practice which in my opinion represents their qualities better than their current state.'
    },
    {
        id: '16',
        name: 'Keeve Set',
        image: 'image3',
        category: 'TABLES & CHAIRS',
        price: '590',
        rating: 4,
        colors: ['darkgreen', 'darkred', 'black'],
        // tslint:disable-next-line: max-line-length
        description: 'Vass Shoes makes handcrafted mens shoes in the heart of Budapest.I made a concept product page for practice which in my opinion represents their qualities better than their current state.'
    },
    {
        id: '17',
        name: 'Coombes',
        image: 'image1',
        category: 'LOUNGE',
        price: '2600',
        rating: 1,
        colors: ['darkgreen', 'darkred', 'black'],
        // tslint:disable-next-line: max-line-length
        description: 'Vass Shoes makes handcrafted mens shoes in the heart of Budapest.I made a concept product page for practice which in my opinion represents their qualities better than their current state.'
    },
    {
        id: '18',
        name: 'Keeve Set',
        image: 'image2',
        category: 'TABLES & CHAIRS',
        price: '590',
        rating: 2,
        colors: ['darkgreen', 'darkred', 'black'],
        // tslint:disable-next-line: max-line-length
        description: 'Vass Shoes makes handcrafted mens shoes in the heart of Budapest.I made a concept product page for practice which in my opinion represents their qualities better than their current state.'
    },
    {
        id: '19',
        name: 'Nille',
        image: 'image3',
        category: 'ARMCHAIR',
        price: '950',
        rating: 3,
        colors: ['darkgreen', 'darkred', 'black'],
        // tslint:disable-next-line: max-line-length
        description: 'Vass Shoes makes handcrafted mens shoes in the heart of Budapest.I made a concept product page for practice which in my opinion represents their qualities better than their current state.'
    },
    {
        id: '20',
        name: 'Momo',
        image: 'image4',
        category: 'SHELVES',
        price: '890',
        rating: 2,
        colors: ['darkgreen', 'darkred', 'black'],
        // tslint:disable-next-line: max-line-length
        description: 'Vass Shoes makes handcrafted mens shoes in the heart of Budapest.I made a concept product page for practice which in my opinion represents their qualities better than their current state.'
    },
    {
        id: '21',
        name: 'Keeve Set',
        image: 'image3',
        category: 'TABLES & CHAIRS',
        price: '590',
        rating: 5,
        colors: ['darkgreen', 'darkred', 'black'],
        // tslint:disable-next-line: max-line-length
        description: 'Vass Shoes makes handcrafted mens shoes in the heart of Budapest.I made a concept product page for practice which in my opinion represents their qualities better than their current state.'
    },
    {
        id: '22',
        name: 'Penemille',
        image: 'image2',
        category: 'CHAIR',
        price: '120',
        rating: 4,
        colors: ['darkgreen', 'darkred', 'black'],
        // tslint:disable-next-line: max-line-length
        description: 'Vass Shoes makes handcrafted mens shoes in the heart of Budapest.I made a concept product page for practice which in my opinion represents their qualities better than their current state.'
    },
    {
        id: '23',
        name: 'Kappu',
        image: 'image4',
        category: 'SHELVES',
        price: '420',
        rating: 1,
        colors: ['darkgreen', 'darkred', 'black'],
        // tslint:disable-next-line: max-line-length
        description: 'Vass Shoes makes handcrafted mens shoes in the heart of Budapest.I made a concept product page for practice which in my opinion represents their qualities better than their current state.'
    },
    {
        id: '24',
        name: 'Keeve Set',
        image: 'image3',
        category: 'TABLES & CHAIRS',
        price: '590',
        rating: 3,
        colors: ['darkgreen', 'darkred', 'black'],
        // tslint:disable-next-line: max-line-length
        description: 'Vass Shoes makes handcrafted mens shoes in the heart of Budapest.I made a concept product page for practice which in my opinion represents their qualities better than their current state.'
    }
];

export function reducer(
    state: Product[] = initialState, action: Actions) {

    switch (action.type) {
        case ADD_PRODUCT:
            return [...state, action.payload];

        case DELETE_PRODUCT:
            return state.filter(({ id }) => id !== action.id);

        default:
            return state;
    }
}
