import { MenuContext } from "./MenuContext";
import Menu from "./Menu";
import { menuData } from "./nav";
import { useState } from "react";

export type objIds = {
    parendId: number | null,
    childId: number | null,
}

const MainMenu = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [itemHovered, setItemHovered] = useState<null | number>(null);



    const toggleMenu = () => {
        setIsOpen(prev => !prev)
    }

    const onMouseEnter = (id: number) => {
        if (isSubItems(id)) {
            return
        }
        setItemHovered(id)
    }
    const onMouseLeave = (id: number | null) => setItemHovered(null)

    const [activeSubmenuId, setActiveSubmenuId] = useState<number | null>(null);

    const openSubUnderMenu = (id: number) => {
        if (!isOpen) { return }
        setActiveSubmenuId(prevId => prevId === id ? null : id);
    };


    const isSubItems = (id: number) => {
        const current = menuData.find(item => item.id === id)
        if (current?.submenu) {
            return true
        }
        return false
    }



    const [activeElement, setActiveElement] = useState<objIds | null>(null);

    const handleClickActiveElement = (objIds: objIds) => {
        setActiveElement(objIds)
    }


    return (
        <MenuContext.Provider value={{
            menuList: menuData,
            toggleMenu: toggleMenu,
            isOpen: isOpen,
            onMouseEnter,
            onMouseLeave,
            itemHovered,
            isSubItems,
            openSubUnderMenu,
            activeSubmenuId,
            handleClickActiveElement,
            activeElement,
        }}>
            <Menu />
        </MenuContext.Provider>
    );
}

export default MainMenu