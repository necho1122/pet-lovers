import { useDispatch, useSelector } from 'react-redux';
import {
	removeItem,
	selectCartItems,
	selectTotalQuantity,
	selectTotalPrice,
} from '../store/cartSlice';
import { BinIcon } from './Icons';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
	const dispatch = useDispatch();
	const cartItems = useSelector(selectCartItems);
	const totalQuantity = useSelector(selectTotalQuantity);
	const totalPrice = useSelector(selectTotalPrice);
	const navigate = useNavigate();

	const handleSubmit = () => {
		navigate('/payment');
	};

	return (
		<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
			<h2 className='text-2xl sm:text-3xl font-bold text-center text-primary mb-6'>
				🛒 Meu Carrinho
			</h2>

			{cartItems.length === 0 ? (
				<p className='text-center text-gray-500'>Seu carrinho está vazio.</p>
			) : (
				<div className='flex flex-col gap-6'>
					<ul className='flex flex-col gap-4'>
						{cartItems.map((item) => (
							<li
								key={item.id}
								className='flex flex-col sm:flex-row justify-between items-center border rounded-xl p-4 shadow-sm bg-white'
							>
								<div className='flex items-center gap-4 w-full sm:w-auto'>
									<img
										src={item.foto}
										alt='Produto'
										className='w-20 h-20 object-cover rounded-lg'
									/>
									<div className='flex flex-col'>
										<p className='text-base font-medium text-text line-clamp-2'>
											{item.descripcion}
										</p>
										<p className='text-primary font-bold text-lg mt-1'>
											R$ {item.precio.toFixed(2)}
										</p>
									</div>
								</div>

								<div className='flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto mt-4 sm:mt-0'>
									<div className='flex items-center gap-3'>
										<button className='text-xl font-bold px-3 py-1 border rounded-md text-gray-700 hover:bg-gray-100'>
											-
										</button>
										<span className='text-base font-medium'>
											{item.quantity}
										</span>
										<button className='text-xl font-bold px-3 py-1 border rounded-md text-gray-700 hover:bg-gray-100'>
											+
										</button>
									</div>
									<button
										onClick={() => dispatch(removeItem(item.id))}
										className='text-red-500 hover:text-red-700 transition'
									>
										<BinIcon />
									</button>
								</div>
							</li>
						))}
					</ul>

					{/* Botón de compra */}
					<div className='text-center'>
						<button
							onClick={handleSubmit}
							className='bg-success hover:bg-amber-400 transition text-white font-semibold text-lg px-6 py-3 rounded-full shadow-lg'
						>
							Finalizar Compra – R$ {totalPrice.toFixed(2)}{' '}
							<span className='text-sm font-normal'>
								({totalQuantity} item{totalQuantity > 1 ? 's' : ''})
							</span>
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Cart;
