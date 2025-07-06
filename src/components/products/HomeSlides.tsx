import { useEffect, useState } from 'react';
import { AddToCartButton } from '../Icons';

interface Slide {
	foto: string;
	descripcion: string;
	precio: number;
}

interface HomeSlidesProps {
	slides: Slide[];
}

function HomeSlides({ slides }: HomeSlidesProps) {
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
		<div className='relative flex flex-row justify-center gap-5 overflow-hidden pb-0'>
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
						className='flex-none sm:w-3xs max-w-64 bg-white mb-5
								flex flex-col justify-start items-center border-2
								border-border rounded-lg text-text 
								transition-shadow duration-200 
								h-auto overflow-hidden px-3 pt-3 py-2'
					>
						<div className='sm:h-40 sm:w-auto rounded-lg'>
							<img
								src={slide.foto}
								alt='food image'
								className='w-full h-full object-cover rounded-lg'
							/>
						</div>
						<div className='pet-description'>
							<h4 className='line-clamp-3'>{slide.descripcion}</h4>
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
}

export default HomeSlides;
