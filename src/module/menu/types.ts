import { IconType } from "react-icons";

export interface MenuItem {
    id: number;
    title: string;
    url: string;
}


export interface Menu {
    id: number;
    title: string;
    img: IconType | string;
    url: string;
    submenu?: MenuItem[];
}
