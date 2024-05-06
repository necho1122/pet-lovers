import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

function Layout() {
	return (
		<div>
			<Navbar />
			<h1>Pet lovers</h1>
			<Outlet />
			<footer>
				<p>© 2024 Pet lovers</p>
			</footer>
		</div>
	);
}

export default Layout;
