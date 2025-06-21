import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';
import { Product } from '../../types';
import productsData from '../../mocks/productsData.json';

interface ProductsState {
	allProducts: {
		dogs: Product[];
		cats: Product[];
		birds: Product[];
	};
	filteredProducts: Product[];
	filter: 'all' | 'comidas' | 'brinquedos' | 'acessorios';
}

const initialState: ProductsState = {
	allProducts: {
		dogs: [...productsData.dogs.comida, ...productsData.dogs.accesorios],
		cats: [...productsData.gatos.comida, ...productsData.gatos.accesorios],
		birds: [...productsData.birds.food, ...productsData.birds.accesorios],
	},
	filteredProducts: [],
	filter: 'all',
};

export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		setFilter: (
			state,
			action: PayloadAction<'all' | 'comidas' | 'brinquedos' | 'acessorios'>
		) => {
			state.filter = action.payload;
			// Update filtered products based on the filter
			if (action.payload === 'all') {
				state.filteredProducts = [
					...state.allProducts.dogs,
					...state.allProducts.cats,
					...state.allProducts.birds,
				];
			} else {
				const filterKey =
					action.payload === 'comidas' ? 'comida' : 'accesorios';
				state.filteredProducts = [
					...productsData.dogs[filterKey],
					...productsData.gatos[filterKey],
					...productsData.birds[filterKey === 'comida' ? 'food' : filterKey],
				];
			}
		},
	},
});

export const { setFilter } = productsSlice.actions;

export const selectAllProducts = (state: RootState) =>
	state.products.allProducts;
export const selectFilteredProducts = (state: RootState) =>
	state.products.filteredProducts;
export const selectCurrentFilter = (state: RootState) => state.products.filter;

export default productsSlice.reducer;
