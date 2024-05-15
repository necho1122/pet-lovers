import productsData from '../mocks/productsData.json';
import mainCarouselData from '../mocks/mainCarouselData.json';
import './Home.css';
import logoVertical from '../assets/pet-lovers-logo-vertical.png'
import { useState, useEffect } from 'react';

interface Slide {
	foto: string;
	descripcion: string;
	precio: number;
}

const Carousel = ({ slides }: { slides: Slide[] }) => {
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

interface MainSlide {
	title: string;
	backgroundImageUrl: string;
}

const MainCarrousel = ({ slides }: { slides: MainSlide[] }) => {

	const [currentSlide, setCurrentSlide] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
		}, 5000);

		return () => {
			clearInterval(interval);
		};
	}, [slides.length]);

	return (
		<div className='main-carousel'>
			{slides.map((slide: MainSlide, index: number) => (
				currentSlide === index && (
					<div
					className='main-slide'
					key={index}
					style={{
						backgroundImage: `url(${slide.backgroundImageUrl})`,
					}}
				>
					<h2>{slide.title}</h2>
					<img
						src={logoVertical}
						alt={slide.title}
					/>
				</div>
				)
				
			))}
		</div>
	);
};

function Home() {
	const sliceAdoption = productsData.pets.adoption;
	const slidesDogFood = productsData.dogs.food;
	const sliceDogAcessories = productsData.dogs.accesorios;
	const slidesCatFood = productsData.gatos.comida;
	const sliceCatAcessories = productsData.gatos.accesorios;
	const sliceBirdsFood = productsData.birds.food;
	const sliceBirdsAcessories = productsData.birds.accesorios;

	return (
		<div className='home-app'>
			<h1>Bem vindos a Pet Lovers, Sua Pet Online</h1>
			<MainCarrousel slides={mainCarouselData.slide} />
			<h3>Pets para adoção</h3>
			<Carousel slides={sliceAdoption.map((slide) => ({ ...slide, precio: Number(slide.precio) }))} />
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
