import productsData from '../mocks/productsData.json';
import type { Data } from '../types';
import Carousel from './ui/Carousel';
import { Slide } from '../types';
import HomeHero from './HomeHero';
import ProductCard from './products/ProductCard';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/cartSlice';

interface Product extends Slide {
	id: string;
}

const Home: React.FC = () => {
	const { pets, dogs, gatos, birds } = productsData as Data;
	const sections: { title: string; slides: Product[] }[] = [
		{ title: 'Pets para adoção', slides: pets.adoption as Product[] },
		{ title: 'Comida para cães', slides: dogs.food as Product[] },
		{ title: 'Acessórios para cães', slides: dogs.accesorios as Product[] },
		{ title: 'Comida para gatos', slides: gatos.comida as Product[] },
		{ title: 'Acessórios para gatos', slides: gatos.accesorios as Product[] },
		{ title: 'Comida para aves', slides: birds.food as Product[] },
		{ title: 'Acessórios para aves', slides: birds.accesorios as Product[] },
	];

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
		<div className='max-w-7xl flex flex-col mx-auto px-4 sm:px-6 lg:px-8'>
			<div className='flex flex-col gap-6'>
				<HomeHero />
			</div>

			<h2 className='text-2xl sm:text-3xl font-bold text-center text-primary py-6'>
				🐾 Descubra o Melhor para o Seu Melhor Amigo 🐾
			</h2>

			{sections.map((section, index) => (
				<div
					key={index}
					className='overflow-hidden mb-10'
				>
					<h3 className='text-xl sm:text-2xl text-center text-text font-semibold mb-4'>
						{section.title}
					</h3>
					<Carousel slideWidth={210}>
						{section.slides.map((slide, index) => (
							<ProductCard
								key={index}
								product={slide}
								onClick={handleAddItem}
							/>
						))}
					</Carousel>
				</div>
			))}
		</div>
	);
};

export default Home;
