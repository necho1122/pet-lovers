import productsData from '../../mocks/productsData.json';
import { addItem } from '../../store/cartSlice';
import { useDispatch } from 'react-redux';
import ProductCard from './ProductCard';

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
			<div className='grid [grid-template-columns:repeat(auto-fill,minmax(200px,1fr))] gap-4 mx-auto'>
				{productsData.dogs.accesorios.map((product) => (
					<ProductCard
						key={product.id}
						product={product}
						onClick={handleAddItem}
					/>
				))}
			</div>
			<h3>Acessórios para Gatos</h3>
			<div className='grid [grid-template-columns:repeat(auto-fill,minmax(200px,1fr))] gap-4 mx-auto'>
				{productsData.gatos.accesorios.map((product) => (
					<ProductCard
						key={product.id}
						product={product}
						onClick={handleAddItem}
					/>
				))}
			</div>
			<h3>Acessórios para Aves</h3>
			<div className='grid [grid-template-columns:repeat(auto-fill,minmax(200px,1fr))] gap-4 mx-auto'>
				{productsData.birds.accesorios.map((product) => (
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

export default Accesorios;
