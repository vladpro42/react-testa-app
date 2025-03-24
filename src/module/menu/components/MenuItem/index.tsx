import { Link } from "react-router-dom"
import { Menu, } from "../../types"
import SubMenuItem from "../SubMenuItem"
import { memo, useContext } from "react"
import { MenuContext } from "../../MenuContext"


const MenuItem = memo(({ item }: { item: Menu }) => {

    const menu = useContext(MenuContext);
    if (!menu) return <div>Нет данных</div>
    const { isOpen, itemHovered, onMouseEnter, onMouseLeave, isSubItems, openSubUnderMenu, activeSubmenuId, activeElement, handleClickActiveElement } = menu

    const subMenoClassName = isOpen ? 'submenu--under' : '';

    console.log(activeElement)


    return <div
        onClick={() => openSubUnderMenu(item.id)}
        onMouseEnter={() => onMouseEnter(item.id)}
        onMouseLeave={() => onMouseLeave(null)}
        className="menu__item">
        <div className="menu__item-body">
            {
                isSubItems(item.id) ? <div className="img-container">
                    <img width={30} height={30} src="/favicon.ico" alt="" />
                </div> : <Link onClick={() => handleClickActiveElement({ parendId: item.id, childId: null })} to={item.url} className="img-container more">
                    <img width={30} height={30} src="/favicon.ico" alt="" />
                </Link>
            }

            {isOpen && <p className={`menu__title ${activeElement?.parendId === item.id ? 'menu__title--active' : ''}`}>{item.title}</p>}
        </div>
        {
            isSubItems(item.id) ? <ul className={`submenu ${subMenoClassName} ${activeSubmenuId == item.id ? 'submenu--active' : ''}`}>
                {
                    item.submenu?.map(child => {
                        return <SubMenuItem parentId={item.id} key={child.id} url={item.url} item={child} />
                    })
                }
            </ul>
                : !isSubItems(item.id) && itemHovered == item.id ? <div className="menu__item-area">{item.title}</div> : ''
        }

    </div>

})

export default MenuItem
