import { IconType } from "react-icons";

export interface MenuItem {
    id: number;
    title: string;
    url: string;
}


export interface MenuProps {
    id: number;
    title: string;
    img: IconType | string;
    url: string;
    submenu?: MenuItem[];
}
