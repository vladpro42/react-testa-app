import { createContext, useContext } from "react";
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
const defaultMenuContext: MenuContextType = {
    menuList: [],
    toggleMenu: () => {},
    isOpen: false,
    onMouseEnter: () => {},
    onMouseLeave: () => {},
    isSubItems: () => false,
    itemHovered: null,
    openSubUnderMenu: () => {},
    activeSubmenuId: null,
    handleClickActiveElement: () => {},
    activeElement: null,
};

export const MenuContext = createContext<MenuContextType>(defaultMenuContext);

export const useMenuContext = (): MenuContextType => {
    const context = useContext(MenuContext);
    if (!context) {
        throw new Error("useMenuContext must be used within a MenuContext.Provider");
    }
    return context;
};
