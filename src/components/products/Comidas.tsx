import productsData from '../../mocks/productsData.json';
import { AddToCartButton } from '../Icons';

function Comidas() {
	return (
		<>
			<h3>Comidas para Cães</h3>
			<div className='products-section'>
				{productsData.dogs.food.map((product) => (
					<div
						key={product.id}
						className='product-slice'
					>
						<div className='product-image'>
							<img
								src={product.foto}
								alt='products'
							/>
						</div>
						<div className='product-description'>
							<p>{product.descripcion}</p>
						</div>
						<p className='adoption-indication'>R$ {product.precio}</p>
						<button className='add-to-cart-btn'>
							<AddToCartButton />
						</button>
					</div>
				))}
			</div>
			<h3>Comidas para Gatos</h3>
			<div className='products-section'>
				{productsData.gatos.comida.map((product) => (
					<div
						key={product.id}
						className='product-slice'
					>
						<div className='product-image'>
							<img
								src={product.foto}
								alt='products'
							/>
						</div>
						<div className='product-description'>
							<p>{product.descripcion}</p>
						</div>
						<p className='adoption-indication'>R$ {product.precio}</p>
						<button className='add-to-cart-btn'>
							<AddToCartButton />
						</button>
					</div>
				))}
			</div>
			<h3>Comidas para Aves</h3>
			<div className='products-section'>
				{productsData.birds.food.map((product) => (
					<div
						key={product.id}
						className='product-slice'
					>
						<div className='product-image'>
							<img
								src={product.foto}
								alt='products'
							/>
						</div>
						<div className='product-description'>
							<p>{product.descripcion}</p>
						</div>
						<p className='adoption-indication'>R$ {product.precio}</p>
						<button className='add-to-cart-btn'>
							<AddToCartButton />
						</button>
					</div>
				))}
			</div>
		</>
	);
}

export default Comidas;
