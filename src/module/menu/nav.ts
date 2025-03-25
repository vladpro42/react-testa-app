import { FaAddressBook } from "react-icons/fa";
import { Menu } from "./types";
import { BsChatDots } from "react-icons/bs";

export const menuData: Menu[] = [
    {
        id: 1,
        title: 'clients',
        img: 'mess.svg',
        url: 'clients',
        submenu: [
            { id: 1, title: 'create', url: 'create' },
            { id: 2, title: 'bill', url: 'bill' },
            { id: 3, title: 'chat', url: 'chat' },
        ]
    },
    {
        id: 2,
        title: 'Chat',
        img: 'chat.svg',
        url: 'chats',
        submenu: [
            { id: 1, title: 'Chat dillers', url: 'chat1' },
            { id: 2, title: 'chat2', url: 'chat2' },
            { id: 3, title: 'chat3', url: 'chat3' },
        ]
    },
    {
        id: 3,
        title: 'Inventory',
        img: 'basket.svg',
        url: 'inventory',
    },
];