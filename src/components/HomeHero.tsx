import {
	FaBoxOpen,
	FaShower,
	FaBandAid,
	FaCapsules,
	FaTruck,
	FaDog,
	FaBox,
	FaPaw,
} from 'react-icons/fa';

import data from '../mocks/productsData.json';

export default function HomeHero() {
	return (
		<section className='bg-white py-10 px-4'>
			<div className='max-w-7xl mx-auto space-y-12'>
				{/* Hero principal */}
				<div className='text-center space-y-4'>
					<h1 className='text-3xl md:text-5xl font-bold text-text'>
						Tudo Para Seu Pet <span className='text-red-500'>❤️</span>
					</h1>
					<p className='text-text text-lg md:text-xl'>
						Produtos, Serviços e Cuidado com Amor
					</p>
					<div className='flex flex-col sm:flex-row justify-center gap-4 mt-4'>
						<button className='bg-primary text-white px-6 py-2 rounded-md font-medium hover:bg-secondary hover:cursor-pointer transition'>
							Ver Produtos
						</button>
						<button className='border border-primary text-primary px-6 py-2 rounded-md font-medium hover:bg-secondary hover:text-white hover:cursor-pointer transition'>
							Agendar Consulta
						</button>
					</div>
				</div>

				<div className='flex flex-row gap-4 justify-center'>
					{/* Categorias */}
					<div className='bg-slate-100 rounded-lg shadow-sm'>
						<h2 className='text-xl font-semibold text-slate-800 mb-4 text-center'>
							Categorias
						</h2>
						<div className='grid grid-cols-2 sm:grid-cols-4 gap-4 justify-items-center'>
							<Category
								icon={<FaBoxOpen size={32} />}
								label='Alimentos'
							/>
							<Category
								icon={<FaShower size={32} />}
								label='Higiene & Saude'
							/>
							<Category
								icon={<FaBandAid size={32} />}
								label='Acessórios'
							/>
							<Category
								icon={<FaCapsules size={32} />}
								label='Farmácia & style'
							/>
						</div>
					</div>

					{/* Benefícios */}
					<div className='bg-slate-100 rounded-lg shadow-sm'>
						<h2 className='text-xl font-semibold text-slate-800 mb-4 text-center'>
							Benefícios
						</h2>
						<div className='grid grid-cols-2 sm:grid-cols-3 gap-4 justify-items-center'>
							<Benefit
								icon={<FaTruck size={32} />}
								label='Frete Rápido'
							/>
							<Benefit
								icon={<FaDog size={32} />}
								label='Atendimento'
							/>
							<Benefit
								icon={<FaBox size={32} />}
								label='Kits Econômicos'
							/>
						</div>
					</div>
				</div>

				{/* Produtos em destaque */}
				<div>
					<h2 className='text-xl font-semibold text-slate-800 mb-4 text-center'>
						Produtos em Destaque
					</h2>
					<div className='grid grid-cols-2 sm:grid-cols-5 gap-4'>
						{data.dogs.food.map((image, index) => (
							<div
								key={index}
								className='w-full h-40 bg-slate-100 rounded-lg shadow-sm flex flex-col justify-between items-center'
							>
								<img
									src={image.foto}
									alt={image.descripcion}
									className='h-28 w-fit'
								/>
								<p className='line-clamp-2 text-sm px-2 text-text'>
									{image.descripcion}
								</p>
							</div>
						))}
					</div>
				</div>

				{/* Pets para Adoção */}
				<div className='bg-slate-100 rounded-xl p-6 flex flex-col sm:flex-row justify-between items-center gap-4'>
					<div className='flex items-center gap-3'>
						<FaPaw className='text-primary text-3xl' />
						<span className='text-lg font-semibold text-text'>
							Pets para Adoção
						</span>
					</div>
					<button className='bg-primary text-white px-6 py-2 rounded-md font-medium hover:bg-secondary transition'>
						Adotar
					</button>
				</div>
			</div>
		</section>
	);
}

function Category({ icon, label }: { icon: React.ReactNode; label: string }) {
	return (
		<div className='flex flex-col items-center text-center space-y-2'>
			<div className='bg-white rounded-full p-3 text-primary'>{icon}</div>
			<span className='text-xs sm:text-sm font-medium text-text'>{label}</span>
		</div>
	);
}

function Benefit({ icon, label }: { icon: React.ReactNode; label: string }) {
	return (
		<div className='flex flex-col items-center text-center space-y-2'>
			<div className='bg-white rounded-full p-3 text-primary'>{icon}</div>
			<span className='text-xs sm:text-sm font-medium text-text'>{label}</span>
		</div>
	);
}
