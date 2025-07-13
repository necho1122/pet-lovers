import { AddToCartButton } from '../Icons';

interface Product {
	id: string;
	descripcion: string;
	precio: number;
	foto: string;
}

interface ProductCardProps {
	product: Product;
	onClick: (product: Product) => void;
}

function ProductCard({ product, onClick }: ProductCardProps) {
	return (
		<div className='bg-white flex flex-col items-center border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1 px-3 pt-3 pb-4 text-gray-800 mb-2 w-[200px]'>
			<div className='h-40 w-full rounded-xl overflow-hidden'>
				<img
					src={product.foto}
					alt={`Producto: ${product.descripcion}`}
					className='w-full h-full object-cover rounded-xl'
				/>
			</div>
			<h4 className='line-clamp-2 mt-2 text-center text-sm font-medium'>
				{product.descripcion}
			</h4>
			<p className='font-semibold text-primary mt-1'>{`R$: ${product.precio}`}</p>
			<button
				className='px-6 py-2 mt-3 bg-success text-white font-semibold rounded-full shadow hover:bg-amber-400 transition hover:cursor-pointer'
				onClick={() => onClick(product)}
			>
				<AddToCartButton />
			</button>
		</div>
	);
}

export default ProductCard;
