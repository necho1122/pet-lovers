import { ReactNode, useEffect, useState } from 'react';

interface CarouselProps {
	children: ReactNode[];
	slideWidth?: number; // en px, default: 210
	className?: string;
}

export default function Carousel({
	children,
	slideWidth = 210,
	className = '',
}: CarouselProps) {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [slidesToShow, setSlidesToShow] = useState(1);

	useEffect(() => {
		const resizeHandler = () => {
			const width = window.innerWidth;
			setSlidesToShow(Math.max(1, Math.floor(width / slideWidth)));
		};

		resizeHandler();
		window.addEventListener('resize', resizeHandler);
		return () => window.removeEventListener('resize', resizeHandler);
	}, [slideWidth]);

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + slidesToShow) % children.length);
	};

	const prevSlide = () => {
		setCurrentSlide(
			(prev) => (prev - slidesToShow + children.length) % children.length
		);
	};

	const visibleSlides = children.slice(
		currentSlide,
		currentSlide + slidesToShow
	);

	return (
		<div className={`relative w-full ${className}`}>
			<button
				onClick={prevSlide}
				className='absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-blue-500 text-white w-10 h-10 rounded-full shadow-md flex items-center justify-center'
			>
				&#10094;
			</button>

			<div className='flex gap-5 overflow-hidden justify-center'>
				{visibleSlides.map((child, index) => (
					<div
						key={index}
						className={`flex-none`}
						style={{
							width: `${slideWidth}px`,
							minWidth: `${slideWidth}px`,
							maxWidth: `${slideWidth}px`,
						}}
					>
						{child}
					</div>
				))}
			</div>

			<button
				onClick={nextSlide}
				className='absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-blue-500 text-white w-10 h-10 rounded-full shadow-md flex items-center justify-center'
			>
				&#10095;
			</button>
		</div>
	);
}
