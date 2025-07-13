import { useState } from 'react';
import AllProducts from './AllProducts';
import Comidas from './Comidas';
import Accesorios from './Accesorios';
import ServicesHero from '../ui/ServicesHero';
import data from '../../mocks/productsData.json';

interface Product {
	id: string;
	raza: string;
	foto: string;
	descripcion: string;
	precio: number;
}

function Products(product: Product) {
	const [filterProducts, setFilterProducts] = useState('all');

	const handleFilterChange = (filter: string) => {
		setFilterProducts(filter);
	};

	const toFilterProducts = [
		{ accesorios: [data.dogs.accesorios, data.gatos.accesorios] },
		{ comidas: [data.dogs.food, data.gatos.comida, data.birds.food] },
		{ brinquedos: 'Sin Brinquedos por encuanto' },
	];

	const buttonContent = [
		{
			item: 'comidas',
			label: 'Comidas',
			img: 'https://cdn-icons-png.flaticon.com/512/9643/9643209.png',
			color: 'bg-amber-400',
		},
		{
			item: 'gato',
			label: 'Accesorios',
			img: 'https://cdn-icons-png.flaticon.com/512/1279/1279397.png',
			color: 'bg-error',
		},
		{
			item: 'bird',
			label: 'Brinquedos',
			img: 'https://cdn-icons-png.flaticon.com/512/9031/9031174.png',
			color: 'bg-success',
		},
	];

	return (
		<div className='max-w-7xl mx-auto'>
			<ServicesHero
				onFilter={(filter) => {
					const filtrados = productsData.pets.adoption.filter(
						(p: Product) => p.raza === filter
					);
					setRaza(filtrados);
				}}
				title='Descubra o Melhor para o Seu Pet: Nutrição, Diversão e Bem- Estar'
				bgImage='/assets/petshop-background.webp'
				alt='Animais resgatados'
				datos={buttonContent}
			/>
			{
				{
					all: <AllProducts />,
					comidas: <Comidas />,
					brinquedos: (
						<div className='text-primary text- px-4 text-center text-2xl my-4 drop-shadow-sm'>
							Sim brinquedos por encuanto
						</div>
					),
					acessorios: <Accesorios />,
				}[filterProducts]
			}
		</div>
	);
}

export default Products;
