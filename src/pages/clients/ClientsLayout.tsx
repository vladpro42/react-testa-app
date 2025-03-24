import { Outlet } from 'react-router-dom';

export function ClientsLayout() {
    return (
        <div className="clients-layout">
            <h2>Клиентский раздел</h2>
            <Outlet />
        </div>
    );
}