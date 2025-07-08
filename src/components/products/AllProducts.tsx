//AllProducts.tsx
import productsData from '../../mocks/productsData.json';
import { AddToCartButton } from '../Icons';
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/cartSlice';

function AllProducts() {
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
			<h3 className='text-center text-text font-bold pb-2'>
				Cães (Comidas, Brinquedos, Acessórios)
			</h3>
			<div className='grid [grid-template-columns:repeat(auto-fill,minmax(200px,1fr))] gap-4 mx-auto'>
				{productsData.dogs.food.map((product) => (
					<div
						key={product.id}
						className=' text-text flex flex-col justify-center items-center border-2 border-border rounded-md overflow-hidden mb-8'
					>
						<div className='w-full h-52 overflow-hidden'>
							<img
								src={product.foto}
								alt='products'
								className='w-full h-full object-cover rounded-md'
							/>
						</div>
						<div className='line-clamp-2 leading-tight max-h-10 text-center px-2 mt-2 text-base'>
							{product.descripcion}
						</div>
						<p className='font-semibold text-center px-2 text-base'>R$ {product.precio}</p>
						<button
							className='px-6 py-2 my-2 bg-success rounded-full hover:cursor-pointer'
							onClick={() => handleAddItem(product)}
						>
							<AddToCartButton />
						</button>
					</div>
				))}
			</div>
			<div className='grid [grid-template-columns:repeat(auto-fill,minmax(200px,1fr))] gap-4 mx-auto'>
				{productsData.dogs.accesorios.map((product) => (
					<div
						key={product.id}
						className=' text-text flex flex-col justify-center items-center border-2 border-border rounded-md overflow-hidden mb-8'
					>
						<div className='w-full h-52 overflow-hidden'>
							<img
								src={product.foto}
								alt='products'
								className='w-full h-full object-cover rounded-md'
							/>
						</div>
						<div className='line-clamp-2 leading-tight max-h-10 text-center px-2 mt-2 text-base'>
							{product.descripcion}
						</div>
						<p className='font-semibold text-center px-2 text-base'>R$ {product.precio}</p>
						<button
							className='px-6 py-2 my-2 bg-success rounded-full hover:cursor-pointer'
							onClick={() => handleAddItem(product)}
						>
							<AddToCartButton />
						</button>
					</div>
				))}
			</div>
			<h3 className='text-center text-text font-bold pb-2'>
				Gatos (Comidas, Brinquedos, Acessórios)
			</h3>
			<div className='grid [grid-template-columns:repeat(auto-fill,minmax(200px,1fr))] gap-4 mx-auto'>
				{productsData.gatos.comida.map((product) => (
					<div
						key={product.id}
						className=' text-text flex flex-col justify-center items-center border-2 border-border rounded-md overflow-hidden mb-8'
					>
						<div className='w-full h-52 overflow-hidden'>
							<img
								src={product.foto}
								alt='products'
								className='w-full h-full object-cover rounded-md'
							/>
						</div>
						<div className='line-clamp-2 leading-tight max-h-10 text-center px-2 mt-2 text-base'>
							{product.descripcion}
						</div>
						<p className='font-semibold text-center px-2 text-base'>R$ {product.precio}</p>
						<button
							className='px-6 py-2 my-2 bg-success rounded-full hover:cursor-pointer'
							onClick={() => handleAddItem(product)}
						>
							<AddToCartButton />
						</button>
					</div>
				))}
			</div>
			<div className='grid [grid-template-columns:repeat(auto-fill,minmax(200px,1fr))] gap-4 mx-auto'>
				{productsData.gatos.accesorios.map((product) => (
					<div
						key={product.id}
						className=' text-text flex flex-col justify-center items-center border-2 border-border rounded-md overflow-hidden mb-8'
					>
						<div className='w-full h-52 overflow-hidden'>
							<img
								src={product.foto}
								alt='products'
								className='w-full h-full object-cover rounded-md'
							/>
						</div>
						<div className='line-clamp-2 leading-tight max-h-10 text-center px-2 mt-2 text-base'>
							{product.descripcion}
						</div>
						<p className='font-semibold text-center px-2 text-base'>R$ {product.precio}</p>
						<button
							className='px-6 py-2 my-2 bg-success rounded-full hover:cursor-pointer'
							onClick={() => handleAddItem(product)}
						>
							<AddToCartButton />
						</button>
					</div>
				))}
			</div>
			<h3 className='text-center text-text font-bold pb-2'>
				Aves (Comidas, Acessórios)
			</h3>
			<div className='grid [grid-template-columns:repeat(auto-fill,minmax(200px,1fr))] gap-4 mx-auto'>
				{productsData.birds.food.map((product) => (
					<div
						key={product.id}
						className=' text-text flex flex-col justify-center items-center border-2 border-border rounded-md overflow-hidden mb-8'
					>
						<div className='w-full h-52 overflow-hidden'>
							<img
								src={product.foto}
								alt='products'
								className='w-full h-full object-cover rounded-md'
							/>
						</div>
						<div className='line-clamp-2 leading-tight max-h-10 text-center px-2 mt-2 text-base'>
							{product.descripcion}
						</div>
						<p className='font-semibold text-center px-2 text-base'>R$ {product.precio}</p>
						<button
							className='px-6 py-2 my-2 bg-success rounded-full hover:cursor-pointer'
							onClick={() => handleAddItem(product)}
						>
							<AddToCartButton />
						</button>
					</div>
				))}
			</div>
			<div className='grid [grid-template-columns:repeat(auto-fill,minmax(200px,1fr))] gap-4 mx-auto'>
				{productsData.birds.accesorios.map((product) => (
					<div
						key={product.id}
						className=' text-text flex flex-col justify-center items-center border-2 border-border rounded-md overflow-hidden mb-8'
					>
						<div className='w-full h-52 overflow-hidden'>
							<img
								src={product.foto}
								alt='products'
								className='w-full h-full object-cover rounded-md'
							/>
						</div>
						<div className='line-clamp-2 leading-tight max-h-10 text-center px-2 mt-2 text-base'>
							{product.descripcion}
						</div>
						<p className='font-semibold text-center px-2 text-base'>R$ {product.precio}</p>
						<button
							className='px-6 py-2 my-2 bg-success rounded-full hover:cursor-pointer'
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

export default AllProducts;
