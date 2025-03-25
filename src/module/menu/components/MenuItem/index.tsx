import { Link } from "react-router-dom"
import { Menu, } from "../../types"
import SubMenuItem from "../SubMenuItem"
import { memo, useCallback } from "react"
import { useMenuContext } from "../../MenuContext"


const MenuItem = memo(({ item }: { item: Menu }) => {

    const { isOpen,
        itemHovered,
        onMouseEnter,
        onMouseLeave,
        isSubItems,
        openSubUnderMenu,
        activeSubmenuId,
        activeElement,
        handleClickActiveElement
    } = useMenuContext();

    const subMenoClassName = isOpen ? 'submenu--under' : '';

    const handleMouseEnter = useCallback(() => onMouseEnter(item.id), [item.id, onMouseEnter]);
    const handleMouseLeave = useCallback(() => onMouseLeave(null), [onMouseLeave]);

    const handleClick = useCallback(() => openSubUnderMenu(item.id), [item.id, openSubUnderMenu]);

    return <div
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="menu__item">
        <div className="menu__item-body">
            {
                isSubItems(item.id) ? (
                    <div className="img-container">
                        <img className={` ${activeElement?.parendId === item.id ? 'img-active' : ''}`} width={30} height={30} src={`/${item.img}`} alt="" />
                    </div>) : (
                    <Link onClick={() => handleClickActiveElement({ parendId: item.id, childId: null })} to={item.url} className={`img-container `}>
                        <img className={` ${activeElement?.parendId === item.id ? 'img-active' : ''}`} width={30} height={30} src={`/${item.img}`} alt="" />
                    </Link>
                )}

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
