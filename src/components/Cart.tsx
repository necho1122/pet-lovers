// Cart.tsx

import { useDispatch, useSelector } from 'react-redux';
import {
	removeItem,
	selectCartItems,
	selectTotalQuantity,
	selectTotalPrice,
} from '../store/cartSlice';
import { BinIcon } from './Icons';
import Footer from './Footer';
import './Cart.css';

const Cart = () => {
	const dispatch = useDispatch();
	const cartItems = useSelector(selectCartItems);
	const totalQuantity = useSelector(selectTotalQuantity);
	const totalPrice = useSelector(selectTotalPrice);

	return (
		<>
			<div className='shopping-cart-container'>
				<div className="go-to-home">
					<a href="/"><img src="https://cdn-icons-png.flaticon.com/512/2550/2550430.png" alt="home icon" /> Home</a>
				</div>
				<h2>Shopping Cart</h2>
				<ul>
					{cartItems.map((item) => (
						<li key={item.id}>
							<div className='item-in-cart'>
								<img
									src={item.foto}
									alt='product photo'
								/>
								<div className='product-description'>
									<p className='truncate'>{item.descripcion}</p>
									<div className='qty-price'>
										<p className='price-note'>R${item.precio}</p>
										<div className='qty-section'>
											<button>-</button>
											<p className='item-quantity'>{item.quantity}</p>
											<button>+</button>
										</div>
									</div>
								</div>
								<button onClick={() => dispatch(removeItem(item.id))}>
									<BinIcon />
								</button>
							</div>
						</li>
					))}
				</ul>
				<div className='cart-buttons-container'>
					<div className='clear-buy-btn'>
						<button className='buy-btn'>
							Comprar R$<span>{totalPrice.toFixed(2)}</span>{' '}
							<span>({totalQuantity} item)</span>
						</button>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Cart;
