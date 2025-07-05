import { useState, useEffect } from 'react';
import productsData from '../mocks/productsData.json';
import './Home.css';
import HomeSlides from './products/HomeSlides';
import type { Data } from '../types';

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

	const images = [
		'/assets/cat-week.webp',
		'/assets/dog-week.webp',
		'/assets/bird-week.webp',
	];

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
		}, 5000);

		return () => clearInterval(timer);
	}, [images.length]);

	return (
		<div className='home-app'>
			<div className='flex flex-col'>
				<div className='relative w-full h-[500px] overflow-hidden'>
					{images.map((img, index) => (
						<img
							key={index}
							src={img}
							alt={`slide-${index}`}
							className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
								index === current ? 'opacity-100 -z-10' : 'opacity-0 -z-20'
							}`}
						/>
					))}
				</div>

				<div className='home-overview-image'>
					<div className='background-circle'></div>
					<img
						src='/assets/red-white-cat.webp'
						alt='cat'
					/>
				</div>
			</div>
			<h2>🐾 Descubra o Melhor para o Seu Melhor Amigo 🐾</h2>
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
