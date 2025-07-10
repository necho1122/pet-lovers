import ServicesCard from './ServicesCard';
import { vetServices } from '../utils/constants';

function Vet() {
	return (
		<div className='max-w-7xl mx-auto'>
			<section className='bg-[#f0f5fa] py-12 px-4 md:px-16'>
				<div className='grid grid-cols-1 md:grid-cols-3 items-center gap-8'>
					<div className='md:col-span-2'>
						<h2 className='text-4xl md:text-5xl font-bold leading-tight text-slate-800'>
							Saúde e <span className='text-blue-600'>Bem-Estar</span> <br />
							para Seus Animais
						</h2>

						<p className='mt-4 text-lg text-slate-700 max-w-xl'>
							Atendimento clínico completo com profissionais qualificados.
						</p>

						<div className='mt-6 flex flex-wrap gap-4'>
							<button className='bg-blue-900 hover:bg-blue-800 text-white font-semibold py-2 px-6 rounded-md shadow transition'>
								Agendar Consulta
							</button>
							<button className='border border-blue-900 text-blue-900 hover:bg-blue-100 font-semibold py-2 px-6 rounded-md transition'>
								Emergência 24h
							</button>
						</div>
					</div>
					<div className='relative flex justify-center'>
						<img
							src='/assets/vet-min.webp'
							alt='Veterinária com cachorro'
							className='relative z-10 w-auto h-[280px] object-contain'
						/>
					</div>
				</div>
			</section>
			<div className='vet-services'>
				<h2 className='text-xl p-3 text-center text-primary font-bold'>
					¡Clique na Cartão para Selecionar Seu Serviço Veterinario Ideal!
				</h2>
				<ul
					className='grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))]
				 list-none gap-3 mx-2 bg-gray-200 rounded-xl px-4 py-6 font-family'
				>
					{vetServices.map((service, index) => (
						<ServicesCard
							key={index}
							url_image={service.src}
							title={service.title}
							description={service.description}
							alt={service.title}
						/>
					))}
				</ul>
			</div>
		</div>
	);
}

export default Vet;
