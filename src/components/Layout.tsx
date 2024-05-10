import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import './Layout.css';

function Layout() {
	return (
		<div>
			<Navbar />
			<Outlet />
			<footer>
				<p>© 2024 Pet lovers</p>
			</footer>
		</div>
	);
}

export default Layout;
