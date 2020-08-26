import { Product } from 'src/products/Models/product';

export interface AppState {
    readonly product: Product[];
}
