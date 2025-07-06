import { useState, useEffect } from 'react';
import productsData from '../mocks/productsData.json';
import type { Data } from '../types';
import useScreenSize from '../hooks/useScreenSize';
import Carousel from './ui/Carousel';
import { AddToCartButton } from './Icons';
import { Slide } from '../types'


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
	const [current, setCurrent] = useState(0);

	const withd = useScreenSize();
	const isMobile = withd < 640;

	const images = [
		'/assets/cat-week.webp',
		'/assets/dog-week.webp',
		'/assets/bird-week.webp',
	];

	const largeImages = [
		'/assets/banner1.webp',
		'/assets/banner2.webp',
		'/assets/banner3.webp',
	];

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
		}, 5000);

		return () => clearInterval(timer);
	}, [images.length]);

	return (
		<div className='max-w-7xl flex flex-col mx-auto'>
			<div className='flex flex-col'>
				<div className='relative w-full h-[400px] overflow-hidden'>
					{(isMobile ? images : largeImages).map((img, index) => (
						<img
							key={index}
							src={img}
							alt={`slide-${index + 1}`}
							className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out rounded-xl ${
								index === current ? 'opacity-100 -z-10' : 'opacity-0 -z-20'
							}`}
						/>
					))}
				</div>
			</div>
			<h2 className='text-xl p-3 text-center text-primary font-bold'>
				🐾 Descubra o Melhor para o Seu Melhor Amigo 🐾
			</h2>

			{sections.map((section, index) => (
				<div
					key={index}
					className='overflow-hidden'
				>
					<h3 className='text-center text-text font-bold pb-2'>
						{section.title}
					</h3>
					<Carousel slideWidth={210}>
						{section.slides.map((slide, index) => (
							<div
								key={index}
								className='bg-white flex flex-col items-center border-2 border-gray-200 rounded-lg px-3 pt-3 pb-4 text-gray-800 mb-4'
							>
								<div className='h-40 w-full rounded-lg overflow-hidden'>
									<img
										src={slide.foto}
										alt='Imagem do produto'
										className='w-full h-full object-cover rounded-lg'
									/>
								</div>
								<h4 className='line-clamp-2 mt-2'>{slide.descripcion}</h4>
								<p className='font-semibold'>{`R$: ${slide.precio}`}</p>
								<button className='px-6 py-2 mt-2 bg-success rounded-full'>
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
