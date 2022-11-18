export function Cart(props){
    const {order = 0} = props

    return(
        <div className='cart'>
            <i className="material-icons">shopping_cart</i>
            {order?(
                <span className="cart-quantity">{order}</span>
            ):null}
        </div>
    )
}