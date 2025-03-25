import { useMenuContext } from "./MenuContext";
import MenuItem from "./components/MenuItem";


const Menu = () => {

    const { menuList, isOpen, toggleMenu } = useMenuContext();

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
            <button onClick={toggleMenu}>{isOpen ? '<<' : <img width={30} height={30} src="/width.svg" alt="" />}</button>
        </div>
    </div>
};

export default Menu;