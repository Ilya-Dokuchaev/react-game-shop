import {BasketItem} from "./BasketItem";


export const BasketList = (props) =>{
    const {order,handleBasketShow=Function.prototype,useComponentVisible}=props
    const {ref,isComponentVisible} = useComponentVisible(true)

    return(<>
            {isComponentVisible &&
        <div  className="basket-bg">
                <ul className="collection basket" ref={ref}>
                    <li className="collection-item blue accent-1 white-text">Shopping Cart</li>
                    {
                        order.length ? order.map(item =>(
                            <BasketItem key={item.id} {...item}/>
                        )):<li className="collection-item ">Nothing here yet</li>

                    }
                    <li className="collection-item blue accent-1 white-text ">Price</li>
                    <i className="close material-icons basket-close red-text" onClick={handleBasketShow}>close</i>
                </ul>
        </div>
            }


    </>


    )
}