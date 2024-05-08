import productsData from '../mocks/productsData.json';
import './Home.css';

function Home() {
	return (
		<div>
			<h1>Pet Lovers</h1>
			<h2>Aqui estão alguns dos nossos produtos:</h2>
			<div className='product-section-home'>
				{productsData.dogs.accesorios.map((product) => (
					<div
						key={product.id}
						className='items-on-home'
					>
						<div className='image-product-container'>
							<img
								src={product.foto}
								alt={product.descripcion}
							/>
						</div>
						<h4>{product.descripcion}</h4>
						<p>R$: {product.precio}</p>
						<button className='add-to-cart'>
							Add to cart
						</button>
					</div>
				))}
			</div>
		</div>
	);
}

export default Home;
