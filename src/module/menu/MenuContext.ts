import { createContext } from "react";
import { Menu } from "./types";
import { objIds } from ".";

type MenuContextType = {
    menuList: Menu[];
    toggleMenu: () => void,
    isOpen: boolean,
    onMouseEnter: (id: number) => void,
    onMouseLeave: (id: number | null) => void,
    isSubItems: (id: number) => boolean,
    itemHovered: null | number,
    openSubUnderMenu: (id: number) => void,
    activeSubmenuId: number | null,
    handleClickActiveElement: (objIds: objIds) => void,
    activeElement: objIds | null,
};

export const MenuContext = createContext<MenuContextType | null>(null);


