export function Cart(props){
    const {order = 0,handleBasketShow = Function.prototype,isBasketShow,handleBasketClose = Function.prototype,
    } = props

    return(
        <div className='cart' onClick={isBasketShow?handleBasketClose:handleBasketShow}>
            <i className="material-icons">shopping_cart</i>
            {order?(
                <span className="cart-quantity">{order}</span>
            ):null}
        </div>
    )
}