/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';
import productsData from '../mocks/productsData.json';
import sitCat from '../assets/red-white-cat.webp';
import './Home.css';

interface Slide {
	foto: string;
	descripcion: string;
	precio: number;
}

/*
interface MainSlide {
	title: string;
	backgroundImageUrl: string;
}
*/

const Carousel: React.FC<{ slides: Slide[] }> = ({ slides }) => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [slidesToShow, setSlidesToShow] = useState(1);

	useEffect(() => {
		const resizeHandler = () => {
			const width = window.innerWidth;
			setSlidesToShow(Math.floor(width / 210));
		};

		resizeHandler();

		window.addEventListener('resize', resizeHandler);
		return () => {
			window.removeEventListener('resize', resizeHandler);
		};
	}, []);

	const nextSlide = () => {
		setCurrentSlide((prevSlide) => (prevSlide + slidesToShow) % slides.length);
	};

	const prevSlide = () => {
		setCurrentSlide(
			(prevSlide) => (prevSlide - slidesToShow + slides.length) % slides.length
		);
	};

	return (
		<div className='carousel'>
			<button
				className='carousel-button prev'
				onClick={prevSlide}
			>
				&#10094;
			</button>
			{slides
				.slice(currentSlide, currentSlide + slidesToShow)
				.map((slide, index) => (
					<div
						key={index}
						className='slide'
					>
						<div className='slide-image'>
							<img
								src={slide.foto}
								alt='food image'
							/>
						</div>
						<h4>{slide.descripcion}</h4>
						<p>{`R$: ${slide.precio}`}</p>
						<button className='add-to-cart-btn'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								version='1.1'
								xmlnsXlink='http://www.w3.org/1999/xlink'
								width={25}
								height={25}
								x={0}
								y={0}
								viewBox='0 0 32 32'
								xmlSpace='preserve'
								className=''
							>
								<g>
									<path
										d='M30 25H8.9l-.2-2H26c.45 0 .84-.3.96-.73l4-14c.09-.3.03-.63-.16-.88s-.49-.4-.8-.4H7.1l-.11-1.1a1 1 0 0 0-1-.9H2c-.55 0-1 .45-1 1s.45 1 1 1h3.1l1.91 19.1a1 1 0 0 0 1 .9h1.18c-.11.31-.18.65-.18 1 0 1.65 1.35 3 3 3s3-1.35 3-3c0-.35-.07-.69-.18-1h8.37c-.11.31-.18.65-.18 1 0 1.65 1.35 3 3 3s3-1.35 3-3c0-.35-.07-.69-.18-1h1.18c.55 0 1-.45 1-1s-.45-1-1-1zM28.67 9l-3.43 12H8.5L7.3 9zM13 28c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1zm14 0c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1z'
										fill='#ffffff'
										opacity={1}
										data-original='#000000'
										className=''
									/>
									<path
										d='M20 14h-2v-2c0-.55-.45-1-1-1s-1 .45-1 1v2h-2c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1z'
										fill='#ffffff'
										opacity={1}
										data-original='#000000'
										className=''
									/>
								</g>
							</svg>
						</button>
					</div>
				))}
			<button
				className='carousel-button next'
				onClick={nextSlide}
			>
				&#10095;
			</button>
		</div>
	);
};

const Home: React.FC = () => {
	const { pets, dogs, gatos, birds } = productsData;
	const sections = [
		{ title: 'Pets para adoção', slides: pets.adoption },
		{ title: 'Comida para cães', slides: dogs.food },
		{ title: 'Acessórios para cães', slides: dogs.accesorios },
		{ title: 'Comida para gatos', slides: gatos.comida },
		{ title: 'Acessórios para gatos', slides: gatos.accesorios },
		{ title: 'Comida para aves', slides: birds.food },
		{ title: 'Acessórios para aves', slides: birds.accesorios },
	];

	return (
		<div className='home-app'>
			<div className='home-overview'>
				<div className='home-overview-image'>
					<div className='background-circle'></div>
					<img
						src={sitCat}
						alt='cat'
					/>
				</div>
				<div className='home-overview-information'>
					<h1>
						Bem-vindos a <span style={{ color: '#F7B733' }}>Pet</span>{' '}
						<span style={{ color: '#000' }}>Lovers</span>, Sua Pet Online
					</h1>
					<h3>Ofertas Exclusivas!</h3>
					<ul>
						<li>🌟 20% de Desconto em Alimentos Premium</li>
						<li>🎉 Brinquedos Divertidos pela Metade do Preço</li>
						<li>✨ Acessórios Modernos para Cada Mascota</li>
					</ul>
					<div className='home-overview-links'>
						<a href='#'>one section</a>
						<a href='#'>two section</a>
					</div>
				</div>
			</div>
			<h2>🐾 Descubra o Melhor para o Seu Melhor Amigo 🐾</h2>
			{sections.map((section, index) => (
				<div key={index}>
					<h3>{section.title}</h3>
					<Carousel
						slides={section.slides.map((slide: any) => ({
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
