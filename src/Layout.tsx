import { Outlet } from 'react-router-dom';
import MainMenu from './module/menu';

export default function Layout() {
    return (
        <div className="app">
            <MainMenu />
            <main className="content">
                <Outlet />
            </main>
        </div>
    );
}