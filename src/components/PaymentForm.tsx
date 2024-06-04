import React from 'react';
import './PaymentForm.css';
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
		<div className='ckeckout-form-container'>
			<div className='go-to-home'>
				<a href='/'>
					<img
						src='https://cdn-icons-png.flaticon.com/512/2550/2550430.png'
						alt='home icon'
					/>{' '}
					Home
				</a>
			</div>
			<div className='row'>
				<div className='col-75'>
					<div className='container'>
						<form action='/action_page.php'>
							<div className='row'>
								<div className='col-50'>
									<h3>Endereço de Cobrança</h3>
									<label htmlFor='fname'>
										<i className='fa fa-user' /> Nome Completo
									</label>
									<input
										type='text'
										id='fname'
										name='firstname'
										placeholder='John M. Doe'
									/>
									<label htmlFor='email'>
										<i className='fa fa-envelope' /> Email
									</label>
									<input
										type='text'
										id='email'
										name='email'
										placeholder='john@example.com'
									/>
									<label htmlFor='adr'>
										<i className='fa-solid fa-location-dot'></i> Endereço
									</label>
									<input
										type='text'
										id='adr'
										name='address'
										placeholder='Rua Nossa Senhora de Fátima, 123'
									/>
									<label htmlFor='city'>
										<i className='fa fa-institution' /> Cidade
									</label>
									<input
										type='text'
										id='city'
										name='city'
										placeholder='Campinas'
									/>
									<div className='row'>
										<div className='col-50'>
											<label htmlFor='state'>Estado</label>
											<input
												type='text'
												id='state'
												name='state'
												placeholder='SP'
											/>
										</div>
										<div className='col-50'>
											<label htmlFor='zip'>CEP</label>
											<input
												type='text'
												id='zip'
												name='zip'
												placeholder='10001-200'
											/>
										</div>
									</div>
								</div>
								<div className='col-50'>
									<h3>Pagamento</h3>
									<label htmlFor='fname'>Cartões Aceitos</label>
									<div className='icon-container'>
										<i
											className='fa-brands fa-cc-visa'
											style={{ color: 'navy' }}
										/>
										<i
											className='fa-brands fa-cc-amex'
											style={{ color: 'blue' }}
										/>
										<i
											className='fa-brands fa-cc-mastercard'
											style={{ color: 'red' }}
										/>
										<i
											className='fa-brands fa-cc-discover'
											style={{ color: 'orange' }}
										/>
									</div>
									<label htmlFor='cname'>Nome no Cartão</label>
									<input
										type='text'
										id='cname'
										name='cardname'
										placeholder='John More Doe'
									/>
									<label htmlFor='ccnum'>Número do Cartão de Crédito</label>
									<input
										type='text'
										id='ccnum'
										name='cardnumber'
										placeholder='1111-2222-3333-4444'
									/>
									<label htmlFor='expmonth'>Mês de Expiração</label>
									<input
										type='text'
										id='expmonth'
										name='expmonth'
										placeholder='Setembro'
									/>
									<div className='row'>
										<div className='col-50'>
											<label htmlFor='expyear'>Ano de Expiração</label>
											<input
												type='text'
												id='expyear'
												name='expyear'
												placeholder='2018'
											/>
										</div>
										<div className='col-50'>
											<label htmlFor='cvv'>CVV</label>
											<input
												type='text'
												id='cvv'
												name='cvv'
												placeholder='352'
											/>
										</div>
									</div>
								</div>
							</div>
							<label>
								<input
									type='checkbox'
									defaultChecked={true}
									name='sameadr'
								/>{' '}
								Endereço de entrega igual ao de cobrança
							</label>
							<input
								type='submit'
								defaultValue='Continuar para o checkout'
								className='btn'
							/>
						</form>
					</div>
				</div>
				<div className='col-25'>
					<div className='container'>
						<h4>
							Carrinho
							<span
								className='price'
								style={{ color: 'black' }}
							>
								<i className='fa fa-shopping-cart' />
								<b>{totalQuantity}</b>
							</span>
						</h4>
						<ul>
							{cartItems.map((item) => (
								<li key={item.id}>
									<p>{item.descripcion}</p>{' '}
									<a href='#'>
										<span className='price'>
											<b>${item.precio}</b>
										</span>
									</a>
								</li>
							))}
						</ul>
						<hr />
						<p>
							Total{' '}
							<span
								className='price'
								style={{ color: 'black' }}
							>
								<b>R${totalPrice.toFixed(2)}</b>
							</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PaymentForm;
