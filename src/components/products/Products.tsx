import './products.css';
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
		<div className='products-container'>
			<div className='products-overview'>
				<div className='products-overview-information'>
					<img
						src='https://images.unsplash.com/photo-1569267034662-77399a614620?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
						alt='products pet shop background'
					/>
					<h1>
						Descubra o Melhor para o Seu Pet: Nutrição, Diversão e Bem- Estar
					</h1>
					<div className='products-category-links'>
						<a
							href='#'
							onClick={(e) => {
								e.preventDefault();
								handleFilterChange('comidas');
							}}
						>
							<img
								src='https://cdn-icons-png.flaticon.com/512/3737/3737726.png'
								alt='pet food icon'
							/>
							Comidas
						</a>
						<a
							href='#'
							onClick={(e) => {
								e.preventDefault();
								handleFilterChange('brinquedos');
							}}
						>
							<img
								src='https://cdn-icons-png.flaticon.com/512/4293/4293048.png'
								alt='pets toys icon'
							/>
							Brinquedos
						</a>
						<a
							href='#'
							onClick={(e) => {
								e.preventDefault();
								handleFilterChange('acessorios');
							}}
						>
							<img
								src='https://cdn-icons-png.flaticon.com/512/1279/1279247.png'
								alt='pets accessories icon'
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
						<div className='toys-section'>Sim brinquedos por encuanto</div>
					),
					acessorios: <Accesorios />,
				}[filterProducts]
			}
		</div>
	);
}

export default Products;
