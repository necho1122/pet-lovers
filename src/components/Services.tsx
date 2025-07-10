import ServicesCard from './ServicesCard';
import { services } from '../utils/constants';

function Services() {
	return (
		<div className='max-w-7xl mx-auto'>
			<section className='bg-[#fffaf0] py-12 px-4 md:px-16'>
				<div className='grid grid-cols-1 md:grid-cols-3 items-center gap-8'>
					<div className='md:col-span-2'>
						<h1 className='text-xl sm:text-5xl font-bold leading-tight text-slate-800'>
							<span className='text-yellow-500'>Os Melhores </span>
							<span className='text-blue-900'>Cuidados </span>
							<span className='text-blue-800'>para seus pets</span>
						</h1>

						<p className='mt-4 text-base text-text max-w-xl'>
							Profissionais dedicados ao bem-estar do seu pet com atendimento em
							domicílio ou na clínica.
						</p>

						<div className='mt-6 flex flex-wrap gap-4'>
							<button className='flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-5 rounded-full shadow-md transition'>
								🛁 Banho e Tosa
							</button>
							<button className='flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white font-semibold py-2 px-5 rounded-full shadow-md transition'>
								💉 Consultas
							</button>
						</div>
					</div>
					<div className='flex justify-center relative'>
						<img
							src='/assets/dog-services-section.webp'
							alt='Perro con gafas'
							className='relative z-10 w-auto h-80 object-contain'
						/>
					</div>
				</div>
			</section>
			<div className=''>
				<h2 className='text-xl p-3 text-center text-primary font-bold'>
					¡Clique na Cartão para Selecionar Seu Serviço Ideal!
				</h2>
				<ul
					className='grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))]
				 list-none gap-3 mx-2 bg-gray-200 rounded-xl px-4 py-6 font-family'
				>
					{services.map((services, index) => (
						<ServicesCard
							key={index}
							url_image={services.src}
							title={services.title}
							description={services.description}
							alt={services.title}
						/>
					))}
				</ul>
			</div>
		</div>
	);
}

export default Services;
