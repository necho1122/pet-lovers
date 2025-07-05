import { useState, useEffect } from 'react';
import productsData from '../mocks/productsData.json';
import './Home.css';
import HomeSlides from './products/HomeSlides';
import type { Data } from '../types';
import useScreenSize from '../hooks/useScreenSize';

interface Slide {
	foto: string;
	descripcion: string;
	precio: number;
}

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
					<div className='absolute left-0 top-0 h-full w-7 bg-gradient-to-r from-white via-white/50 to-transparent pointer-events-none'></div>
					<div className='absolute right-0 top-0 h-full w-7 bg-gradient-to-l from-white via-white/50 to-transparent pointer-events-none'></div>
					<div className='absolute bottom-0 left-0 w-full h-7 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none'></div>
				</div>
				<div className='w-full flex flex-row'>
					{!isMobile && (
						<div className='relative flex-1'>
							<div className='absolute top-0 left-0 sm:w-full aspect-square bg-[#F7B733] -z-10 [clip-path:circle(50%_at_50%_50%)] bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none'></div>
							<img
								src='/assets/red-white-cat.webp'
								alt='cat'
							/>
						</div>
					)}
					<h2 className='flex-1 text-xl'>
						🐾 Descubra o Melhor para o Seu Melhor Amigo 🐾
					</h2>
				</div>
			</div>

			{sections.map((section, index) => (
				<div key={index}>
					<h3>{section.title}</h3>
					<HomeSlides
						slides={section.slides.map((slide: Slide) => ({
							...slide,
							precio: Number(slide.precio),
						}))}
					/>
				</div>
			))}
		</div>
	);
};

export default Home;
