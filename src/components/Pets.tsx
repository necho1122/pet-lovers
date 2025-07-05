import productsData from '../mocks/productsData.json';
import './Pets.css';
import { useState } from 'react';
import { AddToCartButton } from './Icons';
import { addItem } from '../store/cartSlice';
import { useDispatch } from 'react-redux';

interface Product {
	id: string;
	raza: string;
	foto: string;
	descripcion: string;
	precio: number;
}

function Pets() {
	const dispatch = useDispatch();

	const handleAddItem = (product: {
		id: string;
		descripcion: string;
		precio: number;
		foto: string;
	}) => {
		const newItem = {
			id: product.id,
			descripcion: product.descripcion,
			precio: product.precio,
			foto: product.foto,
			quantity: 1,
		};
		dispatch(addItem(newItem));
	};

	const [raza, setRaza] = useState<Product[]>(productsData.pets.adoption);

	const handleRazaChange = (raza: Product[]) => {
		setRaza(raza);
	};

	return (
		<div className='pets-container'>
			<div className='pets-overview'>
				<div className='pets-overview-information'>
					<img
						src='/assets/pet-adoption-background.jpg'
						alt='pet adoption'
					/>
					<h1>Animais Resgatados em Busca de um Lar</h1>
					<div className='pets-category-links'>
						<a
							href='#'
							onClick={(e) => {
								e.preventDefault(); // Evitar el comportamiento predeterminado del enlace
								handleRazaChange(
									productsData.pets.adoption.filter(
										(product) => product.raza === 'cachorro'
									)
								);
							}}
						>
							<img
								src='https://cdn-icons-png.flaticon.com/512/13481/13481015.png'
								alt='dog icon'
							/>
							Cachorros
						</a>
						<a
							href='#'
							onClick={(e) => {
								e.preventDefault();
								handleRazaChange(
									productsData.pets.adoption.filter(
										(product) => product.raza === 'gato'
									)
								);
							}}
						>
							<img
								src='https://cdn-icons-png.flaticon.com/512/5702/5702228.png'
								alt='cat icon'
							/>
							Gatos
						</a>
						<a
							href='#'
							onClick={(e) => {
								e.preventDefault();
								handleRazaChange(
									productsData.pets.adoption.filter(
										(product) => product.raza === 'bird'
									)
								);
							}}
						>
							<img
								src='https://cdn-icons-png.flaticon.com/512/3397/3397478.png'
								alt='animals icon'
							/>
							Outros
						</a>
					</div>
				</div>
			</div>
			<h2>Encontre Seu Novo Melhor Amigo Hoje! 🐾</h2>
			<div className='pets-section'>
				{raza.map((product) => (
					<div
						key={product.id}
						className='pet-slice'
					>
						<div className='pet-image'>
							<img
								src={product.foto}
								alt='pets'
							/>
						</div>
						<div className='pet-description'>
							<p>{product.descripcion}</p>
						</div>
						<p className='adoption-indication'>Disponível para adoção</p>
						<button
							className='add-to-cart-btn'
							onClick={() => handleAddItem(product)}
						>
							<AddToCartButton />
						</button>
					</div>
				))}
			</div>
		</div>
	);
}

export default Pets;
