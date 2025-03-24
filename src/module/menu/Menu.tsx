import { useState } from "react";
import { menuData } from "./nav";
import MenuItem from "./components/MenuItem";

export type NavIds = {
    parentId: number;
    childId: number;
}

const Menu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSubmenuId, setActiveSubmenuId] = useState<number | null>(null);
    const [activeParenMenuId, setActiveParentMenuId] = useState<number | null>(null);

    const toggleSubmenu = (id: number) => {
        if (!isMenuOpen) return;
        setActiveSubmenuId(null);
    };

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
        setActiveSubmenuId(null);
    };

    const handleClickChildLink = (id: number) => {
        setIsMenuOpen(false)
        setActiveSubmenuId(id)
    }

    const handleClickParentLink = (id: number) => {
        setIsMenuOpen(false)
        setActiveParentMenuId(id)
    }

    return (
        <div className="menu-block">
            <ul className={`menu ${isMenuOpen ? 'active' : ''}`}>
                {menuData.map(item => (
                    <MenuItem
                        handleClickChildLink={handleClickChildLink}
                        handleClickParentLink={handleClickParentLink}
                        toggleMenu={toggleMenu} key={item.id}
                        toggleSubmenu={toggleSubmenu} item={item}
                        isMenuOpen={isMenuOpen}
                        activeSubmenuId={activeSubmenuId}
                        activeParenMenuId={activeParenMenuId}
                    />
                ))}
            </ul>

            <button onClick={() => toggleMenu()} className="menu__toggle">
                {isMenuOpen ? '−' : '+'}
            </button>
        </div>
    );
};

export default Menu;