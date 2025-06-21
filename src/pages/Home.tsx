import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SlideProps } from '../types';
import productsData from '../mocks/productsData.json';
import './Home.css';

function Home() {
	const [currentSlide, setCurrentSlide] = useState(0);

	const slides: SlideProps[] = [
		...productsData.dogs.comida,
		...productsData.gatos.comida,
		...productsData.birds.food,
	];

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
	};

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
	};

	return (
		<div className='home-container'>
			<section className='hero-section'>
				<div className='hero-content'>
					<h1>Bem-vindo ao Pet Lovers</h1>
					<p>O lugar ideal para o seu pet!</p>
					<div className='hero-buttons'>
						<Link
							to='/products'
							className='cta-button'
						>
							Ver Produtos
						</Link>
						<Link
							to='/services'
							className='cta-button secondary'
						>
							Nossos Serviços
						</Link>
					</div>
				</div>
			</section>

			<section className='featured-products'>
				<h2>Produtos em Destaque</h2>
				<div className='carousel'>
					<button
						onClick={prevSlide}
						className='carousel-button prev'
					>
						&#8249;
					</button>
					<div className='slide'>
						<img
							src={slides[currentSlide].foto}
							alt='featured product'
						/>
						<p>{slides[currentSlide].descripcion}</p>
						<span>R$ {slides[currentSlide].precio}</span>
					</div>
					<button
						onClick={nextSlide}
						className='carousel-button next'
					>
						&#8250;
					</button>
				</div>
			</section>

			<section className='services-preview'>
				<h2>Nossos Serviços</h2>
				<div className='services-grid'>
					<div className='service-card'>
						<img
							src='https://cdn-icons-png.flaticon.com/512/2829/2829804.png'
							alt='pet grooming'
						/>
						<h3>Banho e Tosa</h3>
						<p>Cuidados especiais para seu pet</p>
					</div>
					<div className='service-card'>
						<img
							src='https://cdn-icons-png.flaticon.com/512/2138/2138440.png'
							alt='veterinary'
						/>
						<h3>Veterinária</h3>
						<p>Atendimento especializado</p>
					</div>
					<div className='service-card'>
						<img
							src='https://cdn-icons-png.flaticon.com/512/2138/2138478.png'
							alt='pet shop'
						/>
						<h3>Pet Shop</h3>
						<p>Produtos de qualidade</p>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Home;
