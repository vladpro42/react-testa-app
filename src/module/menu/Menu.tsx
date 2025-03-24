import { useContext } from "react";
import { MenuContext } from "./MenuContext";
import MenuItem from "./components/MenuItem";



const Menu = () => {

    const menu = useContext(MenuContext);

    if (!menu) return <div>Нет данных</div>

    const { menuList, isOpen, toggleMenu } = menu

    const activeMenuClassName = isOpen ? 'menu--active' : '';

    return <div className="menu-block">
        <div className={`menu  ${activeMenuClassName}`}>
            {
                menuList.map(item => {
                    return <MenuItem key={item.id} item={item} />
                })
            }
        </div>
        <div className="menu__btn">
            <button onClick={toggleMenu}>{isOpen ? 'hidden' : 'show'}</button>
        </div>
    </div>
};

export default Menu;