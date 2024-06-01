import './Vet.css';
import vetBackground from '../assets/vet-min.webp';
import petSurgery from '../assets/pet-surgery.svg';

function Vet() {
	return (
		<div className='vet-container'>
			<div className='vet-overview-section'>
				<div className='vet-overview-information vet-container-child'>
					<h1>
						Saúde e <span style={{ color: '#F7B733' }}>Bem-</span>
						<span style={{ color: '#000' }}>Estar</span> para Todos os Seus
						Animais de Estimação
					</h1>
					<div className='links-vet-section'>
						<a href='to-the-moon'>Veterinário</a>
						<a href='to-the-sun'>Emergência</a>
					</div>
				</div>
				<div className='vet-image-section vet-container-child'>
					<img
						src={vetBackground}
						alt='vet background image'
					/>
				</div>
			</div>
			<div className='vet-services'>
				<h2>
					¡Clique na Cartão para Selecionar Seu Serviço Veterinario Ideal!
				</h2>
				<ul>
					<li>
						<a href='#consultas-de-rotina'>
							<div className='vet-services-image'>
								<img
									src='https://www.svgrepo.com/show/423334/hospital.svg'
									alt='health care check-out'
								/>
							</div>

							<h4>Consultas de Rotina</h4>
							<p>
								Mantenha seu pet saudável com nossas consultas de rotina, onde
								nossa equipe dedicada oferece exames abrangentes e conselhos
								para o bem-estar do seu animal de estimação.
							</p>
						</a>
					</li>
					<li>
						<a href='#vacinacao'>
							<div className='vet-services-image'>
								<img
									src='https://www.svgrepo.com/show/423336/hospital-vaccine.svg'
									alt='vaccine icon'
								/>
							</div>
							<h4>Vacinação</h4>
							<p>
								Proteja seu companheiro peludo contra doenças com nosso serviço
								de vacinação especializado, seguindo as melhores práticas e
								garantindo a saúde contínua do seu pet.
							</p>
						</a>
					</li>
					<li>
						<a href='#cirurgias'>
							<div className='vet-services-image'>
								<img
									src={petSurgery}
									alt='pet surgery icon'
								/>
							</div>
							<h4>Cirurgias</h4>
							<p>
								Conte com nossa equipe experiente para procedimentos cirúrgicos
								seguros e eficazes, proporcionando cuidados de qualidade e
								recuperação tranquila para seu animal de estimação.
							</p>
						</a>
					</li>
					<li>
						<a href='#exames-de-laboratorio'>
							<div className='vet-services-image'>
								<img
									src='https://www.svgrepo.com/show/423340/hospital.svg'
									alt='Laboratory test icon'
								/>
							</div>
							<h4>Exames de Laboratório</h4>
							<p>
								Diagnóstico preciso é fundamental. Realizamos uma variedade de
								exames laboratoriais para identificar problemas de saúde e
								oferecer tratamentos personalizados para seu animal de
								estimação.
							</p>
						</a>
					</li>
					<li>
						<a href='#radiografias-e-ultrassonografias'>
							<div className='vet-services-image'>
								<img
									src='https://www.svgrepo.com/show/423339/hospital-ekg.svg'
									alt='ultrasonic test icon'
								/>
							</div>
							<h4>Radiografias e Ultrassonografias</h4>
							<p>
								Utilizando tecnologia avançada, nossos serviços de radiografia e
								ultrassonografia ajudam a detectar problemas internos e orientam
								o tratamento adequado para o seu pet.
							</p>
						</a>
					</li>
					<li>
						<a href='#atendimento-de-emergencias'>
							<div className='vet-services-image'>
								<img
									src='https://www.svgrepo.com/show/423342/hospital-ambulance.svg'
									alt='emergency icon'
								/>
							</div>
							<h4>Atendimento de Emergências</h4>
							<p>
								Estamos aqui quando você mais precisa. Nossa equipe está
								disponível para atendimentos de emergência, oferecendo cuidados
								imediatos e salvando vidas quando necessário.
							</p>
						</a>
					</li>
					<li>
						<a href='#castracao-e-esterilizacao'>
							<div className='vet-services-image'>
								<img
									src='https://www.svgrepo.com/show/295711/scalpel-surgery.svg'
									alt='sterilization icon'
								/>
							</div>
							<h4>Castração e Esterilização</h4>
							<p>
								Promova uma vida longa e saudável para seu pet com nossos
								serviços de castração e esterilização, contribuindo para o
								controle populacional e prevenção de doenças.
							</p>
						</a>
					</li>
					<li>
						<a href='#odontologia-veterinaria'>
							<div className='vet-services-image'>
								<img
									src='https://www.svgrepo.com/show/385145/dental-dentist-health-healthcare-medical-teeth.svg'
									alt='pet dent icon'
								/>
							</div>
							<h4>Odontologia Veterinária</h4>
							<p>
								Cuide do sorriso do seu animal de estimação com nossos serviços
								especializados em odontologia veterinária, garantindo uma boca
								saudável e um estilo de vida mais confortável para seu pet.
							</p>
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Vet;
