import productsData from '../mocks/productsData.json';
import type { Data } from '../types';
import Carousel from './ui/Carousel';
import { AddToCartButton } from './Icons';
import { Slide } from '../types';
import HomeHero from './HomeHero';

const Home: React.FC = () => {
	const { pets, dogs, gatos, birds } = productsData as Data;
	const sections: { title: string; slides: Slide[] }[] = [
		{ title: 'Pets para adoção', slides: pets.adoption as Slide[] },
		{ title: 'Comida para cães', slides: dogs.food as Slide[] },
		{ title: 'Acessórios para cães', slides: dogs.accesorios as Slide[] },
		{ title: 'Comida para gatos', slides: gatos.comida as Slide[] },
		{ title: 'Acessórios para gatos', slides: gatos.accesorios as Slide[] },
		{ title: 'Comida para aves', slides: birds.food as Slide[] },
		{ title: 'Acessórios para aves', slides: birds.accesorios as Slide[] },
	];

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
							<div
								key={index}
								className='bg-white flex flex-col items-center border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1 px-3 pt-3 pb-4 text-gray-800 mb-4 w-[200px]'
							>
								<div className='h-40 w-full rounded-xl overflow-hidden'>
									<img
										src={slide.foto}
										alt={`Produto: ${slide.descripcion}`}
										className='w-full h-full object-cover rounded-xl'
									/>
								</div>
								<h4 className='line-clamp-2 mt-2 text-center text-sm font-medium'>
									{slide.descripcion}
								</h4>
								<p className='font-semibold text-primary mt-1'>{`R$: ${slide.precio}`}</p>
								<button className='px-6 py-2 mt-3 bg-success text-white font-semibold rounded-full shadow hover:bg-amber-400 transition hover:cursor-pointer'>
									<AddToCartButton />
								</button>
							</div>
						))}
					</Carousel>
				</div>
			))}
		</div>
	);
};

export default Home;
