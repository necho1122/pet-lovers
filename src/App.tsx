import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Pets from './components/Pets';
import Products from './components/products/Products';
import Vet from './components/Vet';
import Services from './components/Services';
import ContactUs from './components/ContactUs';
import Cart from './components/Cart';
import PaymentForm from './components/PaymentForm';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						path='/'
						element={<Layout />}
					>
						<Route
							path='/'
							element={<Home />}
						/>
						<Route
							path='/pets'
							element={<Pets />}
						/>
						<Route
							path='/products'
							element={<Products />}
						/>
						<Route
							path='/veterinary'
							element={<Vet />}
						/>
						<Route
							path='/services'
							element={<Services />}
						/>
						<Route
							path='/contact'
							element={<ContactUs />}
						/>
					</Route>
					<Route
						path='/cart'
						element={<Cart />}
					/>
					<Route
						path='/payment'
						element={<PaymentForm />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
