import productsData from '../mocks/productsData.json';
import { useState } from 'react';
import { AddToCartButton } from './Icons';
import { addItem } from '../store/cartSlice';
import { useDispatch } from 'react-redux';
import ServicesHero from './ui/ServicesHero';

interface Product {
	id: string;
	raza: string;
	foto: string;
	descripcion: string;
	precio: number;
}

const buttonContent = [
	{
		item: 'cachorro',
		label: 'Cachorros',
		img: 'https://cdn-icons-png.flaticon.com/512/15721/15721652.png',
		color: 'bg-amber-400',
	},
	{
		item: 'gato',
		label: 'Gatos',
		img: 'https://cdn-icons-png.flaticon.com/512/10890/10890561.png',
		color: 'bg-error',
	},
	{
		item: 'bird',
		label: 'Outros',
		img: 'https://cdn-icons-png.flaticon.com/512/9513/9513911.png',
		color: 'bg-success',
	},
];

function Pets() {
	const dispatch = useDispatch();

	const handleAddItem = (product: Product) => {
		dispatch(addItem({ ...product, quantity: 1 }));
	};

	const [raza, setRaza] = useState<Product[]>(productsData.pets.adoption);

	return (
		<div className='max-w-7xl mx-auto'>
			<ServicesHero
				onFilter={(filter) => {
					const filtrados = productsData.pets.adoption.filter(
						(p: Product) => p.raza === filter
					);
					setRaza(filtrados);
				}}
				title='Animais Resgatados em Busca de um Lar'
				bgImage='/assets/pet-adoption-background.jpg'
				alt='Animais resgatados'
				datos={buttonContent}
			/>

			<div>
				<h2 className='text-primary text- px-4 text-center text-2xl my-4 drop-shadow-sm'>
					Encontre Seu Novo Melhor Amigo Hoje! 🐾
				</h2>

				<div className='grid [grid-template-columns:repeat(auto-fill,minmax(200px,1fr))] gap-4 mx-auto'>
					{raza.map((slide, index) => (
						<div
							key={index}
							className=' text-text flex flex-col justify-center items-center border-2 border-border rounded-md overflow-hidden mb-8'
						>
							<div className='w-full h-52 overflow-hidden'>
								<img
									src={slide.foto}
									alt='Imagem do produto'
									className='w-full h-full object-cover rounded-md'
								/>
							</div>
							<div className='line-clamp-2 leading-tight max-h-10 text-center px-2 mt-2 text-base'>
								{slide.descripcion}
							</div>
							<p className='font-semibold text-center px-2 text-base'>
								R$: {slide.precio}
							</p>
							<button
								onClick={() => handleAddItem(slide)}
								className='px-6 py-2 my-2 bg-success rounded-full hover:cursor-pointer hover:bg-amber-400'
							>
								<AddToCartButton />
							</button>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Pets;
