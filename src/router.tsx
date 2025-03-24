import { createBrowserRouter, Outlet } from 'react-router-dom';
import Layout from './Layout';
import { HomePage } from './pages/clients/HomePage';
import { AboutPage } from './pages/AboutPage';
import { BillPage } from './pages/clients/BillPage';
import { ChatPage } from './pages/ChatPage';
import { CreatePage } from './pages/clients/CreatePage';
import { ClientsLayout } from './pages/clients/ClientsLayout';
import { ChatLayouts } from './pages/chats/ChatLayouts';
import { Chat1 } from './pages/chats/Chat1';
import { Chat3 } from './pages/chats/Chat3';
import { Chat2 } from './pages/chats/Chat2';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: 'about', element: <AboutPage /> },
            {
                path: 'clients',
                element: <ClientsLayout />,
                children: [
                    { path: 'bill', element: <BillPage /> },
                    { path: 'chat', element: <ChatPage /> },
                    { path: 'create', element: <CreatePage /> },
                ]
            },
            {
                path: 'chats',
                element: <ChatLayouts />,
                children: [
                    { path: 'chat1', element: <Chat1 /> },
                    { path: 'chat2', element: <Chat2 /> },
                    { path: 'chat3', element: <Chat3 /> },
                ]
            },
            {
                path: 'inventory',
                element: <div className="inventory-layout">
                    <h2>inventory раздел</h2>
                    <Outlet />
                </div>,
            },
        ]
    }
]);

export default router;
