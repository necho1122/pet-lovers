/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';
import productsData from '../mocks/productsData.json';
import sitCat from '../assets/red-white-cat.webp';
import './Home.css';
import { AddToCartButton } from './Icons';
import type { Data } from '../types';

interface Slide {
	foto: string;
	descripcion: string;
	precio: number;
}

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
						<div className='pet-description'>
							<h4>{slide.descripcion}</h4>
						</div>
						<p>{`R$: ${slide.precio}`}</p>
						<button className='add-to-cart-btn'>
							<AddToCartButton />
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
						<a href='#'>Cadastre-se</a>
						<a href='#'>Mais Ofertas</a>
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
