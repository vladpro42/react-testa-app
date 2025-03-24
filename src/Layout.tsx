import { Outlet } from 'react-router-dom';
import Menu from './module/menu/Menu';

export default function Layout() {
    return (
        <div className="app">
            <Menu />
            <main className="content">
                <Outlet />
            </main>
        </div>
    );
}