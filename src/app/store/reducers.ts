import { Product } from 'src/products/Models/product';
import { ADD_PRODUCT, DELETE_PRODUCT, Actions } from './actions';

const initialState: Product[] = [
    {
        id: '1',
        name: 'Product',
        image: 'https://img.xfinitymobile.com/image/upload/v1594064755/client/catalog/devices/samsung/Galaxy_Note20_Ultra_5G_MysticBronze_PRI.png',
        description: 'This Mobile Device is Great',
        brand: 'Samsung',
        price: '1299.99'
    },
    {
        id: '2',
        name: 'Product',
        image: 'https://img.xfinitymobile.com/image/upload/v1594146935/client/catalog/devices/samsung/Galaxy_Note20_5G_MysticGreen_PRI.png',
        description: 'This Mobile Device is Great',
        brand: 'Samsung',
        price: '999.99'
    },
    {
        id: '3',
        name: 'Product',
        image: 'https://img.xfinitymobile.com/image/upload/v1568158710/client/catalog/devices/apple/iPhone_11_Purple_PRI.png',
        description: 'This Mobile Device is Great',
        brand: 'Apple',
        price: '699.99'
    },
    {
        id: '4',
        name: 'Product',
        image: 'https://img.xfinitymobile.com/image/upload/v1586966457/client/catalog/devices/apple/iPhone_SE_white_PRI.png',
        description: 'This Mobile Device is Great',
        brand: 'Apple',
        price: '399.99'
    },
    {
        id: '5',
        name: 'Product',
        image: 'https://img.xfinitymobile.com/image/upload/v1594064755/client/catalog/devices/samsung/Galaxy_Note20_Ultra_5G_MysticBronze_PRI.png',
        description: 'This Mobile Device is Great',
        brand: 'Samsung',
        price: '1299.99'
    },
    {
        id: '6',
        name: 'Product',
        image: 'https://img.xfinitymobile.com/image/upload/v1594146935/client/catalog/devices/samsung/Galaxy_Note20_5G_MysticGreen_PRI.png',
        description: 'This Mobile Device is Great',
        brand: 'Samsung',
        price: '999.99'
    },
    {
        id: '7',
        name: 'Product',
        image: 'https://img.xfinitymobile.com/image/upload/v1568158710/client/catalog/devices/apple/iPhone_11_Purple_PRI.png',
        description: 'This Mobile Device is Great',
        brand: 'Apple',
        price: '699.99'
    },
    {
        id: '8',
        name: 'Product',
        image: 'https://img.xfinitymobile.com/image/upload/v1586966457/client/catalog/devices/apple/iPhone_SE_white_PRI.png',
        description: 'This Mobile Device is Great',
        brand: 'Apple',
        price: '399.99'
    },
    {
        id: '9',
        name: 'Product',
        image: 'https://img.xfinitymobile.com/image/upload/v1594064755/client/catalog/devices/samsung/Galaxy_Note20_Ultra_5G_MysticBronze_PRI.png',
        description: 'This Mobile Device is Great',
        brand: 'Samsung',
        price: '1299.99'
    },
    {
        id: '10',
        name: 'Product',
        image: 'https://img.xfinitymobile.com/image/upload/v1594146935/client/catalog/devices/samsung/Galaxy_Note20_5G_MysticGreen_PRI.png',
        description: 'This Mobile Device is Great',
        brand: 'Samsung',
        price: '999.99'
    },
    {
        id: '11',
        name: 'Product',
        image: 'https://img.xfinitymobile.com/image/upload/v1568158710/client/catalog/devices/apple/iPhone_11_Purple_PRI.png',
        description: 'This Mobile Device is Great',
        brand: 'Apple',
        price: '699.99'
    },
    {
        id: '12',
        name: 'Product',
        image: 'https://img.xfinitymobile.com/image/upload/v1586966457/client/catalog/devices/apple/iPhone_SE_white_PRI.png',
        description: 'This Mobile Device is Great',
        brand: 'Apple',
        price: '399.99'
    }, {
        id: '13',
        name: 'Product',
        image: 'https://img.xfinitymobile.com/image/upload/v1594064755/client/catalog/devices/samsung/Galaxy_Note20_Ultra_5G_MysticBronze_PRI.png',
        description: 'This Mobile Device is Great',
        brand: 'Samsung',
        price: '1299.99'
    },
    {
        id: '14',
        name: 'Product',
        image: 'https://img.xfinitymobile.com/image/upload/v1594146935/client/catalog/devices/samsung/Galaxy_Note20_5G_MysticGreen_PRI.png',
        description: 'This Mobile Device is Great',
        brand: 'Samsung',
        price: '999.99'
    },
    {
        id: '15',
        name: 'Product',
        image: 'https://img.xfinitymobile.com/image/upload/v1568158710/client/catalog/devices/apple/iPhone_11_Purple_PRI.png',
        description: 'This Mobile Device is Great',
        brand: 'Apple',
        price: '699.99'
    },
    {
        id: '16',
        name: 'Product',
        image: 'https://img.xfinitymobile.com/image/upload/v1586966457/client/catalog/devices/apple/iPhone_SE_white_PRI.png',
        description: 'This Mobile Device is Great',
        brand: 'Apple',
        price: '399.99'
    },
    {
        id: '17',
        name: 'Product',
        image: 'https://img.xfinitymobile.com/image/upload/v1594064755/client/catalog/devices/samsung/Galaxy_Note20_Ultra_5G_MysticBronze_PRI.png',
        description: 'This Mobile Device is Great',
        brand: 'Samsung',
        price: '1299.99'
    },
    {
        id: '18',
        name: 'Product',
        image: 'https://img.xfinitymobile.com/image/upload/v1594146935/client/catalog/devices/samsung/Galaxy_Note20_5G_MysticGreen_PRI.png',
        description: 'This Mobile Device is Great',
        brand: 'Samsung',
        price: '999.99'
    },
    {
        id: '19',
        name: 'Product',
        image: 'https://img.xfinitymobile.com/image/upload/v1568158710/client/catalog/devices/apple/iPhone_11_Purple_PRI.png',
        description: 'This Mobile Device is Great',
        brand: 'Apple',
        price: '699.99'
    },
    {
        id: '20',
        name: 'Product',
        image: 'https://img.xfinitymobile.com/image/upload/v1586966457/client/catalog/devices/apple/iPhone_SE_white_PRI.png',
        description: 'This Mobile Device is Great',
        brand: 'Apple',
        price: '399.99'
    },
    {
        id: '21',
        name: 'Product',
        image: 'https://img.xfinitymobile.com/image/upload/v1594064755/client/catalog/devices/samsung/Galaxy_Note20_Ultra_5G_MysticBronze_PRI.png',
        description: 'This Mobile Device is Great',
        brand: 'Samsung',
        price: '1299.99'
    },
    {
        id: '22',
        name: 'Product',
        image: 'https://img.xfinitymobile.com/image/upload/v1594146935/client/catalog/devices/samsung/Galaxy_Note20_5G_MysticGreen_PRI.png',
        description: 'This Mobile Device is Great',
        brand: 'Samsung',
        price: '999.99'
    },
    {
        id: '23',
        name: 'Product',
        image: 'https://img.xfinitymobile.com/image/upload/v1568158710/client/catalog/devices/apple/iPhone_11_Purple_PRI.png',
        description: 'This Mobile Device is Great',
        brand: 'Apple',
        price: '699.99'
    },
    {
        id: '24',
        name: 'Product',
        image: 'https://img.xfinitymobile.com/image/upload/v1586966457/client/catalog/devices/apple/iPhone_SE_white_PRI.png',
        description: 'This Mobile Device is Great',
        brand: 'Apple',
        price: '399.99'
    },
    {
        id: '25',
        name: 'Product',
        image: 'https://img.xfinitymobile.com/image/upload/v1594064755/client/catalog/devices/samsung/Galaxy_Note20_Ultra_5G_MysticBronze_PRI.png',
        description: 'This Mobile Device is Great',
        brand: 'Samsung',
        price: '1299.99'
    },
    {
        id: '26',
        name: 'Product',
        image: 'https://img.xfinitymobile.com/image/upload/v1594146935/client/catalog/devices/samsung/Galaxy_Note20_5G_MysticGreen_PRI.png',
        description: 'This Mobile Device is Great',
        brand: 'Samsung',
        price: '999.99'
    },
    {
        id: '27',
        name: 'Product',
        image: 'https://img.xfinitymobile.com/image/upload/v1568158710/client/catalog/devices/apple/iPhone_11_Purple_PRI.png',
        description: 'This Mobile Device is Great',
        brand: 'Apple',
        price: '699.99'
    },
    {
        id: '28',
        name: 'Product',
        image: 'https://img.xfinitymobile.com/image/upload/v1586966457/client/catalog/devices/apple/iPhone_SE_white_PRI.png',
        description: 'This Mobile Device is Great',
        brand: 'Apple',
        price: '399.99'
    }, {
        id: '29',
        name: 'Product',
        image: 'https://img.xfinitymobile.com/image/upload/v1594064755/client/catalog/devices/samsung/Galaxy_Note20_Ultra_5G_MysticBronze_PRI.png',
        description: 'This Mobile Device is Great',
        brand: 'Samsung',
        price: '1299.99'
    },
    {
        id: '30',
        name: 'Product',
        image: 'https://img.xfinitymobile.com/image/upload/v1594146935/client/catalog/devices/samsung/Galaxy_Note20_5G_MysticGreen_PRI.png',
        description: 'This Mobile Device is Great',
        brand: 'Samsung',
        price: '999.99'
    },
    {
        id: '31',
        name: 'Product',
        image: 'https://img.xfinitymobile.com/image/upload/v1568158710/client/catalog/devices/apple/iPhone_11_Purple_PRI.png',
        description: 'This Mobile Device is Great',
        brand: 'Apple',
        price: '699.99'
    },
    {
        id: '32',
        name: 'Product',
        image: 'https://img.xfinitymobile.com/image/upload/v1586966457/client/catalog/devices/apple/iPhone_SE_white_PRI.png',
        description: 'This Mobile Device is Great',
        brand: 'Apple',
        price: '399.99'
    },
    {
        id: '33',
        name: 'Product',
        image: 'https://img.xfinitymobile.com/image/upload/v1594064755/client/catalog/devices/samsung/Galaxy_Note20_Ultra_5G_MysticBronze_PRI.png',
        description: 'This Mobile Device is Great',
        brand: 'Samsung',
        price: '1299.99'
    },
    {
        id: '34',
        name: 'Product',
        image: 'https://img.xfinitymobile.com/image/upload/v1594146935/client/catalog/devices/samsung/Galaxy_Note20_5G_MysticGreen_PRI.png',
        description: 'This Mobile Device is Great',
        brand: 'Samsung',
        price: '999.99'
    },
    {
        id: '35',
        name: 'Product',
        image: 'https://img.xfinitymobile.com/image/upload/v1568158710/client/catalog/devices/apple/iPhone_11_Purple_PRI.png',
        description: 'This Mobile Device is Great',
        brand: 'Apple',
        price: '699.99'
    },
    {
        id: '36',
        name: 'Product',
        image: 'https://img.xfinitymobile.com/image/upload/v1586966457/client/catalog/devices/apple/iPhone_SE_white_PRI.png',
        description: 'This Mobile Device is Great',
        brand: 'Apple',
        price: '399.99'
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
