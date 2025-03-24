import { memo, useContext } from "react";
import { Link } from "react-router-dom";
import { MenuItem } from "../../types";
import { MenuContext } from "../../MenuContext";



const SubMenuItem = memo(({ url, item, parentId }: { url: string, item: MenuItem, parentId: number }) => {

    const menu = useContext(MenuContext);
    if (!menu) return <div>Нет данных</div>
    const { handleClickActiveElement, activeElement } = menu
    return <li className={`submenu__item ${activeElement?.parendId === parentId && activeElement?.childId === item.id ? 'submenu__item--active' : ''}`}>
        <Link onClick={() => handleClickActiveElement({ childId: item.id, parendId: parentId })} className="submenu__item-link" to={`/${url}/${item.url}`}>{item.title}</Link>
    </li>
});

export default SubMenuItem;