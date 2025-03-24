import { Outlet } from 'react-router-dom';

export function ChatLayouts() {
    return (
        <div className="clients-layout">
            <h2>Chats раздел</h2>
            <Outlet />
        </div>
    );
}