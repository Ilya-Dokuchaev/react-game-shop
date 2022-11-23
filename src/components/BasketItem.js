export const BasketItem = (props) =>{
    const {
        mainId,
        background,
        displayName:name,
        finalPrice:price,
        quantity,
        removeFromBasket = Function.prototype,
        incQuantity=Function.prototype,decQuantity=Function.prototype,
    } = props

    return(
        <li className="collection-item">
           <div className={"item-desc"}>
               <img src={background} alt="" className="basket-item--img z-depth-5"/>
               <span>{name.length<=12?name:(name.slice(0,13)+'...')}
                   <i className={'material-icons basket-quantity green-text'} onClick={()=>incQuantity(mainId)}>add</i>
                       x {quantity}
                   <i className={'material-icons basket-quantity blue-text'} onClick={()=>decQuantity(mainId)}>remove</i>
                   = {price*quantity}
                   </span>
               <span  className='red-text close' onClick={() => removeFromBasket(mainId)}>
                <i className="material-icons close" >close</i>
            </span>
           </div>
        </li>
    )
}