import productsData from '../../mocks/productsData.json';
import { AddToCartButton } from '../Icons';
import { addItem } from '../../store/cartSlice';
import { useDispatch } from 'react-redux';

function Accesorios() {
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
			<h3>Acessórios para Cães</h3>
			<div className='products-section'>
				{productsData.dogs.accesorios.map((product) => (
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
			<h3>Acessórios para Gatos</h3>
			<div className='products-section'>
				{productsData.gatos.accesorios.map((product) => (
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
			<h3>Acessórios para Aves</h3>
			<div className='products-section'>
				{productsData.birds.accesorios.map((product) => (
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

export default Accesorios;
