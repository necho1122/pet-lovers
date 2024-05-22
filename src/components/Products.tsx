import productsData from '../mocks/productsData.json'
import './products.css'

function Products() {
  return (
    <div className='products-container'>
    <h1>Descubra o Melhor para o Seu Pet: Nutrição, Diversão e Bem-Estar</h1>
    <h3>Cães</h3>
    <div className='products-section'>
      {
        productsData.dogs.food.map((product) => (
          <div key={product.id} className='product-slice'>
            <div className="product-image">
            <img src={product.foto} alt='products' />
            </div>
            <div className="product-description">
                <p>{product.descripcion}</p>
            </div>
            <p className='adoption-indication'>R$ {product.precio}</p>
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
        ))
      }
    </div>
    <div className='products-section'>
      {
        productsData.dogs.accesorios.map((product) => (
          <div key={product.id} className='product-slice'>
            <div className="product-image">
            <img src={product.foto} alt='products' />
            </div>
            <div className="product-description">
                <p>{product.descripcion}</p>
            </div>
            <p className='adoption-indication'>R$ {product.precio}</p>
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
        ))
      }
    </div>
    <h3>Gatos</h3>
    <div className='products-section'>
      {
        productsData.gatos.comida.map((product) => (
          <div key={product.id} className='product-slice'>
            <div className="product-image">
            <img src={product.foto} alt='products' />
            </div>
            <div className="product-description">
                <p>{product.descripcion}</p>
            </div>
            <p className='adoption-indication'>R$ {product.precio}</p>
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
        ))
      }
    </div>
    <div className='products-section'>
      {
        productsData.gatos.accesorios.map((product) => (
          <div key={product.id} className='product-slice'>
            <div className="product-image">
            <img src={product.foto} alt='products' />
            </div>
            <div className="product-description">
                <p>{product.descripcion}</p>
            </div>
            <p className='adoption-indication'>R$ {product.precio}</p>
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
        ))
      }
    </div>
    <h3>Aves</h3>
    <div className='products-section'>
      {
        productsData.birds.food.map((product) => (
          <div key={product.id} className='product-slice'>
            <div className="product-image">
            <img src={product.foto} alt='products' />
            </div>
            <div className="product-description">
                <p>{product.descripcion}</p>
            </div>
            <p className='adoption-indication'>R$ {product.precio}</p>
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
        ))
      }
    </div>
    <div className='products-section'>
      {
        productsData.birds.accesorios.map((product) => (
          <div key={product.id} className='product-slice'>
            <div className="product-image">
            <img src={product.foto} alt='products' />
            </div>
            <div className="product-description">
                <p>{product.descripcion}</p>
            </div>
            <p className='adoption-indication'>R$ {product.precio}</p>
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
        ))
      }
    </div>
    </div>
  )
}

export default Products
