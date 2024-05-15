import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Pets from './components/Pets';

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
						<Route path='/pets' element={<Pets />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
