import productsData from '../../mocks/productsData.json';
import { AddToCartButton } from '../Icons';
import { addItem } from '../../store/cartSlice';
import { useDispatch } from 'react-redux';

function Comidas() {
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
						<button
							className='add-to-cart-btn'
							onClick={() => handleAddItem(product)}
						>
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
						<button
							className='add-to-cart-btn'
							onClick={() => handleAddItem(product)}
						>
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
						<button
							className='add-to-cart-btn'
							onClick={() => handleAddItem(product)}
						>
							<AddToCartButton />
						</button>
					</div>
				))}
			</div>
		</>
	);
}

export default Comidas;
