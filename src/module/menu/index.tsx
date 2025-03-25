import { MenuContext } from "./MenuContext";
import Menu from "./Menu";
import { menuData } from "./nav";
import { useCallback, useMemo, useState } from "react";

export type objIds = {
    parendId: number | null,
    childId: number | null,
}

const MainMenu = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [itemHovered, setItemHovered] = useState<null | number>(null);
    const [activeSubmenuId, setActiveSubmenuId] = useState<number | null>(null);
    const [activeElement, setActiveElement] = useState<objIds | null>(null);

    const memoizedMenuData = useMemo(() => menuData, []);

    const toggleMenu = useCallback(() => {
        setIsOpen(prev => !prev)
    }, [])

    const openSubUnderMenu = useCallback((id: number) => {
        if (!isOpen) return;
        setActiveSubmenuId(prevId => (prevId === id ? null : id));
    }, [isOpen]);

    const isSubItems = useCallback((id: number) => {
        const current = memoizedMenuData.find(item => item.id === id);
        return current?.submenu ? true : false;
    }, [memoizedMenuData]);

    const onMouseLeave = useCallback(() => {
        setItemHovered(null);
    }, []);

    const onMouseEnter = useCallback((id: number) => {
        if (!isSubItems(id)) {
            setItemHovered(id);
        }
    }, [isSubItems]);

    const handleClickActiveElement = useCallback((objIds: objIds) => {
        setActiveElement(objIds);
    }, []);


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