import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

interface CartItem {
	id: string;
	descripcion: string;
	precio: number;
	quantity: number;
	foto: string;
}

interface CartState {
	items: CartItem[];
	totalQuantity: number;
	totalPrice: number;
}

const initialState: CartState = {
	items: [],
	totalQuantity: 0,
	totalPrice: 0,
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem: (state, action: PayloadAction<CartItem>) => {
			const newItem = action.payload;
			const existingItem = state.items.find((item) => item.id === newItem.id);
			if (existingItem) {
				existingItem.quantity += 1;
			} else {
				state.items.push({ ...newItem, quantity: 1 });
			}
			state.totalQuantity = state.items.reduce(
				(acc, item) => acc + item.quantity,
				0
			);
			state.totalPrice = state.items.reduce(
				(acc, item) => acc + item.precio * item.quantity,
				0
			);
		},
		removeItem: (state, action: PayloadAction<string>) => {
			state.items = state.items.filter((item) => item.id !== action.payload);
			state.totalQuantity = state.items.reduce(
				(acc, item) => acc + item.quantity,
				0
			);
			state.totalPrice = state.items.reduce(
				(acc, item) => acc + item.precio * item.quantity,
				0
			);
		},
		clearCart: (state) => {
			state.items = [];
			state.totalQuantity = 0;
			state.totalPrice = 0;
		},
	},
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export const selectCartItems = (state: RootState) => state.cart.items;
export const selectTotalQuantity = (state: RootState) =>
	state.cart.totalQuantity;
export const selectTotalPrice = (state: RootState) => state.cart.totalPrice;

export default cartSlice.reducer;
