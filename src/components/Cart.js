export function Cart(props){
    const {order = 0,handleBasketShow = Function.prototype,} = props

    return(
        <div className='cart' onClick={handleBasketShow}>
            <i className="material-icons">shopping_cart</i>
            {order?(
                <span className="cart-quantity">{order}</span>
            ):null}
        </div>
    )
}