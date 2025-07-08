import { useState } from 'react';
import AllProducts from './AllProducts';
import Comidas from './Comidas';
import Accesorios from './Accesorios';

function Products() {
	const [filterProducts, setFilterProducts] = useState('all');

	const handleFilterChange = (filter: string) => {
		setFilterProducts(filter);
	};

	return (
		<div className='max-w-7xl mx-auto'>
			<div className='flex justify-between items-center'>
				<div className='w-full h-80 relative flex flex-col justify-center items-center overflow-hidden'>
					<img
						src='https://images.unsplash.com/photo-1569267034662-77399a614620?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
						alt='products pet shop background'
						className='w-full h-full object-cover rounded-md absolute -z-10 opacity-50'
					/>
					<h1 className='text-text font-extrabold text-3xl px-4 text-center'>
						Descubra o Melhor para o Seu Pet: Nutrição, Diversão e Bem- Estar
					</h1>
					<div className='flex flex-row justify-center items-center p-4 gap-2 sm:gap-4'>
						<a
							className='no-underline text-text text-base font-bold px-4 sm:py-4 rounded-md border-2 border-border bg-amber-400 flex flex-col justify-center items-center w-28 py-2'
							href='#'
							onClick={(e) => {
								e.preventDefault();
								handleFilterChange('comidas');
							}}
						>
							<img
								src='https://cdn-icons-png.flaticon.com/512/3737/3737726.png'
								alt='pet food icon'
								className='sm:w-12 sm:h-12 w-9 h-9'
							/>
							Comidas
						</a>
						<a
							className='no-underline text-text text-base font-bold px-4 sm:py-4 rounded-md border-2 border-border bg-amber-400 flex flex-col justify-center items-center w-28 py-2'
							href='#'
							onClick={(e) => {
								e.preventDefault();
								handleFilterChange('brinquedos');
							}}
						>
							<img
								src='https://cdn-icons-png.flaticon.com/512/4293/4293048.png'
								alt='pets toys icon'
								className='sm:w-12 sm:h-12 w-9 h-9'
							/>
							Brinquedos
						</a>
						<a
							className='no-underline text-text text-base font-bold px-4 sm:py-4 rounded-md border-2 border-border bg-amber-400 flex flex-col justify-center items-center w-28 py-2'
							href='#'
							onClick={(e) => {
								e.preventDefault();
								handleFilterChange('acessorios');
							}}
						>
							<img
								src='https://cdn-icons-png.flaticon.com/512/1279/1279247.png'
								alt='pets accessories icon'
								className='sm:w-12 sm:h-12 w-9 h-9'
							/>
							Acessórios
						</a>
					</div>
				</div>
			</div>
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
