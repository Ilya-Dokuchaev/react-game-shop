import {useContext} from "react";
import {ShopContext} from "../context";

export const BasketItem = (props) =>{
    const {
        mainId,
        background,
        displayName:name,
        finalPrice:price,
        quantity,
    } = props

    const {removeFromBasket,decQuantity,incQuantity} = useContext(ShopContext)
    return(
        <li className="collection-item">
           <div className={"item-desc"}>
               <img
                   src={background}
                   alt=""
                   className="basket-item--img z-depth-5"
               />
               <span>{name.length<=12?name:(name.slice(0,13)+'...')}
                   <i
                       className={'material-icons basket-quantity green-text'}
                       onClick={()=>incQuantity(mainId)}
                   >add</i>
                       x {quantity}
                   <i
                       className={'material-icons basket-quantity blue-text'}
                       onClick={()=>decQuantity(mainId)}
                   >remove</i>
                   = {price*quantity}
                   <img
                       className='v-buck'
                       src="https://pngset.com/images/v-buck-fortnite-fortnite-v-bucks-text-graphics-art-tape-transparent-png-169569.png"
                       alt=""
                   />
                   </span>
               <span
                   className='red-text close'
                   onClick={() => removeFromBasket(mainId)}
               >
                <i className="material-icons close" >close</i>
            </span>
           </div>
        </li>
    )
}