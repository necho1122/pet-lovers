import productsData from '../../mocks/productsData.json';
import { addItem } from '../../store/cartSlice';
import { useDispatch } from 'react-redux';
import ProductCard from './ProductCard';

interface Product {
	id: string;
	descripcion: string;
	precio: number;
	foto: string;
}

function Comidas() {
	const dispatch = useDispatch();

	const handleAddItem = (product: Product) => {
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
			<div className='grid [grid-template-columns:repeat(auto-fill,minmax(200px,1fr))] gap-4 mx-auto'>
				{productsData.dogs.food.map((product: Product) => (
					<ProductCard
						key={product.id}
						product={product}
						onClick={handleAddItem}
					/>
				))}
			</div>
			<h3>Comidas para Gatos</h3>
			<div className='grid [grid-template-columns:repeat(auto-fill,minmax(200px,1fr))] gap-4 mx-auto'>
				{productsData.gatos.comida.map((product: Product) => (
					<ProductCard
						key={product.id}
						product={product}
						onClick={handleAddItem}
					/>
				))}
			</div>
			<h3>Comidas para Aves</h3>
			<div className='grid [grid-template-columns:repeat(auto-fill,minmax(200px,1fr))] gap-4 mx-auto'>
				{productsData.birds.food.map((product: Product) => (
					<ProductCard
						key={product.id}
						product={product}
						onClick={handleAddItem}
					/>
				))}
			</div>
		</>
	);
}

export default Comidas;
