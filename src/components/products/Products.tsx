import { useState } from 'react';
import AllProducts from './AllProducts';
import Comidas from './Comidas';
import Accesorios from './Accesorios';
import ServicesHero from '../ui/ServicesHero';

function Products() {
	const [filterProducts, setFilterProducts] = useState('all');

	const handleFilterChange = (filter: string) => {
		setFilterProducts(filter);
	};

	const buttonContent = [
		{
			item: 'comidas',
			label: 'Comidas',
			img: 'https://cdn-icons-png.flaticon.com/512/9643/9643209.png',
			color: 'bg-amber-400',
		},
		{
			item: 'acessorios',
			label: 'Accesorios',
			img: 'https://cdn-icons-png.flaticon.com/512/1279/1279397.png',
			color: 'bg-error',
		},
		{
			item: 'brinquedos',
			label: 'Brinquedos',
			img: 'https://cdn-icons-png.flaticon.com/512/9031/9031174.png',
			color: 'bg-success',
		},
	];

	return (
		<div className='max-w-7xl mx-auto'>
			<ServicesHero
				onFilter={handleFilterChange}
				title='Descubra o Melhor para o Seu Pet: Nutrição, Diversão e Bem-Estar'
				bgImage='/assets/petshop-background.webp'
				alt='Petshop background'
				datos={buttonContent}
			/>

			{
				{
					all: <AllProducts />,
					comidas: <Comidas />,
					brinquedos: (
						<div className='text-primary px-4 text-center text-2xl my-4 drop-shadow-sm'>
							Sem brinquedos por enquanto
						</div>
					),
					acessorios: <Accesorios />,
				}[filterProducts]
			}
		</div>
	);
}

export default Products;
