import { useSelector } from 'react-redux';
import {
	selectCartItems,
	selectTotalQuantity,
	selectTotalPrice,
} from '../store/cartSlice';

const PaymentForm: React.FC = () => {
	const cartItems = useSelector(selectCartItems);
	const totalQuantity = useSelector(selectTotalQuantity);
	const totalPrice = useSelector(selectTotalPrice);

	return (
		<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
			<div className='flex flex-col lg:flex-row gap-8'>
				{/* Formulário */}
				<div className='flex-1 bg-white p-6 rounded-xl shadow-md'>
					<form>
						<h3 className='text-xl font-semibold text-primary mb-4'>
							Endereço de Cobrança
						</h3>

						<div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
							<div>
								<label className='block mb-1 text-sm font-medium'>
									Nome Completo
								</label>
								<input
									type='text'
									placeholder='John M. Doe'
									className='w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary'
								/>
							</div>
							<div>
								<label className='block mb-1 text-sm font-medium'>Email</label>
								<input
									type='email'
									placeholder='john@example.com'
									className='w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary'
								/>
							</div>
							<div className='sm:col-span-2'>
								<label className='block mb-1 text-sm font-medium'>
									Endereço
								</label>
								<input
									type='text'
									placeholder='Rua Nossa Senhora de Fátima, 123'
									className='w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary'
								/>
							</div>
							<div>
								<label className='block mb-1 text-sm font-medium'>Cidade</label>
								<input
									type='text'
									placeholder='Campinas'
									className='w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary'
								/>
							</div>
							<div>
								<label className='block mb-1 text-sm font-medium'>Estado</label>
								<input
									type='text'
									placeholder='SP'
									className='w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary'
								/>
							</div>
							<div>
								<label className='block mb-1 text-sm font-medium'>CEP</label>
								<input
									type='text'
									placeholder='10001-200'
									className='w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary'
								/>
							</div>
						</div>

						<h3 className='text-xl font-semibold text-primary mt-8 mb-4'>
							Pagamento
						</h3>

						<div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
							<div className='col-span-2 flex items-center gap-4 mb-2'>
								<span className='text-sm font-medium'>Cartões Aceitos:</span>
								<i className='fa-brands fa-cc-visa text-blue-800 text-xl'></i>
								<i className='fa-brands fa-cc-mastercard text-red-600 text-xl'></i>
								<i className='fa-brands fa-cc-amex text-blue-500 text-xl'></i>
								<i className='fa-brands fa-cc-discover text-orange-500 text-xl'></i>
							</div>

							<div className='sm:col-span-2'>
								<label className='block mb-1 text-sm font-medium'>
									Nome no Cartão
								</label>
								<input
									type='text'
									placeholder='John More Doe'
									className='w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary'
								/>
							</div>

							<div className='sm:col-span-2'>
								<label className='block mb-1 text-sm font-medium'>
									Número do Cartão
								</label>
								<input
									type='text'
									placeholder='1111-2222-3333-4444'
									className='w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary'
								/>
							</div>

							<div>
								<label className='block mb-1 text-sm font-medium'>
									Mês de Expiração
								</label>
								<input
									type='text'
									placeholder='Setembro'
									className='w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary'
								/>
							</div>

							<div>
								<label className='block mb-1 text-sm font-medium'>
									Ano de Expiração
								</label>
								<input
									type='text'
									placeholder='2026'
									className='w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary'
								/>
							</div>

							<div>
								<label className='block mb-1 text-sm font-medium'>CVV</label>
								<input
									type='text'
									placeholder='352'
									className='w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary'
								/>
							</div>
						</div>

						<div className='mt-4'>
							<label className='inline-flex items-center text-sm'>
								<input
									type='checkbox'
									defaultChecked
									className='mr-2'
								/>
								Endereço de entrega igual ao de cobrança
							</label>
						</div>

						<button
							type='submit'
							className='mt-6 w-full bg-success hover:bg-amber-400 transition text-white font-semibold py-3 rounded-full shadow-md'
						>
							Finalizar pagamento – R$ {totalPrice.toFixed(2)}
						</button>
					</form>
				</div>

				{/* Resumo do carrinho */}
				<div className='w-full lg:w-1/3 bg-white p-6 rounded-xl shadow-md h-fit'>
					<h4 className='text-lg font-semibold text-primary mb-4 flex justify-between items-center'>
						Carrinho
						<span className='text-sm text-black flex items-center gap-1'>
							<i className='fa fa-shopping-cart' />
							<b>{totalQuantity}</b>
						</span>
					</h4>

					<ul className='space-y-2 text-sm flex flex-col gap-2'>
						{cartItems.map((item) => (
							<li
								key={item.id}
								className='flex justify-between items-center gap-6 bg-bg rounded-sm shadow-sm'
							>
								<span className='line-clamp-2'>{item.descripcion}</span>
								<span className='font-medium'>R$ {item.precio.toFixed(2)}</span>
							</li>
						))}
					</ul>

					<hr className='my-4' />

					<p className='flex justify-between font-semibold text-base text-black'>
						<span>Total:</span>
						<span>R$ {totalPrice.toFixed(2)}</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default PaymentForm;
