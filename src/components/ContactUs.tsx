function ContactUs() {
	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
			<h1 className="text-3xl font-bold text-center text-primary mb-8">
				Entre em contato conosco
			</h1>

			<div className="flex flex-col lg:flex-row gap-12">

				{/* Seção de Informações */}
				<div className="flex-1 space-y-6">
					<div>
						<h5 className="text-lg font-medium text-muted mb-2">
							Para dúvidas ou sugestões, fale conosco:
						</h5>
					</div>

					<div className="flex items-start gap-3">
						<img
							src="https://cdn-icons-png.flaticon.com/512/646/646094.png"
							alt="e-mail icon"
							className="w-6 h-6"
						/>
						<span className="text-text text-sm">petlovers@email.com</span>
					</div>

					<div className="flex items-start gap-3">
						<img
							src="https://cdn-icons-png.flaticon.com/512/6787/6787101.png"
							alt="phone icon"
							className="w-6 h-6"
						/>
						<span className="text-text text-sm">+55 (54) 9 5689-8423</span>
					</div>

					<div className="flex items-start gap-3">
						<img
							src="https://cdn-icons-png.flaticon.com/512/2838/2838912.png"
							alt="location icon"
							className="w-6 h-6"
						/>
						<span className="text-text text-sm">
							Rua Irmão Gildo Schiavo, 700, Caxias do Sul, CEP: 95058-510
						</span>
					</div>

					{/* Redes sociais */}
					<div className="flex items-center gap-4 mt-6">
						<a href="https://www.facebook.com" target="_blank" rel="noreferrer">
							<i className="fab fa-facebook-f text-2xl text-blue-600 hover:opacity-80 transition" />
						</a>
						<a href="https://www.twitter.com" target="_blank" rel="noreferrer">
							<i className="fab fa-twitter text-2xl text-sky-500 hover:opacity-80 transition" />
						</a>
						<a href="https://www.instagram.com" target="_blank" rel="noreferrer">
							<i className="fab fa-instagram text-2xl text-pink-500 hover:opacity-80 transition" />
						</a>
					</div>
				</div>

				{/* Formulário de Contato */}
				<div className="flex-1 bg-white p-6 rounded-xl shadow-md">
					<h2 className="text-xl font-semibold text-primary mb-4">Envie sua mensagem</h2>
					<form className="space-y-4">
						<div>
							<input
								type="text"
								placeholder="Seu nome"
								className="w-full border border-border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
							/>
						</div>
						<div>
							<input
								type="email"
								placeholder="Seu e-mail"
								className="w-full border border-border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
							/>
						</div>
						<div>
							<textarea
								placeholder="Sua mensagem"
								className="w-full border border-border rounded-md px-4 py-2 text-sm min-h-[120px] focus:outline-none focus:ring-2 focus:ring-primary"
							/>
						</div>
						<div>
							<button
								type="submit"
								className="bg-success hover:bg-amber-400 transition text-white font-semibold px-6 py-2 rounded-full shadow"
							>
								Enviar Mensagem
							</button>
						</div>
					</form>
				</div>

			</div>
		</div>
	);
}

export default ContactUs;