import { IconType } from "react-icons";
import { MenuProps } from "../../types";
import { Link } from "react-router-dom";

type Props = {
    item: MenuProps,
    isMenuOpen: boolean,
    activeSubmenuId: number | null,
    activeParenMenuId: number | null,
    toggleSubmenu: (id: number) => void,
    toggleMenu: () => void
    handleClickChildLink: (id: number) => void,
    handleClickParentLink: (id: number) => void,
}



const MenuItem = ({
    activeSubmenuId,
    isMenuOpen,
    item,
    toggleSubmenu,
    handleClickChildLink,
    handleClickParentLink,
    activeParenMenuId
}: Props) => {

    const renderIcon = (icon: IconType | string, title: string) => {
        if (typeof icon === 'function') {
            const IconComponent = icon as React.ComponentType<{ className?: string }>;
            return <IconComponent className="menu__icon" />;
        }
        return (
            <img
                width={30}
                height={30}
                src={icon || '/favicon.ico'}
                alt={title}
                className="menu__icon"
            />
        );
    };

    return <li onClick={() => handleClickParentLink(item.id)} className="menu__item">
        <div
            className={`menu__header ${activeParenMenuId === item.id ? 'menu__header--active' : ''}`}
            onClick={() => toggleSubmenu(item.id)}
        >
            <div className="menu__icon-wrapper">
                {renderIcon(item.img, item.title)}
            </div>
            {isMenuOpen && (
                <span className="menu__title">{item.title}</span>
            )}
        </div>

        {item.submenu && (
            <ul
                className={`submenu ${isMenuOpen && activeParenMenuId === item.id ? 'active' : ''}`}
            >
                {item.submenu.map(subItem => (
                    <li key={subItem.id} className={`submenu__item ${activeSubmenuId === subItem.id ? 'submenu__item--active' : ''}`}>
                        <span>◦</span>
                        <Link onClick={() => handleClickChildLink(subItem.id)} to={`/${item.url}/${subItem.url}`} className="submenu__link">
                            {subItem.title}
                        </Link>
                    </li>
                ))}
            </ul>
        )}
    </li>

}

export default MenuItem