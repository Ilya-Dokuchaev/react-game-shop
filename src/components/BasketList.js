import {BasketItem} from "./BasketItem";


export const BasketList = (props) =>{
    const {
        order,
        handleBasketClose=Function.prototype,
        useComponentVisible,
        removeFromBasket = Function.prototype,
        incQuantity,decQuantity,
    }=props
    const {ref,isComponentVisible} = useComponentVisible(true)

    const totalPrice = order.reduce((sum,el) => {
        return sum + el.finalPrice * el.quantity
    },0)

    return(<>
            {isComponentVisible &&
        <div  className="basket-bg">
                <ul className="collection basket" ref={ref}>
                    <li className="collection-item blue accent-3 white-text">Shopping Cart</li>
                    {
                        order.length ? order.map(item =>(
                            <BasketItem
                                key={item.mainId}
                                removeFromBasket={removeFromBasket}
                                incQuantity={incQuantity}
                                decQuantity={decQuantity}

                                {...item}
                            />
                        )):<li className="collection-item ">Nothing here yet</li>

                    }
                    <li className="collection-item item-desc  blue accent-3 white-text "><button className={'btn'}>Proceed</button>
                        <span className={'right text-bold'}>Price:{totalPrice}</span>

                    </li>
                    <i className="close material-icons basket-close white-text" onClick={handleBasketClose}>close</i>
                </ul>
        </div>
            }


    </>


    )
}