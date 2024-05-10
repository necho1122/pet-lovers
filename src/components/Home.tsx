import productsData from '../mocks/productsData.json';
import './Home.css';

import { useState, useEffect } from 'react';

const Carousel = ({ slides }: { slides: any[] }) => {
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
						<h5>{slide.descripcion}</h5>
						<p>{`R$${slide.precio}`}</p>
						<button className='add-to-cart-btn'>Add to cart</button>
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

function Home() {
	const slidesDogFood = productsData.dogs.food;
	const sliceDogAcessories = productsData.dogs.accesorios;
	const slidesCatFood = productsData.gatos.comida;
	const sliceCatAcessories = productsData.gatos.accesorios;
	const sliceBirdsFood = productsData.birds.food;
	const sliceBirdsAcessories = productsData.birds.accesorios;

	return (
		<div className='app'>
			<h1>Pet Lovers</h1>
			<h3>Comida para cães</h3>
			<Carousel slides={slidesDogFood} />
			<h3>Acessórios para cães</h3>
			<Carousel slides={sliceDogAcessories} />
			<h3>Comida para gatos</h3>
			<Carousel slides={slidesCatFood} />
			<h3>Acessórios para gatos</h3>
			<Carousel slides={sliceCatAcessories} />
			<h3>Comida para aves</h3>
			<Carousel slides={sliceBirdsFood} />
			<h3>Acessórios para aves</h3>
			<Carousel slides={sliceBirdsAcessories} />
		</div>
	);
}

export default Home;
