// Cart.tsx

import { useDispatch, useSelector } from 'react-redux';
import { removeItem, clearCart, selectCart } from '../store/cartSlice';
import { useEffect } from 'react';
import { BinIcon } from './Icons';
import './Cart.css';

const Cart = () => {
	const dispatch = useDispatch();
	const cartItems = useSelector(selectCart);

	useEffect(() => {
		const truncateText = (element: HTMLElement | null, maxLength: number) => {
			if (element) {
				const text = element.innerText;
				if (text.length > maxLength) {
					element.innerText = text.slice(0, maxLength) + '...';
				}
			}
		};

		const paragraph = document.querySelector('.text') as HTMLElement; // Cast the result of document.querySelector to HTMLElement
		truncateText(paragraph, 25);
	}, [cartItems]);

	return (
		<div className='shopping-cart-container'>
			<h2>Shopping Cart</h2>
			<ul>
				{cartItems.map((item) => (
					<li key={item.id}>
						<img
							src={item.foto}
							alt='product photo'
						/>
						<p className='truncate'>{item.descripcion}</p>
						<p>${item.precio}</p> <p>Qt: {item.quantity}</p>
						<button onClick={() => dispatch(removeItem(item.id))}>
							<BinIcon />
						</button>
					</li>
				))}
			</ul>
			<button onClick={() => dispatch(clearCart())}>Clear Cart</button>
		</div>
	);
};

export default Cart;
