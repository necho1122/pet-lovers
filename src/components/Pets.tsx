import productsData from '../mocks/productsData.json';
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

	const handleAddItem = (product: Product) => {
		dispatch(addItem({ ...product, quantity: 1 }));
	};

	const [raza, setRaza] = useState<Product[]>(productsData.pets.adoption);

	const handleRazaChange = (raza: Product[]) => setRaza(raza);

	return (
		<div className='max-w-7xl mx-auto'>
			<div className='flex justify-between items-center'>
				<div className='w-full h-80 relative flex flex-col justify-center items-center overflow-hidden'>
					<img
						src='/assets/pet-adoption-background.jpg'
						alt='pet adoption'
						className='w-full h-full object-cover rounded-md absolute -z-10 opacity-50'
					/>
					<h1 className='text-text font-extrabold text-3xl px-4 text-center'>
						Animais Resgatados em Busca de um Lar
					</h1>

					<div className='flex flex-row justify-center items-center p-4 gap-2 sm:gap-4'>
						{[
							{
								raza: 'cachorro',
								label: 'Cachorros',
								img: 'https://cdn-icons-png.flaticon.com/512/13481/13481015.png',
							},
							{
								raza: 'gato',
								label: 'Gatos',
								img: 'https://cdn-icons-png.flaticon.com/512/5702/5702228.png',
							},
							{
								raza: 'bird',
								label: 'Outros',
								img: 'https://cdn-icons-png.flaticon.com/512/3397/3397478.png',
							},
						].map(({ raza: r, label, img }) => (
							<a
								key={r}
								href='#'
								onClick={(e) => {
									e.preventDefault();
									handleRazaChange(
										productsData.pets.adoption.filter((p) => p.raza === r)
									);
								}}
								className='no-underline text-text text-base font-bold px-4 sm:py-4 rounded-md border-2 border-border bg-amber-400 flex flex-col justify-center items-center w-28 py-2'
							>
								<img
									src={img}
									alt={`${label} icon`}
									className='sm:w-12 sm:h-12 w-9 h-9'
								/>
								{label}
							</a>
						))}
					</div>
				</div>
			</div>

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
								className='px-6 py-2 my-2 bg-success rounded-full hover:cursor-pointer'
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
